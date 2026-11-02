import { LegalDocument } from '../types';
import { FAMILY_AND_DIVORCE_DOCS } from './docs/familyAndDivorce';
import { CRIMINAL_AND_CIVIL_DOCS } from './docs/criminalAndCivil';
import { COURTS_AND_PROCURACY_DOCS } from './docs/courtsAndProcuracy';
import { INTERIOR_AND_LABOR_DOCS } from './docs/interiorAndLabor';
import { HOUSING_AND_INHERITANCE_DOCS } from './docs/housingAndInheritance';
import { EDUCATION_AND_COMPLAINTS_DOCS } from './docs/educationAndComplaints';
import { PETITIONS_AND_CONTRACTS_DOCS } from './docs/petitionsAndContracts';

export const ALL_DOCUMENTS: LegalDocument[] = [
  ...FAMILY_AND_DIVORCE_DOCS,
  ...CRIMINAL_AND_CIVIL_DOCS,
  ...COURTS_AND_PROCURACY_DOCS,
  ...INTERIOR_AND_LABOR_DOCS,
  ...HOUSING_AND_INHERITANCE_DOCS,
  ...EDUCATION_AND_COMPLAINTS_DOCS,
  ...PETITIONS_AND_CONTRACTS_DOCS,
];

export function getDocumentById(id: string): LegalDocument | undefined {
  return ALL_DOCUMENTS.find(doc => doc.id === id);
}

export function getDocumentsByCategory(categoryId: string): LegalDocument[] {
  return ALL_DOCUMENTS.filter(doc => doc.category === categoryId);
}
