export type AssetCategory = 'property' | 'business' | 'vehicle' | 'products' | 'contracts' | 'money';
export type YesNoChoice = 'yes' | 'no';

export interface Asset {
  id: number;
  owner: number;
  name: string;
  type: AssetCategory;
  value: string | number;
  receipt: YesNoChoice;
  insured: YesNoChoice;
  image?: string | null;
  created_at: string;
  updated_at: string;
}

export interface AssetFormData {
  name: string;
  type: AssetCategory;
  value: string | number;
  receipt: YesNoChoice;
  insured: YesNoChoice;
  image?: File | null;
}

export const ASSET_CATEGORIES = [
  { value: 'property', label: 'Property' },
  { value: 'business', label: 'Business' },
  { value: 'vehicle', label: 'Vehicle' },
  { value: 'products', label: 'Products' },
  { value: 'contracts', label: 'Contracts' },
  { value: 'money', label: 'Money' },
] as const;

export const YES_NO_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
] as const;
