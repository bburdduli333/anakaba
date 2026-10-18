import { Tour, Currency, HikingRoute, GalleryPhoto } from '../types';
import { photo, isPlaceholder } from './photos';

export const WHATSAPP_NUMBER = '995571001701';
export const WHATSAPP_DISPLAY = '+995 571 001 701';
export const WHATSAPP_BASE_URL = 'https://wa.me/995571001701';

// Nino Paichadze Bio Wine & Wooden Cottage Real Photos (Authentic User Uploads - Zero AI)
export const NINO_VINEYARD_HARVEST = photo('nino-vineyard', 'Nino in her vineyard');
export const NINO_QVEVRI_WINEMAKING = photo('nino-qvevri', 'Qvevri winemaking');
export const NINO_COTTAGE_EXTERIOR = photo('nino-landscape', 'Nino vineyard');
export const NINO_COTTAGE_LIVINGROOM = photo('nino-cottage-living', 'Cottage living room');
export const NINO_COTTAGE_BATH = photo('nino-cottage-bath', 'Cottage bathroom');

// Anaka Real Photos (Authentic User Uploads - Zero AI)
export const ANAKA_PORTRAIT = photo('anaka-portrait', 'Anaka');
export const ANAKA_SUNSET_GUITAR = photo('anaka-bakhmaro', 'Bakhmaro sunset');
export const ANAKA_CANDID = photo('anaka-candid', 'On the road');

// Official Google Business Profile Logo & Reddit Poster
export const ANAKA_GOOGLE_BUSINESS_LOGO = photo('anaka-logo', 'Tours with Anaka');
export const ANAKA_REDDIT_POSTER = photo('anaka-poster', 'Private Driver in Georgia');

export const HERO_IMAGE = ANAKA_PORTRAIT;
export const NINO_4X4_HIKING_IMAGE = photo('nino-ranger', 'Nino 4x4 Ford Ranger');

// Irma Shvelidze Real Photos (Handmade stone art garden & Kakhetian supra - Zero AI)
export const IRMA_STONE_ART_GARDEN = photo('irma-garden', 'Irma stone-art garden');
export const IRMA_FAMILY_SUPRA = photo('irma-supra-family', 'Family supra');
export const IRMA_SUPRA_CLASSIC = photo('irma-supra', 'Supra in the garden');

// Anaka's Original Canon Camera Road Trip Photos (Real User Photos - Zero AI)
export const CANON_PHOTO_CAUCASUS_MIST = photo('canon-caucasus-mist', 'Caucasus mist');
export const CANON_PHOTO_KAKHETI_HARVEST = photo('canon-kakheti-harvest', 'Kakheti harvest');
export const CANON_PHOTO_MOUNTAIN_PASS = photo('canon-mountain-pass', 'Mountain pass');
export const CANON_PHOTO_OLD_SOLOLAKI = photo('canon-sololaki', 'Old Sololaki');

export const USD_TO_GEL = 2.7;
export const USD_TO_EUR = 0.92;

export function formatPrice(priceUSD: number, currency: Currency): string {
  if (currency === 'USD') return `$${priceUSD} USD`;
  if (currency === 'GEL') return `${Math.round(priceUSD * USD_TO_GEL)} ₾ GEL`;
  return `${Math.round(priceUSD * USD_TO_EUR)} € EUR`;
}

// ANAKA INCLUSIVITY ETHICS STATEMENT
export const INCLUSIVITY_STATEMENT = {
  badge: '🏳️‍🌈 LGBTQ+ & Internationally Friendly · Zero Racism or Homophobia',
  title: 'Safe, Inclusive & Welcoming Space For Every Traveler',
  body: 'We say a firm NO to racism, homophobia, and any form of discrimination. We warmly welcome LGBTQ+ travelers, solo female adventurers, couples, families, and guests of every race, religion, nationality, and background. Georgia is famous for hospitality, and in our vehicles and stays, you are safe, respected, and genuinely cared for.'
};

// GROUP SIZE & VEHICLE CAPACITIES
export const GROUP_SIZE_POLICY = {
  withAnaka: '1 to 3 Adults (Intimate, relaxed, non-smoker 2016 Toyota Corolla with A/C)',
  preFormedGroups: 'Up to 45 People (Pre-assembled groups, families, weddings, retreats coordinated with vetted Mercedes Sprinter minibuses or 45-seat touring coaches)',
  driverAllocation: 'Drivers are destined/assigned to travelers by Anaka based on route difficulty (4x4 mountain pass vs highway) and group size. Travelers do not choose drivers from a menu. Nino Paichadze is our featured main partner girl (her bio-wine cottage and 4x4 expeditions bring shared income), and other vetted mountain drivers also operate hiking routes.'
};

// MULTI-TOUR DISCOUNT SCHEDULE
export const MULTI_TOUR_DISCOUNTS = [
  { tourNumber: 1, discountPercent: 0, label: '1st Tour: Regular Price' },
  { tourNumber: 2, discountPercent: 10, label: '2nd Tour: 10% SALE' },
  { tourNumber: 3, discountPercent: 15, label: '3rd Tour: 15% SALE' },
  { tourNumber: 4, discountPercent: 20, label: '4th Tour: 20% SALE' }
];

// REFERRAL CASHBACK PROGRAM
export const CASHBACK_PROGRAM = {
  oneFriend: '10% Cashback when bringing 1 friend',
  multipleFriends: '20% Cashback from all travelers when bringing multiple people',
  condition: 'Cashback must be discussed and agreed upon with Anaka in advance before booking.'
};

// WINERY CHOICES
export const WINERY_OPTIONS = {
  homemade: 'Authentic Homemade Family Maranis: Secret village yards, subterranean clay Qvevri buried in the earth, unfiltered natural amber wine, and homemade family snacks.',
  factory: 'Fancy Factory & Palace Estates: Elegant châteaux (Château Mukhrani, Prince Chavchavadze Tsinandali Estate, Khareba wine tunnels) with manicured gardens, sommeliers, and polished tasting rooms.',
  flexibility: 'The traveler chooses their favorite style—or we can blend both into the same tour!'
};

// COMPANION SERVICE DETAILS
export const COMPANION_SERVICE_DETAILS = {
  standardRateUSD: 100,
  startingFromUSD: 80,
  durationHours: 6,
  notes: 'Typically starts from $80 USD and is usually $100 USD for up to 6 hours. If the event is far outside Tbilisi, requires extra travel, or demands significant energy/late-night hours, the cost is customized and agreed upon beforehand.'
};

// ANAKA PROFILE DETAILS
export const ANAKA_PROFILE = {
  fullName: 'Ana Burduli (Anaka)',
  age: 22,
  zodiac: 'Leo (Born July 29, 2004)',
  birthplace: 'Born and raised in Tbilisi, Georgia',
  heritage: 'Originally rooted in both the Georgian high Caucasus mountains and Kakheti wine country',
  education: 'Psychology Bachelor Degree (Final Year Student)',
  music: 'Singer in an academic choir (studying singing since 2010; concerts & cultural events); guitar teacher',
  vehicle: '2016 Toyota Corolla (Clean, air-conditioned, reliable & safe · Strictly 1–3 adults)',
  vibe: 'Safe, chill, and local vibes · Great music on the road 🎵',
  experience: 'Tourism management, youth group travel & safety supervision (ICSU), cafe/restaurant service, administration, and kindergartens',
  languages: 'Georgian (Native), English (Fluent), Russian (Fluent)',
  instagram: '@bburdduli',
  email: 'Burduliana@gmail.com',
  phone: '+995 571 001 701'
};

export const PHOTO_SESSION_OFFER = {
  priceUSD: 30,
  title: "Anaka's Casual Canon Photo Memories",
  shortTag: "+$30 USD / Day",
  description: "Not a professional photoshoot! Anaka brings along her beginner Canon camera to snap candid travel photos, natural portraits, and viewpoint shots of you throughout your day. You get all the unedited digital photos sent directly to your phone/email—no need to awkwardly ask strangers to take a picture of you!"
};

// ANAKA'S TRAVEL PHOTO GALLERY (real photos only)
const ALL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-clouds-sunset',
    image: photo('gallery-clouds-sunset', 'Sunset above the clouds'),
    title: 'Sunset Above the Clouds',
    location: 'Georgian mountains',
    description: 'Wooden mountain houses on a ridge while the clouds fill the valley and the sky turns orange.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-corolla-forest',
    image: photo('gallery-corolla-forest', 'My Corolla in the forest'),
    title: 'My Corolla on a Forest Road',
    location: 'Georgia',
    description: 'The 2016 Toyota Corolla parked on a quiet gravel road between old trees.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-uplistsikhe',
    image: photo('gallery-uplistsikhe', 'Uplistsikhe'),
    title: 'Uplistsikhe Cave City',
    location: 'Shida Kartli',
    description: 'Rock-cut caves and an old church on the hilltop under heavy clouds.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-chapel-tower',
    image: photo('gallery-chapel-tower', 'Old chapel and bell tower'),
    title: 'Old Stone Bell Tower and Chapel',
    location: 'Georgia',
    description: 'A medieval stone bell tower and a small chapel hidden in the forest.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-sea-sunset',
    image: photo('gallery-sea-sunset', 'Sunset by the sea'),
    title: 'Sunset by the Sea',
    location: 'Coast',
    description: 'Quiet evening light over the water, with paddle boards in the distance.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-yerevan',
    image: photo('gallery-yerevan', 'Yerevan'),
    title: 'A Painted Chimney in Yerevan',
    location: 'Yerevan, Armenia',
    description: 'A colorful mural running up the side of an old stone apartment building.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-church-frescoes',
    image: photo('gallery-church-frescoes', 'Church frescoes'),
    title: 'Old Church with Faded Frescoes',
    location: 'The Caucasus',
    description: 'Light falling on ancient frescoes inside a stone church.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-sunset-guitar',
    image: photo('anaka-bakhmaro', 'Sunset with guitar'),
    title: 'Guitar Above the Clouds at Sunset',
    location: 'Georgian mountains',
    description: 'A golden sunset over a sea of clouds, with my guitar next to me.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-mushroom',
    image: photo('gallery-mushroom', 'Forest mushrooms'),
    title: 'Orange Mushrooms on an Old Tree',
    location: 'Georgian forest',
    description: 'Bright shelf mushrooms growing on a mossy trunk after rain.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-dog-stream',
    image: photo('gallery-dog-stream', 'Dog by the stream'),
    title: 'A Dog Cooling Off Under a Stone Arch',
    location: 'Georgian forest',
    description: 'A friendly dog resting in a shallow stream under an old stone bridge.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-cross-spring',
    image: photo('gallery-cross-spring', 'Spring with a cross'),
    title: 'A Mossy Spring with a Stone Cross',
    location: 'Georgian forest',
    description: 'Fresh water running from a rock beside a small stone cross.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-cliff-forest',
    image: photo('gallery-cliff-forest', 'Cliff in the forest'),
    title: 'A Grey Cliff Among Mossy Trees',
    location: 'Georgian forest',
    description: 'A huge rock wall rising out of the green forest.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-stone-steps',
    image: photo('gallery-stone-steps', 'Stone steps'),
    title: 'Old Stone Steps in the Woods',
    location: 'Georgian forest',
    description: 'Worn stone steps leading down into the green shade.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-old-chapel',
    image: photo('gallery-old-chapel', 'Old chapel in the trees'),
    title: 'A Quiet Old Chapel in the Trees',
    location: 'Georgia',
    description: 'Weathered walls and arches hiding between big trees.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-tower-trees',
    image: photo('gallery-tower-trees', 'Tower in the trees'),
    title: 'A Tower Between the Trees',
    location: 'Georgia',
    description: 'An old tower peeking out from the leaves.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-ferris-wheel',
    image: photo('gallery-ferris-wheel', 'Ferris wheel'),
    title: 'A Colorful Old Ferris Wheel',
    location: 'Georgia',
    description: 'A bright, slightly rusty Ferris wheel in a leafy park.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-piano',
    image: photo('gallery-piano', 'Old piano outdoors'),
    title: 'An Old Piano in the Autumn Leaves',
    location: 'Georgia',
    description: 'Playing a worn-out piano standing outside among fallen leaves.',
    cameraInfo: 'Photo from Anaka’s trips'
  },
  {
    id: 'g-candid',
    image: photo('anaka-candid', 'Anaka'),
    title: 'A Quiet Moment',
    location: 'Georgia',
    description: 'A relaxed break between stops.',
    cameraInfo: 'Photo from Anaka’s trips'
  }
];

// Only photos that really exist are shown (no empty placeholders in the gallery)
export const GALLERY_PHOTOS: GalleryPhoto[] = ALL_GALLERY_PHOTOS.filter((p) => !isPlaceholder(p.image));

// NINO PAICHADZE BIO DETAILS
export const NINO_BIO = {
  name: 'Nino Paichadze',
  role: 'Partner, Lead 4x4 Off-Road Driver, Trail Guide & Artisan Winemaker',
  vehicle: '2021 Ford Ranger 4x4 with full off-road package advantages',
  wineBrand: 'Fermio Artisan Bio Wine',
  fermioUrl: 'https://fermio.ge/farmer/b062c48b-a630-457f-8d14-6a922e94e625?product=d1cab007-8e32-41a0-8860-9d54ba6d339f',
  specialTherapy: 'Destiny Matrix & Tarot Reading in the Woods (Sale Offer: $150 USD · Regular $230 USD)',
  cottageFeatures: 'Private wooden cottage amidst Kakheti vineyards, authentic homemade Georgian cuisine included',
  guidingStyle: 'On-foot mountain companion & trail navigator (experienced adventurer who walks the trails with you)',
  mainPhoto: NINO_VINEYARD_HARVEST,
  gallery: [
    { url: photo('nino-vineyard', 'Nino in her vineyard'), title: 'Nino in her vineyard', caption: 'Nino with freshly picked white grapes in her organic vineyard in Kakheti.' },
    { url: photo('nino-picking', 'Picking grapes'), title: 'Hand-picking the harvest', caption: 'Grapes are picked by hand, bunch by bunch.' },
    { url: photo('nino-qvevri', 'Qvevri winemaking'), title: 'Stirring the qvevri', caption: 'Traditional winemaking: pressing down the fermenting grapes in a clay qvevri.' },
    { url: photo('nino-landscape', 'Vineyard and hills'), title: 'The vineyard and the Kakheti hills', caption: 'Rows of vines with the misty hills behind them.' },
    { url: photo('nino-cottage-living', 'Cottage living room'), title: 'The cottage living room', caption: 'Warm wood, paisley curtains and a floral sofa for your overnight stay.' },
    { url: photo('nino-cottage-lamp', 'Cottage lamp'), title: 'Evenings by the oil lamp', caption: 'Soft lamplight in the wooden cottage.' },
    { url: photo('nino-cottage-bath', 'Cottage bath'), title: 'Clawfoot tub by candlelight', caption: 'A vintage bathtub on a checkered floor, lit by candles.' },
    { url: photo('nino-cottage-decor', 'Cottage details'), title: 'Antique details', caption: 'Velvet chair, golden stand and handmade touches.' },
    { url: photo('nino-cottage-stove', 'Cottage stove'), title: 'Tiled stove and old radio', caption: 'A tiled stove, enamel kettle and a retro radio.' },
    { url: photo('nino-smile', 'Nino'), title: 'Nino', caption: 'Nino in the vineyard.' },
    { url: NINO_4X4_HIKING_IMAGE, title: 'Ford Ranger 2021 off-road', caption: 'High-clearance 4x4 for hiking expeditions in Svaneti, Bakhmaro and Khevsureti.' }
  ].filter((g) => !isPlaceholder(g.url))
};

// SIGNATURE KAKHETI WINE EXPERIENCES (Authentic Photos Only - No AI)
// On Nino's trip, avoid text about risks (per user requirement)
export const SIGNATURE_WINE_TOURS: Tour[] = [
  {
    id: 'nino-paitchadze-biowine-cottage',
    title: 'Nino Paichadze — Bio Wine, Wooden Cottage & Georgian Cuisine',
    subtitle: 'Exclusive vineyard stay, organic bio-wine, homemade culinary dishes & hands-on venakhi workshop',
    durationNote: 'Overnight experience · 1 night stay in vineyard cottage',
    startingPriceUSD: 875,
    startingPriceGEL: Math.round(875 * USD_TO_GEL),
    startingPriceEUR: Math.round(875 * USD_TO_EUR),
    image: NINO_VINEYARD_HARVEST,
    imageAlt: 'Nino Paichadze holding ripe bio grapes in her Kakheti vineyard',
    isSpecialSignature: true,
    partnerHost: 'Nino Paichadze',
    externalLink: NINO_BIO.fermioUrl,
    cottageGallery: [
      NINO_VINEYARD_HARVEST,
      NINO_COTTAGE_LIVINGROOM,
      NINO_COTTAGE_BATH,
      NINO_QVEVRI_WINEMAKING,
      photo('nino-cottage-lamp', 'Cottage lamp')
    ],
    includedDetails: [
      '1 bottle of Nino’s artisan organic bio wine included',
      'Overnight stay in Nino’s charming private wooden cottage amidst the vines',
      'Authentic homemade Georgian cuisine included (regional breakfast & dinner)',
      'Hands-on venakhi (vineyard) activity showing how she tends and cares for the grapes',
      'Round-trip private driver transfer from Tbilisi'
    ],
    specialAddons: [
      {
        name: 'Destiny Matrix & Tarot Reading in the Woods with Nino',
        priceUSD: 150,
        description: 'Special sale offer: $150 USD (regularly $230 USD). In-depth personal destiny matrix and intuitive tarot reading in the tranquil Kakhetian woods, providing deep soul clarity and spiritual realignment.'
      }
    ],
    highlights: [
      'Private eco wooden cottage right inside the peaceful vineyards of Kakheti',
      'Authentic Georgian cuisine with local organic ingredients and farm produce',
      'Artisanal natural bio wine produced with love and no artificial chemicals',
      'Venakhi immersion: walk the vines and see firsthand how Nino cares for them',
      'Breathtaking Caucasus mountain views at sunrise and sunset',
      'Optional Destiny Matrix & Tarot Reading in the Woods ($150 USD on sale from $230 USD)'
    ],
    description: 'An exclusive retreat with local winemaker and adventurer Nino Paichadze. Stay in a cozy wooden cottage in the vineyards, savor authentic homemade Georgian cuisine, taste rare bio wine, and learn traditional grape cultivation directly from Nino.',
    vehicleSuitability: 'Comfort Sedan or 4x4 Crossover'
    // Note: No risk field on Nino's trip (per user request)
  },
  {
    id: 'irma-shvelidze-garden-supra',
    title: 'Irma Shvelidze — Kakhetian Family Garden, Khinkali Workshop & Supra',
    subtitle: 'Handmade garden stone art, masterclass rolling Khinkali & traditional family feast',
    durationNote: 'Flexible day trip (4 to 10 hours)',
    startingPriceUSD: 350,
    startingPriceGEL: Math.round(350 * USD_TO_GEL),
    startingPriceEUR: Math.round(350 * USD_TO_EUR),
    image: IRMA_STONE_ART_GARDEN,
    imageAlt: 'Handmade stone art garden with miniature stone castles, lanterns, and qvevri at night',
    isSpecialSignature: true,
    partnerHost: 'Irma Shvelidze',
    cottageGallery: [
      IRMA_STONE_ART_GARDEN,
      IRMA_FAMILY_SUPRA,
      IRMA_SUPRA_CLASSIC
    ],
    includedDetails: [
      'Hands-on masterclass: learn how to fold and cook traditional Khinkali',
      'Generous authentic Georgian Supra in a lush art-filled garden',
      'Homemade family wines, seasonal delicacies & Kakhetian hospitality',
      'Private driver transfer throughout the day'
    ],
    highlights: [
      'Warm Kakhetian family home with unique handmade stone art & miniature castles in the garden',
      'Khinkali masterclass with Irma: craft the dough and folds yourself',
      'Authentic homemade Supra table with seasonal garden vegetables, cheeses & wine',
      'Unrushed, heartwarming human connection with local hosts',
      'Scenic drive through Kakheti with optional stop at Sighnaghi'
    ],
    description: 'Experience true Georgian warmth at the home of Irma Shvelidze. Wander her beautiful garden adorned with handmade stone art, roll your own Khinkali dumplings in an intimate workshop, and sit down to an authentic Georgian Supra feast you will never forget.',
    vehicleSuitability: 'Comfort Sedan or Minivan',
    risks: {
      destinationName: 'Irma Shvelidze Stone Art Garden & Home (Kakheti Village)',
      terrainType: 'Village paved road, natural cobblestone pathways, stepped garden tiers',
      roadDifficulty: 'Easy Paved Highway',
      weatherAlert: 'Pleasant valley climate; sudden rain can make outdoor stone garden paths and miniature castle steps slick.',
      gettingStuckRisk: 'Very low risk of vehicle immobilization. If travelling via Gombori pass during sudden winter blizzards, we automatically reroute via the southern highway detour.',
      seasonalityWarning: 'Stone art and garden vegetation peak May through October. Autumn is colorful and peaceful.',
      essentialGear: [
        'Flat, comfortable shoes with good grip (avoid high heels on natural stone paths)',
        'Healthy appetite for an abundant homemade feast',
        'Camera or phone for photographing Irma’s miniature stone creations'
      ],
      anakaSafetyAdvice: 'Please alert us to any food allergies or dietary restrictions (vegetarian/vegan options gladly accommodated) so Irma can customize the supra.'
    }
  },
  {
    id: 'kakheti-classic-wine-sighnaghi',
    title: 'Kakheti Wine Day Tour & Ancient Sighnaghi',
    subtitle: '8,000 years of winemaking heritage, Qvevri cellars & hilltop vistas',
    durationNote: 'Flexible day trip (varies 6 to 12 hours)',
    startingPriceUSD: 300,
    startingPriceGEL: Math.round(300 * USD_TO_GEL),
    startingPriceEUR: Math.round(300 * USD_TO_EUR),
    image: photo('tour-kakheti', 'Kakheti wine day tour'),
    imageAlt: 'Vineyards and green hills in Kakheti',
    isSpecialSignature: false,
    highlights: [
      'Bodbe St. Nino Convent in cypress gardens',
      'Sighnaghi fortified city walls & cobblestone lanes',
      'Alazani Valley panoramic views',
      'Choice: Artisanal village Qvevri cellar OR fancy factory estate (Château Mukhrani / Tsinandali)',
      'Fresh Shoti bread baking and churchkhela making stops'
    ],
    description: 'The essential Kakheti day road trip. Trace the cradle of world wine, sample natural amber wines from subterranean Qvevri or tour upscale palace estates, and stroll the scenic cobblestone ramparts of Sighnaghi.',
    vehicleSuitability: 'Comfort Sedan, SUV, or Minivan',
    risks: {
      destinationName: 'Sighnaghi Fortress & Alazani Valley (Kakheti)',
      terrainType: 'Gombori Mountain Pass (1,620m) & steep medieval cobblestone hilltown',
      roadDifficulty: 'Winding Mountain Roads',
      weatherAlert: 'Gombori Pass frequently develops dense "milk fog" and sudden icy patches in late autumn, winter, and early spring.',
      gettingStuckRisk: 'If Gombori Pass is closed by the road patrol due to thick ice or unpredicted snowstorms, we take the southern Sagarejo highway detour (+45 min travel time) to ensure zero risk of getting stuck.',
      seasonalityWarning: 'Summer heat in the Alazani valley can exceed 37°C. Historic cobblestones in Sighnaghi are steep and can be slippery when wet.',
      essentialGear: [
        'Walking shoes with rubber traction for steep cobblestones',
        'Sun hat, sunglasses, and personal water bottle',
        'Light jacket or windbreaker for hilltop viewpoint breezes'
      ],
      anakaSafetyAdvice: 'We monitor live road conditions before departure. If Gombori Pass conditions look questionable, we choose the safest route proactively.'
    }
  }
];

// 4X4 HIKING & OFF-ROAD EXPEDITION ROUTES (Driver destined by route & group size)
// On Nino's trips, avoid text about risks (per user requirement)
// Hide gallery slots whose photo has not been added yet
SIGNATURE_WINE_TOURS.forEach((t) => {
  if (t.cottageGallery) t.cottageGallery = t.cottageGallery.filter((src) => !isPlaceholder(src));
});

export const HIKING_ROUTES: HikingRoute[] = [
  {
    id: 'abudelauri-lakes',
    name: 'Abudelauri Colored Alpine Lakes (Green, Blue, White)',
    region: 'Khevsureti',
    highlights: 'Glacial alpine lakes nestled beneath the massive Chaukhi peaks. High Caucasus wilderness.',
    difficulty: 'Moderate'
  },
  {
    id: 'javakheti-abulis-mta',
    name: 'Javakheti Plateau & Abulis Mta (Mount Didi Abuli 3,301m)',
    region: 'Javakheti Volcanic Plateau',
    highlights: 'Volcanic plateau, high crater lakes, and the ancient megalithic cyclopean fortress atop Mount Abuli.',
    difficulty: 'Alpine Expedition'
  },
  {
    id: 'truso-gorge',
    name: 'Truso Gorge & Travertine Mineral Springs',
    region: 'Kazbegi High Caucasus',
    highlights: 'Vibrant mineral pools, bubbling travertine rocks, abandoned stone medieval towers, and riverside canyon trails.',
    difficulty: 'Moderate'
  },
  {
    id: 'rocho-gurgeniani-waterfalls',
    name: 'Rocho & Gurgeniani Waterfalls',
    region: 'Lagodekhi Protected Areas / Kakheti',
    highlights: 'Untouched primeval subtropical forest, roaring crystal cascades, and mossy river canyon scrambles.',
    difficulty: 'Moderate'
  },
  {
    id: 'bakhmaro-sea-of-clouds',
    name: 'Bakhmaro Alpine Mist Resort (2,050m)',
    region: 'Guria / Adjara Mountains',
    highlights: 'High-altitude wooden summer cottages perched at 2,050m, famous sunset views above a literal sea of clouds.',
    difficulty: 'Moderate'
  },
  {
    id: 'svaneti-ushguli-heshkili',
    name: 'Svaneti, Ushguli & Heshkili Swings',
    region: 'Upper Svaneti',
    highlights: 'Europe’s highest inhabited village with medieval stone defensive towers beneath Mount Shkhara (5,193m).',
    difficulty: 'Alpine Expedition'
  },
  {
    id: 'khvamli-mountain',
    name: 'Mystical Khvamli Mountain (Prometheus Peak)',
    region: 'Lechkhumi',
    highlights: 'Sacred limestone ridge of Prometheus legends, ancient cave inscriptions, and dramatic panoramic precipices.',
    difficulty: 'Challenging'
  },
  {
    id: 'tskrajvari-nine-crosses',
    name: 'Tskhrajvari (Nine Crosses Overlook)',
    region: 'Imereti / Racha border (Nakerala Pass 1,218m)',
    highlights: 'Dramatic cliff-edge shrine with 9 iron crosses overlooking the entire western Georgian valley and Tkibuli lake.',
    difficulty: 'Moderate'
  },
  {
    id: 'martvili-okatse-canyons',
    name: 'Martvili & Okatse Gorges & Waterfalls',
    region: 'Samegrelo',
    highlights: 'Turquoise river canyon boat rides and suspended cliff-side skywalk bridges.',
    difficulty: 'Moderate'
  },
  {
    id: 'armenia-cross-border',
    name: 'Armenia Cross-Border Expansion (Lori Monasteries)',
    region: 'Armenia (Cross-Border)',
    highlights: 'Haghpat & Sanahin medieval monasteries and Lori canyon (cross-border transit has an additional fee).',
    difficulty: 'Moderate'
  }
];

// STANDARD DAY TOURS (Authentic Canon Photos & Visual Badges - Zero AI Stock Photos)
// Updated prices: Gori upgraded to $250 USD, Combo Mtskheta & Gori upgraded to $400 USD
export const STANDARD_TOURS: Tour[] = [
  {
    id: 'kazbegi-military-highway',
    title: 'Kazbegi & The Georgian Military Highway',
    subtitle: 'Dramatic Caucasus peaks, medieval towers & iconic high mountain church',
    durationNote: 'Flexible day trip (varies 8 to 14 hours)',
    startingPriceUSD: 300,
    startingPriceGEL: Math.round(300 * USD_TO_GEL),
    startingPriceEUR: Math.round(300 * USD_TO_EUR),
    image: photo('tour-kazbegi', 'Kazbegi'),
    imageAlt: 'Real road view over Cross Pass towards Kazbegi',
    highlights: [
      'Jinvali Water Reservoir overlook',
      '17th-century Ananuri Fortress & Aragvi River',
      'Pasanauri (Black & White Aragvi confluence)',
      'Cross Pass & Gudauri Friendship Monument panorama',
      'Gergeti Trinity Church at 2,170m overlooking Mount Kazbek',
      'Optional Dariali Gorge & Gveleti Waterfalls hike'
    ],
    description: 'One of the most famous mountain drives in the world. Ascend through lush river valleys, cross high alpine passes, and reach Gergeti Trinity Church perched beneath snowcapped Mount Kazbek. Group size with Anaka: strictly 1–3 adults in her comfortable 2016 Corolla. (Starting price reflects current fuel conditions; when fuel drops, rates adjust down).',
    vehicleSuitability: 'Comfort Sedan (1-3 pax) or Minivan / Sprinter (Groups)',
    risks: {
      destinationName: 'Kazbegi, Gudauri & Cross Pass (Georgian Military Highway)',
      terrainType: 'High Caucasus alpine pass (Jvari / Cross Pass 2,379m), steep cliffside highway, Gergeti mountain road (2,170m)',
      roadDifficulty: 'Steep High Alpine Pass',
      weatherAlert: 'EXTREME UNPREDICTABLE MOUNTAIN WEATHER. You can leave Tbilisi in warm sunshine (+20°C) and reach a sub-zero blizzard (-8°C) at Cross Pass 2.5 hours later. Heavy snow, thick cloud cover, and rapid freezing are common from October through May.',
      gettingStuckRisk: 'HIGH RISK IN WINTER/SPRING: Cross Pass can be closed without warning by Georgian Road Police due to heavy snowfall, blizzard zero-visibility, or avalanche hazards. Vehicles can get temporarily stuck in Gudauri or Stepantsminda waiting for snow plows (sometimes for hours or overnight). International cargo trailers also cause sudden gridlocks on single-lane sections.',
      seasonalityWarning: 'Winter and early spring strictly require winter tires, 4WD, and carrying snow chains. NEVER book an international flight departure on the same evening as a winter Kazbegi trip without a 1-day safety buffer.',
      essentialGear: [
        'Heavy winter coat, windbreaker & thermal base layers (essential even in spring/autumn)',
        'Waterproof trekking boots with deep rubber tread (icy ground around church)',
        'Sunglasses (intense alpine snow glare at 2,400m)',
        'Portable power bank (cold drains phone batteries rapidly)',
        'Personal medications & emergency snacks/water kept in vehicle'
      ],
      anakaSafetyAdvice: 'We check the official Georgian Road Department (Gza) and patrol police camera feeds before starting. If the pass is deemed dangerous, we reschedule or offer an alternative lower-elevation route.'
    }
  },
  {
    id: 'mtskheta-gori-combo',
    title: 'Mtskheta & Gori Historic Combination (Save $50)',
    subtitle: 'Ancient UNESCO spiritual capital + Gori fortress & Uplistsikhe rock-hewn caves',
    durationNote: 'Flexible day trip (varies 6 to 10 hours)',
    startingPriceUSD: 400,
    startingPriceGEL: Math.round(400 * USD_TO_GEL),
    startingPriceEUR: Math.round(400 * USD_TO_EUR),
    image: photo('tour-mtskheta-gori', 'Mtskheta and Gori'),
    imageAlt: 'Uplistsikhe cave city under a stormy sky',
    highlights: [
      '6th-century Jvari Monastery perched above Aragvi/Mtkvari confluence',
      'Svetitskhoveli Cathedral in the ancient capital Mtskheta',
      'Gori medieval fortress and optional Stalin Museum overview',
      'Uplistsikhe ancient pagan rock-hewn cave city (1st millennium BC)',
      'Combo savings: $400 instead of $450 when booked separately'
    ],
    description: 'Experience Georgia’s ancient spiritual center and Silk Road history in a single day. Visit Mtskheta’s UNESCO monuments and journey to Gori and the dramatic rock-cut city of Uplistsikhe with a $50 combo discount ($400 USD package).',
    vehicleSuitability: 'Comfort Sedan (1-3 pax) or Minivan / Sprinter (Groups)',
    risks: {
      destinationName: 'Mtskheta Ancient Capital & Uplistsikhe Cave City',
      terrainType: 'Paved central highways, historic cobblestones, ancient slick rock-cut sandstone caves and cliff drops',
      roadDifficulty: 'Easy Paved Highway',
      weatherAlert: 'Uplistsikhe cave plateau is exposed to strong valley winds and full direct sun with very little shade. Summer temperatures can exceed 36°C.',
      gettingStuckRisk: 'Very low risk of vehicle immobilization. Central highways are well-paved, plowed, and illuminated.',
      seasonalityWarning: 'Uplistsikhe sandstone rocks become slippery when wet from rain or winter morning frost. Wear shoes with firm grip.',
      essentialGear: [
        'Non-slip rubber-soled sneakers or walking shoes',
        'Sunscreen and brimmed sun hat for the exposed cave city',
        'Refillable water bottle',
        'Light windbreaker for the windy hill at Jvari Monastery'
      ],
      anakaSafetyAdvice: 'Take your time on ancient hand-carved stone staircases without handrails at Uplistsikhe, especially when walking with children or elderly companions.'
    }
  },
  {
    id: 'mtskheta-alone',
    title: 'Mtskheta Spiritual Highlights (Half Day)',
    subtitle: 'Jvari Monastery, Svetitskhoveli Cathedral & ancient cobblestone alleys',
    durationNote: 'Flexible day trip (varies 4 to 6 hours)',
    startingPriceUSD: 200,
    startingPriceGEL: Math.round(200 * USD_TO_GEL),
    startingPriceEUR: Math.round(200 * USD_TO_EUR),
    image: photo('tour-mtskheta', 'Mtskheta'),
    imageAlt: 'Panoramic overlook of historic Georgia',
    highlights: [
      'Jvari Monastery with iconic river confluence panorama',
      'Svetitskhoveli Cathedral UNESCO World Heritage site',
      'Mtskheta pedestrian craft market & churchkhela stalls',
      'Relaxed, unrushed pace close to Tbilisi'
    ],
    description: 'A focused, serene exploration of Georgia’s holy ancient capital just 25 minutes from Tbilisi. Perfect for travelers with limited time or relaxed morning schedules.',
    vehicleSuitability: 'Comfort Sedan (1-3 pax) or Minivan',
    risks: {
      destinationName: 'Mtskheta Spiritual Capital (Half Day)',
      terrainType: 'Smooth paved highway, pedestrian stone paths, church courtyards',
      roadDifficulty: 'Easy Paved Highway',
      weatherAlert: 'Gentle valley climate. Occasional hilltop wind at Jvari.',
      gettingStuckRisk: 'Minimal / zero risk of vehicle getting stuck. Close proximity to Tbilisi (25 minutes).',
      seasonalityWarning: 'Comfortable visitable in all four seasons.',
      essentialGear: [
        'Modest attire for church interiors (scarves for women and pants for men are provided at entrances if needed)',
        'Comfortable walking shoes'
      ],
      anakaSafetyAdvice: 'A relaxed, stress-free route ideal for arrival or departure days.'
    }
  },
  {
    id: 'gori-alone',
    title: 'Gori & Uplistsikhe Cave City',
    subtitle: 'Dramatic rock-cut ancient caves & historic Shida Kartli valley',
    durationNote: 'Flexible day trip (varies 5 to 8 hours)',
    startingPriceUSD: 250,
    startingPriceGEL: Math.round(250 * USD_TO_GEL),
    startingPriceEUR: Math.round(250 * USD_TO_EUR),
    image: photo('tour-gori', 'Gori and Uplistsikhe'),
    imageAlt: 'Uplistsikhe cave city under a stormy sky',
    highlights: [
      'Uplistsikhe rock-cut fortress city overlooking Mtkvari river',
      'Ancient pagan temples, wine presses & secret river tunnels',
      'Gori city center and hilltop fortress ruins',
      'Optional Stalin Museum & historic rail carriage'
    ],
    description: 'Travel into central Georgia to walk through Uplistsikhe, an ancient cave city carved into cliffs dating back over 3,000 years. Upgraded starting price: $250 USD.',
    vehicleSuitability: 'Comfort Sedan (1-3 pax) or Minivan',
    risks: {
      destinationName: 'Gori & Uplistsikhe Cave City',
      terrainType: 'Highway drive, rocky carved sandstone bluffs, river tunnel stairway',
      roadDifficulty: 'Easy Paved Highway',
      weatherAlert: 'Open bluff can be very breezy or hot in mid-summer with direct sun reflection from bare stone.',
      gettingStuckRisk: 'Very low risk of getting stuck. Fast highway transit from Tbilisi.',
      seasonalityWarning: 'Sandstone steps get slippery when wet; caution required after morning rain.',
      essentialGear: [
        'Grippy sneakers',
        'Sun protection & water',
        'Camera for ancient cave vistas'
      ],
      anakaSafetyAdvice: 'Hold onto handrails where available in the ancient river escape tunnel at Uplistsikhe.'
    }
  },
  {
    id: 'borjomi-vardzia',
    title: 'Borjomi Mineral Valley & Cave City Vardzia',
    subtitle: 'Thermal river gorges, Rabati Castle & 12th-century cliff monastery',
    durationNote: 'Flexible day trip (varies 11 to 14 hours)',
    startingPriceUSD: 400,
    startingPriceGEL: Math.round(400 * USD_TO_GEL),
    startingPriceEUR: Math.round(400 * USD_TO_EUR),
    image: photo('tour-borjomi-vardzia', 'Borjomi and Vardzia'),
    imageAlt: 'High Caucasus mountain vistas',
    highlights: [
      'Borjomi Central Park & warm natural mineral spring tasting',
      'Restored multicultural Rabati Castle complex in Akhaltsikhe',
      'Vardzia 12th-century cave city of Queen Tamar',
      'Mtkvari river canyon scenery & Khertvisi fortress overlook'
    ],
    description: 'A grand expedition into southern Georgia. Walk through hundreds of subterranean chambers carved into vertical canyon walls at Vardzia and taste pure natural mineral water at its source in Borjomi.',
    vehicleSuitability: 'Comfort Crossover, SUV, or Minivan',
    risks: {
      destinationName: 'Borjomi, Rabati & Cave City Vardzia (Southern Georgia)',
      terrainType: 'Deep mountain river canyons, multi-tier cliff monastery with steep rock stairs, narrow underground tunnels',
      roadDifficulty: 'Winding Mountain Roads',
      weatherAlert: 'Extensive full-day drive (~360 km roundtrip). Sharp temperature variation between the cool pine forest in Borjomi and the arid, wind-swept Vardzia gorge.',
      gettingStuckRisk: 'MODERATE IN WINTER: Southern passes (like Tsalka or Borjomi-Akhaltsikhe) can encounter black ice or snow accumulation. In early spring, thawing can cause isolated rockfall on canyon road edges. We always take the primary cleared highway route.',
      seasonalityWarning: 'Vardzia requires climbing up multiple flights of steep stone steps and hunching through low medieval tunnels. Not recommended for travelers with severe vertigo or acute knee limitations.',
      essentialGear: [
        'Sturdy walking/hiking shoes with strong ankle support',
        'Motion sickness medication if sensitive to long winding canyon roads',
        'Layers of clothing (cave chambers remain cool ~12°C year-round)',
        'Phone battery/flashlight for darker subterranean monastery passages'
      ],
      anakaSafetyAdvice: 'An early departure (08:30) is strictly advised so we can complete canyon navigation in daylight and return smoothly.'
    }
  }
];

export const ALL_TOURS = [...SIGNATURE_WINE_TOURS, ...STANDARD_TOURS];

export function buildWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildTourInquiryLink(tourTitle: string, priceDisplay: string): string {
  const msg = `Hello Anaka! I am interested in private tour: "${tourTitle}" (starting from ${priceDisplay}). Could you please share availability, vehicle options, and a confirmed quote?`;
  return buildWhatsAppLink(msg);
}

export function buildHikingInquiryLink(routeName: string): string {
  const msg = `Hello Anaka! I am interested in a 4x4 Mountain & Hiking Expedition to: "${routeName}". Could you please share dates, pricing ($400-$1,200 range), and trail options?`;
  return buildWhatsAppLink(msg);
}

export function buildRiskInquiryLink(destinationName: string): string {
  const msg = `Hello Anaka! I was reviewing the route risks & weather conditions for "${destinationName}". Could you let me know the current forecast, snow/road status, and recommended gear for my travel dates?`;
  return buildWhatsAppLink(msg);
}
