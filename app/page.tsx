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
  Fade,
  Flex,
  Center
} from '@chakra-ui/react'

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(true)
  const nodeRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(!isAnimating)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [isAnimating])

  return (
    <div className='p-6'>
      <Container maxW='100%'>
        <Grid
          templateAreas={`"main"
                        "footer"`}
          gridTemplateRows='90vh 10%'
          gridTemplateColumns='12fr'
          fontWeight='bold'
        >
          <GridItem>
            <Fade in={isAnimating}>
              <GridItem
                p='40px'
                color='white'
                mt='4'
              >
                <Center>
                  <Image
                    src={isAnimating ? './logoFace.png' : './logo.svg'}
                    alt=''
                    ref={nodeRef}
                    w='40%'
                    h='40%'
                  />
                </Center>
              </GridItem>
            </Fade>
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
      </Container>
    </div>
  )
}

export default Home
