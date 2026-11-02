export type CategoryId =
  | 'oilaviy-huquq'
  | 'ajrim-va-aliment'
  | 'jinoyat-ishlari'
  | 'fuqarolik-ishlari'
  | 'sud-hujjatlari'
  | 'prokuratura-murojaatlari'
  | 'ichki-ishlar'
  | 'mehnat-huquqi'
  | 'uy-joy-huquqi'
  | 'meros'
  | 'talim'
  | 'shikoyatlar'
  | 'iltimosnomalar'
  | 'shartnomalar'
  | 'ishonchnomalar';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  iconName: string;
  description: string;
  badgeColor: string;
}

export interface FieldDefinition {
  key: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'date' | 'number' | 'textarea' | 'select';
  defaultValue?: string;
  description?: string;
  options?: string[];
  isCommonField?: boolean; // Ism, Familiya, Telefon, Yashash manzili
}

export interface LegalBasis {
  article: string;
  lawName: string;
  lexUrl?: string;
  isVerified: boolean;
}

export interface LegalDocument {
  id: string;
  title: string;
  category: CategoryId;
  categoryName: string;
  description: string;
  keywords: string[];
  templateText: string;
  requiredFields: FieldDefinition[];
  legalBasis: LegalBasis;
  popular?: boolean;
}

export interface SavedDocument {
  id: string;
  templateId: string;
  title: string;
  category: CategoryId;
  categoryName: string;
  content: string;
  formData: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
  address: string;
  passportSeries?: string;
  pinfl?: string;
}
