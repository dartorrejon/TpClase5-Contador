import React from "react"
import { Box, chakra } from "@chakra-ui/react"
import Main from "./components/Main/Main"
import './App.css' 

function App() {

  return (
    <>
      <Box 
      bg='red.100'
      h='10dvh' 
      display='grid' 
      placeContent='center'
      >hola mundo</Box>
      <Main />
      <chakra.footer h='10dvh' bg='green.200'>Yo soy el footer</chakra.footer>
    </>
  )
}

export default App
