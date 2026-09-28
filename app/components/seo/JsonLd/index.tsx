import type { SchemaType } from './types'
import { serializeJsonLd } from './helpers'

export function JsonLd({ data }: { data: SchemaType | SchemaType[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
