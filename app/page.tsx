'use client'

import React,
{
  useEffect,
  useState,
  useRef
} from 'react'
import {
  Container,
  Button,
  Grid,
  GridItem,
  Image,
  Box,
  Flex,
  Center
} from '@chakra-ui/react'
import './page.css'
// import {
//   SwitchTransition,
//   CSSTransition
// } from 'react-transition-group'
import { redirect } from 'next/navigation'

const arrImages = ['./logoFace.png', './logo.svg', './logo_veza.svg']

const Home = () => {
  const [counter, setCounter] = useState(0)
  const [imageCounter, setImageCounter] = useState(0)
  const [isAnimating, setIsAnimating] = useState('')// paragraph

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageCounter((currentValue) => {
        if (currentValue + 1 === arrImages.length) {
          return 0
        }

        return currentValue + 1
      })
    }, 3000)
    return () => clearInterval(intervalId)
  }, [isAnimating])

  return (
    <div className='p-6'>
      {redirect('/login')}
      {/*<Container maxW='100%'>
        <Grid
          templateAreas={`"main"
                        "footer"`}
          gridTemplateRows='90vh 10%'
          gridTemplateColumns='12fr'
          fontWeight='bold'
        >
          <GridItem>
            <GridItem
              p='40px'
              color='white'
              mt='4'
            >
              <Center>
                <SwitchTransition>
                  <CSSTransition
                    key={arrImages[imageCounter]}
                    addEndListener = {(node:any, done:any) => node.addEventListener("trasitionend", done, false)}
                    classNames='fade'
                  >
                    <Image
                      src={arrImages[imageCounter]}
                      alt=''
                      w='40%'
                      h='40%'
                    />
                  </CSSTransition>
                </SwitchTransition>
              </Center>
            </GridItem>
          </GridItem>
          <GridItem
            area='footer'
            gridColumn='1'
          >
            <Grid
              templateColumns='repeat(3, 1fr)'
              gap={0}
            >
              <GridItem flex='1'> </GridItem>
              <GridItem flex='1' bg='green.700'>
                <Center>
                  <Button
                    colorScheme='red'
                    onClick={() => window.location.replace('/register')}
                  >
                    Ir al registro
                  </Button>
                </Center>
              </GridItem>
              <GridItem
                bg='green.300'
                alignSelf='end'
                flex='1'
              >
                <Image
                  src='./logo_veza.svg'
                  alt='Logo Veza'
                  w='5vw'
                  h='5vh'
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>*/}
    </div>
  )
}

export default Home
