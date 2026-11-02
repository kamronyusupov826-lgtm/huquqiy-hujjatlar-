import { SavedDocument, UserProfile } from '../types';

const STORAGE_KEYS = {
  SAVED_DOCS: 'huquqiy_saved_documents_v1',
  FAVORITES: 'huquqiy_favorites_v1',
  RECENT_DOCS: 'huquqiy_recent_documents_v1',
  USER_PROFILE: 'huquqiy_user_profile_v1',
};

// Default profile placeholder
export const DEFAULT_USER_PROFILE: UserProfile = {
  firstName: '',
  lastName: '',
  middleName: '',
  phone: '',
  address: '',
  passportSeries: '',
  pinfl: '',
};

export function getSavedDocuments(): SavedDocument[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_DOCS);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error reading saved documents:', err);
    return [];
  }
}

export function saveDocumentToStorage(doc: SavedDocument): void {
  try {
    const existing = getSavedDocuments();
    const index = existing.findIndex(d => d.id === doc.id);
    if (index >= 0) {
      existing[index] = { ...doc, updatedAt: new Date().toISOString() };
    } else {
      existing.unshift(doc);
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_DOCS, JSON.stringify(existing));
  } catch (err) {
    console.error('Error saving document:', err);
  }
}

export function deleteSavedDocument(id: string): void {
  try {
    const existing = getSavedDocuments().filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEYS.SAVED_DOCS, JSON.stringify(existing));
  } catch (err) {
    console.error('Error deleting document:', err);
  }
}

export function getFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(docId: string): boolean {
  try {
    const favorites = getFavorites();
    const index = favorites.indexOf(docId);
    let isFav = false;
    if (index >= 0) {
      favorites.splice(index, 1);
      isFav = false;
    } else {
      favorites.push(docId);
      isFav = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return isFav;
  } catch {
    return false;
  }
}

export function getRecentDocumentIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RECENT_DOCS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addRecentDocument(docId: string): void {
  try {
    const recents = getRecentDocumentIds().filter(id => id !== docId);
    recents.unshift(docId);
    if (recents.length > 20) {
      recents.pop();
    }
    localStorage.setItem(STORAGE_KEYS.RECENT_DOCS, JSON.stringify(recents));
  } catch (err) {
    console.error('Error updating recents:', err);
  }
}

export function getUserProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return raw ? { ...DEFAULT_USER_PROFILE, ...JSON.parse(raw) } : DEFAULT_USER_PROFILE;
  } catch {
    return DEFAULT_USER_PROFILE;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving user profile:', err);
  }
}
