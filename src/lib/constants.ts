import { PriceList, CompanyInfo } from '@/types';

export const DEFAULT_PRICES: PriceList = {
    baldosa: 5500,
    bordeL: 6000,
    esquinero: 6500,
    arranqueArco: 6500,
    cunaArco: 6500,
    deck: 5500,
    deckL: 6000,
    pastina: 3000,
    pallet: 0, // Default to 0 or editable
};

export const DEFAULT_COMPANY_INFO: CompanyInfo = {
    name: 'ATÉRMICOS CELINA',
    address: '',
    phone: '',
    logoUrl: '',
};

// Dimensions for calculations (in meters)
export const TILE_SIZE = 0.50; // 50cm
export const DECK_WIDTH = 0.12;
export const DECK_LENGTH = 1.00;

export const PALLET_CAPACITY = 100; // Example: 100 tiles per pallet (Needs confirmation but used for calc)

// Roman Arc Config
export const ARC_TOTAL_DIAMETER = 2.0;
export const ARC_WATER_RADIUS = 0.5;
export const ARC_TOTAL_RADIUS = 1.0;
export const ARC_TILES_COUNT = ARC_TOTAL_DIAMETER / TILE_SIZE; // Should be 4
