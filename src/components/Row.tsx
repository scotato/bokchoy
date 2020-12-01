import * as React from 'react'
import { Grid, GridProps, Text, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface RowProps {
  text: string
  detail?: JSX.Element | string
  leadingIcon?: IconType
  trailingIcon?: IconType
}

export const Row = (props: RowProps & GridProps) => {
  const { text, detail, leadingIcon, trailingIcon, ...gridProps } = props
  const auto = (exists: any) => (exists ? 'auto' : '')

  const columns = `${auto(leadingIcon)} 1fr ${auto(detail)} ${auto(
    trailingIcon
  )}`

  return (
    <Grid
      templateColumns={columns}
      justifyItems="flex-start"
      alignItems="center"
      columnGap={3}
      py={3}
      px={4}
      {...gridProps}
    >
      {leadingIcon && <Icon as={leadingIcon} color="gray.400" fontSize={20} />}
      <Text fontSize={20} fontWeight="500" children={text} />
      {detail && (
        <Text
          fontSize={20}
          fontWeight="600"
          color="gray.400"
          children={detail}
        />
      )}
      {trailingIcon && (
        <Icon
          as={trailingIcon}
          color="gray.400"
          fontWeight="600"
          fontSize={20}
        />
      )}
    </Grid>
  )
}
