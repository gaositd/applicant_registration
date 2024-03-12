'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import AppConfigDrawer from './navbar/AppConfigDrawer'

interface props {
  isAdmin: boolean
}

const Navbar: React.FC<props> = ({ isAdmin }) => {
  const [user, setUser] = useState<{ name: string; matricula: string } | null>(
    null
  )

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) setUser(JSON.parse(user))
  }, [])

  const toast = useToast()

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'DELETE',
      credentials: 'include'
    }).then((res) => {
      if (res.status === 200) {
        localStorage.removeItem('user')

        window.location.assign('/login')
      } else {
        toast({
          description: 'No se puede cerrar la sesion',
          status: 'error',
          title: 'Ha sucedido un error al cerrar la sesion'
        })
      }
    })
  }

  return (
    <Flex bgColor='primary.base' w='100%' h='10%' p={6} align='center'>
      <Flex>
        <Image src='/logo.png' alt='logo' />
      </Flex>

      <div>
        <Heading color='white' size='md'>
          Sistema de preinscripciones
        </Heading>
      </div>
      <Menu>
        <MenuButton
          id='3'
          as={Button}
          rightIcon={<AiFillCaretDown />}
          borderRadius={10}
          colorScheme='white'
        >
          {user?.name}
        </MenuButton>

        <MenuList>
          <MenuItem
            id='1'
            onClick={() =>
              toast({
                title: 'Proximamente',
                description:
                  'Esta funcionalidad estara disponible en futuras versiones',
                status: 'info',
                duration: 5000,
                isClosable: true
              })
            }
          >
            Perfil
          </MenuItem>
          {isAdmin && (
            <MenuItem id='3' onClick={onOpen}>
              Ajustes
            </MenuItem>
          )}
          <MenuDivider />
          <MenuItem id='2' onClick={handleLogout}>
            Cerrar sesion
          </MenuItem>
        </MenuList>
      </Menu>
      {isAdmin && <AppConfigDrawer isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export default Navbar
