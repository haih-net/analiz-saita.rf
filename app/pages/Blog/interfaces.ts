export type Post = {
  path: string
  title: string
  description: string
  date: string
  dateLabel: string
  version: string
  commit: string
  commitUrl: string
  image: PostSeo['image']
}

export type PostSeo = {
  title: string
  description: string
  path: string
  image: {
    src: string
    srcSet?: string
    alt: string
    width: number
    height: number
  }
  breadcrumbs: Array<{ name: string; path: string }>
  article: {
    headline: string
    published: string
    version: string
    commitUrl: string
  }
}
