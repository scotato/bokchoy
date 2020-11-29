import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode('white', 'gray.900')(props),
      },
    }),
  },
})
