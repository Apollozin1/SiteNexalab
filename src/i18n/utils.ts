import { pt } from './pt';
import { en } from './en';

export type Locale = 'pt-br' | 'en';

export function getTranslations(locale: string) {
  if (locale === 'en') return en;
  return pt;
}

export { pt, en };
