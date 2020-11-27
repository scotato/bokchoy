import { useMediaQuery } from '@chakra-ui/react'

enum Templates {
  large = 'large',
  small = 'small',
}

export const useTemplate = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const size = isLargerThan768 ? Templates.large : Templates.small

  switch (size) {
    case Templates.large:
      return {
        size,
        columns: '256px 1fr',
        rows: 'auto 1fr',
        areas: `
        "navigator header"
        "navigator body"
      `,
      }
    case Templates.small:
      return {
        size,
        columns: '1fr',
        rows: 'auto 1fr auto',
        areas: `
          "header"
          "body"
          "navigator"
        `,
      }
  }
}
