import * as React from 'react'
import { useParams } from 'react-router-dom'
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { RecipeRow } from '.'
import { useWebsites, useLibrary } from '../../hooks'

type RecipeProps = { id?: string }

export const RecipeRemove = (props: RecipeProps) => {
  const params = useParams<RecipeProps>()
  const id = (props.id || params.id) as string
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { websiteById, removeWebsite } = useWebsites()
  const { removeFromLibrary } = useLibrary()
  const website = websiteById(id)
  const { recipe } = website?.graph ?? {}

  return (
    <>
      <IconButton
        aria-label="Delete Website Data"
        onClick={onOpen}
        color="red.500"
        icon={<DeleteIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {recipe ? (
              <RecipeRow recipe={recipe} />
            ) : (
              <Text>{website?.url}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              colorScheme="red"
              bg="red.500"
              children="Delete Recipe"
              onClick={() => {
                removeFromLibrary(id)
                removeWebsite(id)
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