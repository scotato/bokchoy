import * as React from 'react'
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
} from '@chakra-ui/react'
import { useWebsites, useLibrary } from '../../hooks'

export const RecipeRemoveAll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { websites, removeAllWebsites } = useWebsites()
  const { library, removeAllFromLibrary } = useLibrary()
  const canDelete = websites.length || library.length

  return canDelete ? (
    <>
      <Button
        children="Delete All Data"
        onClick={onOpen}
        colorScheme="red"
        bg="red.500"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This action will permanently delete all website, recipe & library
              data.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              colorScheme="red"
              bg="red.500"
              children="Delete All Data"
              onClick={() => {
                removeAllFromLibrary()
                removeAllWebsites()
                onClose()
              }}
            />
            <Button onClick={onClose} children="Cancel" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  ) : null
}
