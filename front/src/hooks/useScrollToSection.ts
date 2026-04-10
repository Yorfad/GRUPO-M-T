import { useCallback } from 'react'
import { scrollToSection } from '../utils/scroll'

export function useScrollToSection(offset = 80) {
  const scrollTo = useCallback(
    (id: string) => {
      scrollToSection(id, offset)
    },
    [offset],
  )

  return scrollTo
}
