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
        divider={
          <StackDivider
            borderWidth={1}
            borderColor={dividerColor}
            marginTop={0}
            marginBottom={0}
            margin={0}
          />
        }
      >
        <Grid
          templateColumns="auto 1fr auto"
          alignItems="center"
          columnGap={4}
          p={4}
        >
          <Icon as={FaMoon} color="gray.400" fontSize={24} />
          <Text fontSize={24} fontWeight="500">
            Dark Mode
          </Text>
          <Switch
            size="lg"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            transform="scale(1.25)"
            mr={2}
          />
        </Grid>

        <Link to="/settings/debug">
          <Grid
            templateColumns="auto 1fr auto"
            alignItems="center"
            columnGap={4}
            p={4}
          >
            <Icon as={FaBug} color="gray.400" fontSize={24} />
            <Text fontSize={24} fontWeight="500">
              Debug
            </Text>
            <Icon as={FaChevronRight} color="gray.400" fontSize={24} />
          </Grid>
        </Link>

        <Grid
          templateColumns="auto 1fr auto"
          alignItems="center"
          columnGap={4}
          p={4}
        >
          <Icon as={FaCodeBranch} color="gray.400" fontSize={24} />
          <Text fontSize={24} fontWeight="500">
            Version
          </Text>
          <Text fontSize={24} color="gray.400" fontWeight="600">
            {version}
          </Text>
        </Grid>
      </VStack>
    </MainLayout>
  )
}
