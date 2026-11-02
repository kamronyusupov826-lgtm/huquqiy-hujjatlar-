import { FieldDefinition } from '../types';

export const COMMON_PERSONAL_FIELDS: FieldDefinition[] = [
  {
    key: 'lastName',
    label: 'Familiya',
    placeholder: 'Valiyev',
    type: 'text',
    isCommonField: true,
  },
  {
    key: 'firstName',
    label: 'Ism',
    placeholder: 'Ali',
    type: 'text',
    isCommonField: true,
  },
  {
    key: 'middleName',
    label: 'Otasining ismi (sharifi)',
    placeholder: 'Hasanovich',
    type: 'text',
    isCommonField: true,
  },
  {
    key: 'phone',
    label: 'Telefon raqami',
    placeholder: '+998901234567',
    type: 'text',
    isCommonField: true,
  },
  {
    key: 'address',
    label: 'Yashash manzili',
    placeholder: 'Toshkent shahri, Chilonzor tumani, 9-mavze, 12-uy, 45-xonadon',
    type: 'text',
    isCommonField: true,
  },
  {
    key: 'passport',
    label: 'Pasport / ID-karta ma\'lumotlari',
    placeholder: 'AA 1234567, 12.03.2020 yilda berilgan',
    type: 'text',
    isCommonField: true,
  },
];
