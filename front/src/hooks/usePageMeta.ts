import { useEffect } from 'react'

interface PageMeta {
  title?: string
  description?: string
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
}
