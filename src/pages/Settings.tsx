import * as React from 'react'
import { VStack, Switch, useColorMode } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import {
  FaMoon,
  FaCodeBranch,
  FaBug,
  FaChevronRight,
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
} from 'react-icons/fa'
import { version } from '../../package.json'
import { Link } from '../components/Link'
import { Page } from '../components/Page'
import { Group } from '../components/Group'
import { Row } from '../components/Row'
import { useExport, useImport, useTemplate } from '../hooks'

export { SettingsHeader } from './SettingsHeader'

export const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { href, download } = useExport()
  const { importRecipes, ImportInput } = useImport()
  const { isLarge } = useTemplate()

  return (
    <MainLayout>
      <Page>
        <VStack spacing={isLarge ? 4 : 0} align="stretch">
          <Group>
            <Row
              leadingIcon={FaMoon}
              text="Dark Mode"
              detail={
                <Switch
                  size="lg"
                  isChecked={colorMode === 'dark'}
                  onChange={toggleColorMode}
                  transform="scale(1.25)"
                  colorScheme="green"
                  mr={2}
                />
              }
            />
          </Group>

          <Group title="System Info">
            <Row leadingIcon={FaCodeBranch} text="Version" detail={version} />
            <Link to="/settings/debug">
              <Row
                text="Debug"
                leadingIcon={FaBug}
                trailingIcon={FaChevronRight}
              />
            </Link>
          </Group>

          <Group
            title="Data Management"
            caption="Recipe data generated from this app can be imported & exported."
          >
            <Row
              as="button"
              onClick={importRecipes}
              leadingIcon={FaCloudUploadAlt}
              text="Import Recipes"
            />

            <a href={href} download={download}>
              <Row leadingIcon={FaCloudDownloadAlt} text="Export Recipes" />
            </a>
          </Group>
          <ImportInput />
        </VStack>
      </Page>
    </MainLayout>
  )
}
