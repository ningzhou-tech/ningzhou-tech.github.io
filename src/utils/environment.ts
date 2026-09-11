/**
 * Environment and editor state detection.
 * Development and editing controls are only displayed while in Google AI Studio
 * development mode (ais-dev-*) or when explicitly enabled with ?edit=true.
 */
export const isEditModeAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname;
  // Google AI Studio dev server or local machine
  const isDevHost = hostname.includes('ais-dev-') || hostname === 'localhost' || hostname === '127.0.0.1';
  
  // URL override parameter (e.g. ?edit=true)
  const params = new URLSearchParams(window.location.search);
  const hasEditParam = params.get('edit') === 'true' || params.has('editor') || window.location.hash.includes('edit');
  
  return isDevHost || hasEditParam;
};

/**
 * Checks if a string should be considered a placeholder or empty.
 * Returns true if the string is empty or contains placeholder markers.
 */
export const isPlaceholderValue = (val?: string | null): boolean => {
  if (!val) return true;
  const trimmed = val.trim();
  if (trimmed === '') return true;
  const lower = trimmed.toLowerCase();
  if (lower.includes('placeholder')) return true;
  if (lower.startsWith('[') && lower.endsWith(']')) return true;
  return false;
};
