import * as React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { RecipeRow } from './Recipe'
import { useWebsite, useLibrary } from '../hooks'

export const AddRecipe = () => {
  const [url, setUrl] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, error } = useWebsite(url)
  const { addToLibrary } = useLibrary()
  const { recipe } = data?.graph ?? {}

  return (
    <>
      <Button onClick={onOpen} color="blue.500">
        Add Recipe
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="recipe">
              <FormLabel>Recipe Address</FormLabel>
              <Input
                placeholder="URL"
                type="website"
                size="lg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <FormHelperText>
                Paste a web recipe URL, we'll let you know if we can read the
                recipe.
              </FormHelperText>
            </FormControl>

            {error && (
              <Alert status="error">
                <AlertIcon />
                There was an error processing your request
              </Alert>
            )}

            {recipe && <RecipeRow recipe={recipe} />}
            {url && !recipe && !error && (
              <Alert status="error">
                <AlertIcon />
                Unable to read recipe
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              disabled={!recipe}
              colorScheme="blue"
              children="Add to Library"
              onClick={() => {
                addToLibrary(data!)
                onClose()
              }}
            />
            <Button onClick={onClose} children="Cancel" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
