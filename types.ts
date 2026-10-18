export type Currency = 'USD' | 'GEL' | 'EUR';

export interface TourRiskInfo {
  destinationName: string;
  terrainType: string;
  roadDifficulty: 'Easy Paved Highway' | 'Winding Mountain Roads' | 'Steep High Alpine Pass' | 'Rugged 4x4 Off-Road & Mud Tracks';
  weatherAlert: string;
  gettingStuckRisk: string;
  seasonalityWarning: string;
  essentialGear: string[];
  anakaSafetyAdvice: string;
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  durationNote: string;
  startingPriceUSD: number;
  startingPriceGEL: number;
  startingPriceEUR: number;
  image: string;
  imageAlt: string;
  highlights: string[];
  description: string;
  vehicleSuitability: string;
  isSpecialSignature?: boolean;
  externalLink?: string;
  partnerHost?: string;
  includedDetails?: string[];
  specialAddons?: { name: string; priceUSD: number; description: string }[];
  cottageGallery?: string[];
  risks?: TourRiskInfo;
}

export interface HikingRoute {
  id: string;
  name: string;
  region: string;
  highlights: string;
  difficulty: 'Moderate' | 'Challenging' | 'Alpine Expedition';
  risks?: TourRiskInfo;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  cameraInfo: string;
}

export interface CustomTourInquiry {
  dateType: 'exact' | 'approximate';
  dateValue: string;
  numberOfPeople: string;
  hasPets: boolean;
  petDetails: string;
  hasChildren: boolean;
  childDetails: string;
  numberOfStops: '1-2 relaxed stops' | '3-4 stops' | '5+ full exploration' | 'Custom';
  stopTypePreference: 'Mainly long sightseeing & walks' | 'Balanced sightseeing & photos' | 'Quick scenic viewpoints' | '4x4 Off-Road & Hiking';
  locationsToSee: string;
  pickupLocation: string;
  wantHikingWithNino: boolean;
  wantDestinyMatrixReading: boolean;
  wantNumerologySession?: boolean; // legacy alias
  wantArmeniaCrossBorder: boolean;
  wantPhotoSession: boolean;
  additionalNeedsOrQuestions: string;
}

export interface CompanionServiceBooking {
  durationHours: number;
  rateUSD: number;
  occasion: string;
  expensesCoveredByGuest: boolean;
  notes: string;
}

export interface BusinessTourRecord {
  id: string;
  date: string;
  clientName: string;
  clientContact: string;
  route: string;
  assignedTo: 'Anaka' | 'Nino (4x4 Hiking)' | 'Partner Driver (Female)' | 'Partner Driver (Male)' | 'Licensed Guide';
  status: 'Inquiry' | 'Confirmed' | 'Completed' | 'Cancelled';
  priceUSD: number;
  priceGEL: number;
  depositPaid: number;
  currencyUsed: 'USD' | 'GEL' | 'EUR';
  notes: string;
  createdAt: string;
}

export interface ExpenseRecord {
  id: string;
  date: string;
  tourId?: string;
  category: 'Fuel' | 'Partner Driver Payout' | 'Licensed Guide Fee' | 'Maintenance & Cleaning' | 'Tolls & Parking' | 'Refreshments' | 'Other';
  amountGEL: number;
  description: string;
}
