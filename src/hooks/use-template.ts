import { useMediaQuery } from '@chakra-ui/react'

enum TemplateSize {
  large = 'large',
  small = 'small',
}

export const useTemplate = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const size = isLargerThan768 ? TemplateSize.large : TemplateSize.small
  const sidebarWidth = '256px'

  switch (size) {
    case TemplateSize.large:
      return {
        size,
        isLarge: true,
        sidebarWidth,
        columns: `${sidebarWidth} 1fr`,
        rows: '74px 1fr',
        areas: `
        "navigator header"
        "navigator body"
      `,
      }
    case TemplateSize.small:
      return {
        size,
        isLarge: false,
        sidebarWidth: 0,
        columns: '1fr',
        rows: '74px 1fr 74px',
        areas: `
          "header"
          "body"
          "navigator"
        `,
      }
  }
}
