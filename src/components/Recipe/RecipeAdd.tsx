import * as React from 'react'
import {
  Button,
  ButtonProps,
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
  useColorModeValue,
} from '@chakra-ui/react'
import { RecipeRow } from '.'
import { useWebsite, useLibrary } from '../../hooks'

export const RecipeAdd = (props: ButtonProps) => {
  const [url, setUrl] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, loading, error } = useWebsite(url)
  const { addToLibrary } = useLibrary()
  const { recipe } = data?.graph ?? {}
  const buttonBg = useColorModeValue('blue.500', 'blue.500')

  return (
    <>
      <Button
        onClick={onOpen}
        fontSize={20}
        color="blue.500"
        children="Add Recipe"
        {...props}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90%" width="768px" my="auto">
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
              <FormHelperText mb={4}>
                Paste a web recipe URL, we'll let you know if we can read the
                recipe.
              </FormHelperText>
            </FormControl>

            {!loading && error && (
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
              bg={buttonBg}
              onClick={() => {
                addToLibrary(data!.id)
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
