import { LegalDocument } from '../types';

/**
 * Normalizes Uzbek Latin text for flexible and tolerant search.
 * Handles different apostrophe variants (‘, ’, ', ʻ, ʼ, `), diacritics, and lowercase.
 */
export function normalizeUzbekText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[‘’ʻʼ`'"]/g, "'") // unify all apostrophes to simple single quote
    .replace(/g['']/g, 'g')      // allow matching g' without apostrophe
    .replace(/o['']/g, 'o')      // allow matching o' without apostrophe
    .replace(/sh/g, 'sh')
    .replace(/ch/g, 'ch')
    .trim();
}

/**
 * Strips apostrophes entirely for ultra-loose substring matching.
 */
export function stripApostrophes(text: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/[‘’ʻʼ`'"]/g, '').trim();
}

/**
 * Filters legal documents based on query and optional category filter.
 */
export function searchDocuments(
  documents: LegalDocument[],
  query: string,
  categoryId?: string | null
): LegalDocument[] {
  let filtered = documents;

  if (categoryId && categoryId !== 'all') {
    filtered = filtered.filter(doc => doc.category === categoryId);
  }

  const rawQuery = query.trim();
  if (!rawQuery) {
    return filtered;
  }

  const cleanQuery = normalizeUzbekText(rawQuery);
  const strippedQuery = stripApostrophes(rawQuery);
  const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

  return filtered.filter(doc => {
    const titleNorm = normalizeUzbekText(doc.title);
    const titleStripped = stripApostrophes(doc.title);

    const descNorm = normalizeUzbekText(doc.description);
    const descStripped = stripApostrophes(doc.description);

    const categoryNorm = normalizeUzbekText(doc.categoryName);
    const categoryStripped = stripApostrophes(doc.categoryName);

    const keywordsNorm = doc.keywords.map(k => normalizeUzbekText(k)).join(' ');
    const keywordsStripped = doc.keywords.map(k => stripApostrophes(k)).join(' ');

    const combinedNorm = `${titleNorm} ${categoryNorm} ${keywordsNorm} ${descNorm}`;
    const combinedStripped = `${titleStripped} ${categoryStripped} ${keywordsStripped} ${descStripped}`;

    // Direct substring match
    if (combinedNorm.includes(cleanQuery) || combinedStripped.includes(strippedQuery)) {
      return true;
    }

    // All tokens must match somewhere
    return queryTokens.every(
      token => combinedNorm.includes(token) || combinedStripped.includes(stripApostrophes(token))
    );
  });
}
