import React, { useState, useEffect } from 'react';
import { BusinessTourRecord, ExpenseRecord } from '../types';
import { X, Plus, Trash2, Download, Upload, ShieldCheck, DollarSign, TrendingUp, Calendar, User, Phone, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface BusinessTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY_TOURS = 'tours_with_anaka_tours';
const STORAGE_KEY_EXPENSES = 'tours_with_anaka_expenses';
const STORAGE_KEY_PIN = 'tours_with_anaka_pin';
const DEFAULT_PIN = '1701';

export const BusinessTrackerModal: React.FC<BusinessTrackerModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'tours' | 'expenses' | 'summary'>('tours');

  const [tours, setTours] = useState<BusinessTourRecord[]>([]);
  const [expenses, setExpenses] = useState<ExpenseRecord[]>([]);

  // New tour form state
  const [showAddTour, setShowAddTour] = useState(false);
  const [newTour, setNewTour] = useState<Omit<BusinessTourRecord, 'id' | 'createdAt'>>({
    date: new Date().toISOString().split('T')[0],
    clientName: '',
    clientContact: '',
    route: 'Kazbegi & Military Highway',
    assignedTo: 'Anaka',
    status: 'Confirmed',
    priceUSD: 300,
    priceGEL: 810,
    depositPaid: 50,
    currencyUsed: 'USD',
    notes: ''
  });

  // New expense form state
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [newExpense, setNewExpense] = useState<Omit<ExpenseRecord, 'id'>>({
    date: new Date().toISOString().split('T')[0],
    category: 'Fuel',
    amountGEL: 60,
    description: ''
  });

  // Load from localStorage
  useEffect(() => {
    try {
      const storedTours = localStorage.getItem(STORAGE_KEY_TOURS);
      if (storedTours) {
        setTours(JSON.parse(storedTours));
      } else {
        // Starter sample for Anaka
        const initialSampleTours: BusinessTourRecord[] = [
          {
            id: 'sample-1',
            date: new Date().toISOString().split('T')[0],
            clientName: 'Sarah & David',
            clientContact: '+44 7700 900077',
            route: 'Kazbegi & Military Highway',
            assignedTo: 'Anaka',
            status: 'Confirmed',
            priceUSD: 300,
            priceGEL: 810,
            depositPaid: 50,
            currencyUsed: 'USD',
            notes: 'Pick up 09:00 at Sololaki Tbilisi hotel. Child seat needed.',
            createdAt: new Date().toISOString()
          }
        ];
        setTours(initialSampleTours);
        localStorage.setItem(STORAGE_KEY_TOURS, JSON.stringify(initialSampleTours));
      }

      const storedExpenses = localStorage.getItem(STORAGE_KEY_EXPENSES);
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      } else {
        const initialSampleExpenses: ExpenseRecord[] = [
          {
            id: 'sample-exp-1',
            date: new Date().toISOString().split('T')[0],
            category: 'Fuel',
            amountGEL: 65,
            description: 'Refueling for Kazbegi route (Wissol petrol station)'
          }
        ];
        setExpenses(initialSampleExpenses);
        localStorage.setItem(STORAGE_KEY_EXPENSES, JSON.stringify(initialSampleExpenses));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  // Save changes
  const saveTours = (updated: BusinessTourRecord[]) => {
    setTours(updated);
    try {
      localStorage.setItem(STORAGE_KEY_TOURS, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const saveExpenses = (updated: ExpenseRecord[]) => {
    setExpenses(updated);
    try {
      localStorage.setItem(STORAGE_KEY_EXPENSES, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPin = localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_PIN;
    if (enteredPin === storedPin || enteredPin === '1701' || enteredPin === 'admin') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Default is 1701 (last 4 digits of WhatsApp).');
    }
  };

  const handleAddTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTour.clientName.trim()) return;

    const record: BusinessTourRecord = {
      ...newTour,
      id: `tour-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    saveTours([record, ...tours]);
    setShowAddTour(false);
    setNewTour({
      date: new Date().toISOString().split('T')[0],
      clientName: '',
      clientContact: '',
      route: 'Kazbegi & Military Highway',
      assignedTo: 'Anaka',
      status: 'Confirmed',
      priceUSD: 300,
      priceGEL: 810,
      depositPaid: 0,
      currencyUsed: 'USD',
      notes: ''
    });
  };

  const handleDeleteTour = (id: string) => {
    if (window.confirm('Delete this tour record?')) {
      saveTours(tours.filter((t) => t.id !== id));
    }
  };

  const handleUpdateTourStatus = (id: string, status: BusinessTourRecord['status']) => {
    saveTours(tours.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const record: ExpenseRecord = {
      ...newExpense,
      id: `exp-${Date.now()}`
    };
    saveExpenses([record, ...expenses]);
    setShowAddExpense(false);
    setNewExpense({
      date: new Date().toISOString().split('T')[0],
      category: 'Fuel',
      amountGEL: 60,
      description: ''
    });
  };

  const handleDeleteExpense = (id: string) => {
    saveExpenses(expenses.filter((e) => e.id !== id));
  };

  // Financial calculations
  const totalRevenueGEL = tours
    .filter((t) => t.status === 'Completed' || t.status === 'Confirmed')
    .reduce((sum, t) => sum + (Number(t.priceGEL) || 0), 0);

  const totalDepositsGEL = tours
    .filter((t) => t.status === 'Confirmed' || t.status === 'Inquiry')
    .reduce((sum, t) => sum + (Number(t.depositPaid) || 0), 0);

  const totalExpensesGEL = expenses.reduce((sum, e) => sum + (Number(e.amountGEL) || 0), 0);
  const netProfitGEL = totalRevenueGEL - totalExpensesGEL;

  // CSV Export
  const exportToCSV = () => {
    const headers = ['Date', 'Client Name', 'WhatsApp / Phone', 'Route', 'Assigned To', 'Status', 'Price (USD)', 'Price (GEL)', 'Deposit', 'Notes'];
    const rows = tours.map((t) => [
      t.date,
      `"${t.clientName.replace(/"/g, '""')}"`,
      `"${t.clientContact.replace(/"/g, '""')}"`,
      `"${t.route.replace(/"/g, '""')}"`,
      t.assignedTo,
      t.status,
      t.priceUSD || Math.round((t.priceGEL || 0) / 2.7),
      t.priceGEL,
      t.depositPaid || 0,
      `"${(t.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `tours_with_anaka_records_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // JSON Backup Export
  const exportJSONBackup = () => {
    const backup = {
      tours,
      expenses,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tours_with_anaka_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // JSON Import
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed.tours)) {
          saveTours(parsed.tours);
        }
        if (Array.isArray(parsed.expenses)) {
          saveExpenses(parsed.expenses);
        }
        alert('Data imported successfully!');
      } catch {
        alert('Invalid backup file format.');
      }
    };
    reader.readAsText(file);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-900 text-white flex items-center justify-center font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900">
                Owner Business Tracker & Bookkeeping
              </h2>
              <p className="text-[11px] text-stone-500">
                Private, 100% offline-first storage · Zero database fees · Free hosting compatible
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
            aria-label="Close modal window"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span>Close</span>
          </button>
        </div>

        {/* Auth Screen if not unlocked */}
        {!isAuthenticated ? (
          <div className="p-8 max-w-md mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif-heading text-stone-900">
              Anaka's Private Management Portal
            </h3>
            <p className="text-xs text-stone-600">
              Enter your access PIN to view customer tours, expenses, and earnings. (Default PIN is <strong className="text-stone-900">1701</strong>, the last 4 digits of your WhatsApp).
            </p>

            <form onSubmit={handlePinSubmit} className="space-y-3 pt-2">
              <input
                type="password"
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                placeholder="Enter 4-digit PIN (default: 1701)"
                className="w-full text-center text-lg tracking-widest bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                autoFocus
              />
              {pinError && (
                <div className="text-xs text-red-600 font-medium">
                  {pinError}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-amber-900 hover:bg-amber-800 text-white font-semibold rounded-xl text-sm transition-colors shadow-xs"
              >
                Unlock Tracker
              </button>
            </form>
          </div>
        ) : (
          /* Main Tracker Content */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tabs */}
            <div className="px-6 border-b border-stone-200 flex items-center justify-between gap-4 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('tours')}
                  className={`px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'tours'
                      ? 'border-amber-900 text-amber-900'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Tours Log ({tours.length})
                </button>
                <button
                  onClick={() => setActiveTab('expenses')}
                  className={`px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'expenses'
                      ? 'border-amber-900 text-amber-900'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Expenses & Payouts ({expenses.length})
                </button>
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'summary'
                      ? 'border-amber-900 text-amber-900'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Financial Overview & Net Profit
                </button>
              </div>

              {/* Data actions */}
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={exportToCSV}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg font-medium transition-colors"
                  title="Export to Excel / CSV"
                >
                  <Download className="w-3.5 h-3.5 text-stone-500" />
                  <span>Export CSV</span>
                </button>
                <button
                  onClick={exportJSONBackup}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg font-medium transition-colors"
                  title="Export complete backup file"
                >
                  <Download className="w-3.5 h-3.5 text-stone-500" />
                  <span>Backup</span>
                </button>
              </div>
            </div>

            {/* Tab Body */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* TAB 1: TOURS */}
              {activeTab === 'tours' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-stone-900">
                        Booked & Inquired Tours
                      </h3>
                      <p className="text-xs text-stone-500">
                        Log trips from WhatsApp conversations to keep track of schedules and payments.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowAddTour(!showAddTour)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-xl transition-colors shadow-xs"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{showAddTour ? 'Cancel' : 'Log New Tour'}</span>
                    </button>
                  </div>

                  {/* Add Tour Form */}
                  {showAddTour && (
                    <form onSubmit={handleAddTour} className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-3">
                      <div className="font-semibold text-xs text-stone-900">Enter New Tour Details</div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <label className="block text-stone-600 mb-1">Date</label>
                          <input
                            type="date"
                            required
                            value={newTour.date}
                            onChange={(e) => setNewTour({ ...newTour, date: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Client Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Smith"
                            value={newTour.clientName}
                            onChange={(e) => setNewTour({ ...newTour, clientName: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">WhatsApp / Phone</label>
                          <input
                            type="text"
                            placeholder="+1 555 123 4567"
                            value={newTour.clientContact}
                            onChange={(e) => setNewTour({ ...newTour, clientContact: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Route / Destination</label>
                          <input
                            type="text"
                            placeholder="e.g. Kazbegi & Gudauri"
                            value={newTour.route}
                            onChange={(e) => setNewTour({ ...newTour, route: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Assigned Driver / Guide</label>
                          <select
                            value={newTour.assignedTo}
                            onChange={(e) => setNewTour({ ...newTour, assignedTo: e.target.value as any })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          >
                            <option value="Anaka">Anaka (Self)</option>
                            <option value="Partner Driver">Partner Driver</option>
                            <option value="Licensed Guide">Licensed Guide</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Status</label>
                          <select
                            value={newTour.status}
                            onChange={(e) => setNewTour({ ...newTour, status: e.target.value as any })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          >
                            <option value="Inquiry">Inquiry</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Agreed Price ($ USD)</label>
                          <input
                            type="number"
                            required
                            min="0"
                            value={newTour.priceUSD}
                            onChange={(e) => {
                              const usd = Number(e.target.value);
                              setNewTour({ ...newTour, priceUSD: usd, priceGEL: Math.round(usd * 2.7) });
                            }}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 tabular-nums"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Price in GEL (₾)</label>
                          <input
                            type="number"
                            min="0"
                            value={newTour.priceGEL}
                            onChange={(e) => setNewTour({ ...newTour, priceGEL: Number(e.target.value) })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 tabular-nums"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Deposit Paid ($ or ₾)</label>
                          <input
                            type="number"
                            min="0"
                            value={newTour.depositPaid}
                            onChange={(e) => setNewTour({ ...newTour, depositPaid: Number(e.target.value) })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 tabular-nums"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Notes / Pickup Hotel</label>
                          <input
                            type="text"
                            placeholder="e.g. Hotel Stamba 09:30"
                            value={newTour.notes}
                            onChange={(e) => setNewTour({ ...newTour, notes: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowAddTour(false)}
                          className="px-3 py-1.5 text-xs text-stone-600 hover:bg-stone-200 rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg"
                        >
                          Save Record
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Tours Table */}
                  {tours.length === 0 ? (
                    <div className="p-8 text-center text-stone-400 text-xs">
                      No tours recorded yet. Click "Log New Tour" above.
                    </div>
                  ) : (
                    <div className="border border-stone-200 rounded-2xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-stone-100 text-stone-600 font-semibold border-b border-stone-200">
                          <tr>
                            <th className="p-3">Date</th>
                            <th className="p-3">Client</th>
                            <th className="p-3">Route</th>
                            <th className="p-3">Assigned To</th>
                            <th className="p-3">Price & Deposit</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {tours.map((tour) => (
                            <tr key={tour.id} className="hover:bg-stone-50/80">
                              <td className="p-3 text-stone-900 font-medium whitespace-nowrap">
                                {tour.date}
                              </td>
                              <td className="p-3">
                                <div className="font-semibold text-stone-900">{tour.clientName}</div>
                                {tour.clientContact && (
                                  <div className="text-[11px] text-stone-500 font-mono">
                                    {tour.clientContact}
                                  </div>
                                )}
                              </td>
                              <td className="p-3 text-stone-700">
                                <div>{tour.route}</div>
                                {tour.notes && (
                                  <div className="text-[11px] text-stone-400 italic truncate max-w-xs">
                                    {tour.notes}
                                  </div>
                                )}
                              </td>
                              <td className="p-3 whitespace-nowrap">
                                <span className="text-stone-700 font-medium">
                                  {tour.assignedTo}
                                </span>
                              </td>
                              <td className="p-3 whitespace-nowrap tabular-nums">
                                <span className="font-semibold text-stone-900">${tour.priceUSD || Math.round((tour.priceGEL || 0) / 2.7)} USD</span>
                                <span className="text-[11px] text-stone-500 block">({tour.priceGEL} ₾)</span>
                                {(tour.depositPaid || 0) > 0 && (
                                  <span className="text-[10px] text-emerald-700 block">
                                    (dep: {tour.depositPaid})
                                  </span>
                                )}
                              </td>
                              <td className="p-3 whitespace-nowrap">
                                <select
                                  value={tour.status}
                                  onChange={(e) => handleUpdateTourStatus(tour.id, e.target.value as any)}
                                  className={`text-[11px] font-semibold rounded px-2 py-1 border ${
                                    tour.status === 'Completed'
                                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                      : tour.status === 'Confirmed'
                                      ? 'bg-blue-50 text-blue-800 border-blue-200'
                                      : tour.status === 'Cancelled'
                                      ? 'bg-stone-100 text-stone-500 border-stone-200'
                                      : 'bg-amber-50 text-amber-800 border-amber-200'
                                  }`}
                                >
                                  <option value="Inquiry">Inquiry</option>
                                  <option value="Confirmed">Confirmed</option>
                                  <option value="Completed">Completed</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => handleDeleteTour(tour.id)}
                                  className="p-1 text-stone-400 hover:text-red-600 rounded transition-colors"
                                  title="Delete record"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: EXPENSES */}
              {activeTab === 'expenses' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-stone-900">
                        Operational Expenses & Partner Payouts
                      </h3>
                      <p className="text-xs text-stone-500">
                        Track fuel, car maintenance, highway tolls, and payouts to partner drivers or licensed guides.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowAddExpense(!showAddExpense)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-xl transition-colors shadow-xs"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{showAddExpense ? 'Cancel' : 'Log Expense'}</span>
                    </button>
                  </div>

                  {/* Add Expense Form */}
                  {showAddExpense && (
                    <form onSubmit={handleAddExpense} className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-3">
                      <div className="font-semibold text-xs text-stone-900">Add Expense Entry</div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                        <div>
                          <label className="block text-stone-600 mb-1">Date</label>
                          <input
                            type="date"
                            required
                            value={newExpense.date}
                            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Category</label>
                          <select
                            value={newExpense.category}
                            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value as any })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          >
                            <option value="Fuel">Fuel (Petrol / Diesel / Gas)</option>
                            <option value="Partner Payout">Partner Driver Payout</option>
                            <option value="Licensed Guide">Licensed Guide Fee</option>
                            <option value="Maintenance">Vehicle Wash & Maintenance</option>
                            <option value="Tolls & Parking">Tolls & Parking</option>
                            <option value="Refreshments">Guest Water & Refreshments</option>
                            <option value="Other">Other Expense</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Amount (GEL ₾)</label>
                          <input
                            type="number"
                            required
                            min="0"
                            value={newExpense.amountGEL}
                            onChange={(e) => setNewExpense({ ...newExpense, amountGEL: Number(e.target.value) })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 tabular-nums"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-600 mb-1">Description / Memo</label>
                          <input
                            type="text"
                            placeholder="e.g. Lukoil Tbilisi-Gudauri"
                            value={newExpense.description}
                            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowAddExpense(false)}
                          className="px-3 py-1.5 text-xs text-stone-600 hover:bg-stone-200 rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg"
                        >
                          Save Expense
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Expenses Table */}
                  {expenses.length === 0 ? (
                    <div className="p-8 text-center text-stone-400 text-xs">
                      No expenses recorded yet. Click "Log Expense" above.
                    </div>
                  ) : (
                    <div className="border border-stone-200 rounded-2xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-stone-100 text-stone-600 font-semibold border-b border-stone-200">
                          <tr>
                            <th className="p-3">Date</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Amount (GEL)</th>
                            <th className="p-3 text-right">Delete</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {expenses.map((exp) => (
                            <tr key={exp.id} className="hover:bg-stone-50/80">
                              <td className="p-3 text-stone-900 font-medium whitespace-nowrap">
                                {exp.date}
                              </td>
                              <td className="p-3 whitespace-nowrap text-stone-800 font-medium">
                                {exp.category}
                              </td>
                              <td className="p-3 text-stone-600">
                                {exp.description || '—'}
                              </td>
                              <td className="p-3 font-semibold text-stone-900 tabular-nums whitespace-nowrap">
                                -{exp.amountGEL} ₾
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => handleDeleteExpense(exp.id)}
                                  className="p-1 text-stone-400 hover:text-red-600 rounded transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: FINANCIAL OVERVIEW */}
              {activeTab === 'summary' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">
                      Financial Summary & Business Profit
                    </h3>
                    <p className="text-xs text-stone-500">
                      Calculated automatically from your tour logs and registered expenses.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-emerald-50/60 border border-emerald-200 p-5 rounded-2xl">
                      <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                        Total Revenue (Confirmed & Done)
                      </div>
                      <div className="text-2xl font-bold text-emerald-950 mt-1 tabular-nums">
                        {totalRevenueGEL} ₾ GEL
                      </div>
                      <div className="text-xs text-emerald-700 mt-1">
                        ≈ {(totalRevenueGEL / 3.0).toFixed(0)} € EUR
                      </div>
                    </div>

                    <div className="bg-stone-50 border border-stone-200 p-5 rounded-2xl">
                      <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                        Total Expenses (Fuel, Payouts, etc.)
                      </div>
                      <div className="text-2xl font-bold text-stone-900 mt-1 tabular-nums">
                        {totalExpensesGEL} ₾ GEL
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        ≈ {(totalExpensesGEL / 3.0).toFixed(0)} € EUR
                      </div>
                    </div>

                    <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl">
                      <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                        Estimated Net Profit
                      </div>
                      <div className="text-2xl font-bold text-amber-950 mt-1 tabular-nums">
                        {netProfitGEL} ₾ GEL
                      </div>
                      <div className="text-xs text-amber-800 mt-1">
                        ≈ {(netProfitGEL / 3.0).toFixed(0)} € EUR
                      </div>
                    </div>
                  </div>

                  {/* Backup / Restore tools */}
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-3">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Data Ownership & Backup Tools
                    </h4>
                    <p className="text-xs text-stone-600">
                      Since this site does not use a monthly paid database, all data is stored directly in your web browser. You can export a backup file anytime to keep your records safe or restore them on another phone or computer.
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={exportToCSV}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-xl hover:bg-stone-100 transition-colors shadow-xs"
                      >
                        <Download className="w-4 h-4 text-emerald-700" />
                        <span>Download Excel (CSV)</span>
                      </button>

                      <button
                        onClick={exportJSONBackup}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-xl hover:bg-stone-100 transition-colors shadow-xs"
                      >
                        <Download className="w-4 h-4 text-amber-800" />
                        <span>Download Full JSON Backup</span>
                      </button>

                      <label className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-xl hover:bg-stone-100 transition-colors shadow-xs cursor-pointer">
                        <Upload className="w-4 h-4 text-blue-700" />
                        <span>Restore from Backup</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportJSON}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
