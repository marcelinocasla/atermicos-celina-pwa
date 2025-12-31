export type PoolType = 'concrete' | 'fiber';

export type SolariumConfig = {
  top: number; // Number of rows
  bottom: number;
  left: number;
  right: number;
};

export type PoolDimensions = {
  length: number;
  width: number;
};

export type PriceList = {
  baldosa: number; // 50x50
  bordeL: number; // 50x50
  esquinero: number; // Unit
  arranqueArco: number; // Unit
  cunaArco: number; // Unit
  deck: number; // 12x100
  deckL: number; // 12x100
  pastina: number; // per Kg
  pallet: number; // Service cost per pallet (or global service?) User said "Servicio de Palletizado: [Precio editable]", likely per pallet or global. let's assume global or per unit logic later.
};

export type CompanyInfo = {
  logoUrl: string;
  address: string;
  phone: string;
  name: string; // "ATÉRMICOS CELINA" default
};

export type QuoteItem = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  unit: string; // 'un', 'm2', 'kg'
};

export type QuoteResult = {
  items: QuoteItem[];
  subtotalMaterial: number;
  palletCount: number;
  palletCost: number;
  shippingCost: number;
  total: number;
};

export type ArcSide = 'top' | 'bottom' | 'left' | 'right';

export type HistoryEntry = {
  id: string;
  clientName: string;
  date: string;
  items: QuoteItem[];
  total: number;
  status: 'pending' | 'approved' | 'rejected';
};
