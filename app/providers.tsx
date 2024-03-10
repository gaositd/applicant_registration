import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { SessionProvider } from '../hooks/SessionContext'
import { QueryClient, QueryClientProvider } from 'react-query'
interface props {
  children: React.ReactNode;
}

const Providers: React.FC<props> = ({ children }) => {
  const queryClient = new QueryClient()

  const extendedTheme = extendTheme({
    colors: {
      primary: {
        base: '#B11830',
        hover: '#1D4ED8'
      },
      structure: {
        borders: '#BFBFBF'
      }
    }
  })

  return (
    <ChakraProvider theme={extendedTheme}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Providers
