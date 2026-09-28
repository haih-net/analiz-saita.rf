import type { SchemaType } from './types'

// Escape every HTML-opening character, including script closers and comments.
// JSON.parse restores the original value; the HTML parser never sees markup.
export function serializeJsonLd(data: SchemaType | SchemaType[]): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
