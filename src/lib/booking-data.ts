// Booking form types and room data

export interface RoomType {
  id: string;
  title: string;
  slug: string;
  price: string;
  pricePerNight: number | null; // null for "auf Anfrage"
  priceNote: string;
  guests: string;
  size: string;
  image: string;
  description: string;
  extras: string[];
  popular?: boolean;
}

export interface BookingFormData {
  // Step 1 - Aufenthalt
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  // Step 2 - Zimmerwahl
  selectedRooms: string[]; // room IDs
  // Step 3 - Persönliche Daten
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  zipCity: string;
  country: string;
  // Step 4 - Sonderwünsche
  specialRequests: string;
  breakfast: boolean;
  parking: boolean;
  // Step 5
  privacyConsent: boolean;
}

export const rooms: RoomType[] = [
  {
    id: 'einzelzimmer',
    title: 'Einzelzimmer',
    slug: 'einzelzimmer',
    price: 'ab 68 €',
    pricePerNight: 68,
    priceNote: 'pro Nacht',
    guests: '1 Person',
    size: 'ca. 20 m²',
    image: '/images/einzelzimmer-neu.jpg',
    description: 'Gemütliches Einzelzimmer mit modernem Bad und komfortabler Ausstattung.',
    extras: ['Klimaanlage', 'Teilw. Balkon', 'Ebenerdige Dusche'],
  },
  {
    id: 'doppelzimmer',
    title: 'Doppelzimmer',
    slug: 'doppelzimmer',
    price: 'ab 90 €',
    pricePerNight: 90,
    priceNote: 'pro Nacht',
    guests: '2 Personen',
    size: 'ca. 20 m²',
    image: '/images/doppelzimmer.jpg',
    description: 'Geräumiges Doppelzimmer – ideal für Paare oder Geschäftsreisende.',
    extras: ['Klimaanlage', 'Teilw. Balkon', 'Ebenerdige Dusche'],
    popular: true,
  },
  {
    id: 'familienzimmer',
    title: 'Familienzimmer',
    slug: 'familienzimmer',
    price: 'auf Anfrage',
    pricePerNight: null,
    priceNote: 'auf Anfrage',
    guests: 'Familien',
    size: 'ca. 20 m²',
    image: '/images/familienzimmer-neu.jpg',
    description: 'Flexibles Familienzimmer mit Doppelbett und Zustellmöglichkeiten.',
    extras: ['Klimaanlage', 'Individuell', 'Ebenerdige Dusche'],
  },
];

export const initialBookingData: BookingFormData = {
  checkIn: '',
  checkOut: '',
  adults: 1,
  children: 0,
  selectedRooms: [],
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  zipCity: '',
  country: 'Deutschland',
  specialRequests: '',
  breakfast: false,
  parking: false,
  privacyConsent: false,
};

export const bookingSteps = [
  'Aufenthalt',
  'Zimmerwahl',
  'Persönliche Daten',
  'Sonderwünsche',
  'Zusammenfassung',
];
