import * as React from 'react'
import {
  Grid,
  VStack,
  StackDivider,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { FaMoon, FaCodeBranch, FaBug, FaChevronRight } from 'react-icons/fa'
import { version } from '../../package.json'
import { Link } from '../components/Link'

export { SettingsHeader } from './SettingsHeader'

export const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const dividerColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <MainLayout>
      <VStack
        align="stretch"
        divider={<StackDivider borderWidth={1} borderColor={dividerColor} />}
        maxWidth="920px"
        m="0 auto"
      >
        <Grid
          templateColumns="auto 1fr auto"
          alignItems="center"
          columnGap={4}
          height={12}
        >
          <Icon as={FaMoon} color="gray.400" fontSize={24} />
          <Text fontSize={24}>Dark Mode</Text>
          <Switch
            size="lg"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            transform="scale(1.25)"
          />
        </Grid>

        <Link to="/settings/debug">
          <Grid
            templateColumns="auto 1fr auto"
            alignItems="center"
            columnGap={4}
            height={12}
          >
            <Icon as={FaBug} color="gray.400" fontSize={24} />
            <Text fontSize={24}>Debug</Text>
            <Icon as={FaChevronRight} color="gray.400" fontSize={24} />
          </Grid>
        </Link>

        <Grid
          templateColumns="auto 1fr auto"
          alignItems="center"
          columnGap={4}
          height={12}
        >
          <Icon as={FaCodeBranch} color="gray.400" fontSize={24} />
          <Text fontSize={24}>Version</Text>
          <Text fontSize={24} color="gray.400" fontWeight="700">
            {version}
          </Text>
        </Grid>
      </VStack>
    </MainLayout>
  )
}
