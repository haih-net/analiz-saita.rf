export interface SchemaNode {
  '@type': string
  '@id'?: string
  [property: string]: JsonValue | undefined
}

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | SchemaNode
  | { [key: string]: JsonValue | undefined }
  | JsonValue[]

export interface SchemaGraph {
  '@context': 'https://schema.org'
  '@graph': SchemaNode[]
}

export type SchemaType =
  SchemaGraph | (SchemaNode & { '@context': 'https://schema.org' })
