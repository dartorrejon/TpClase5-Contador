import React from "react";
import {Button} from "@chakra-ui/react";
const BotonContador = ({operacion, funcOperacion, paso, valor, limite}) => {
    const manejarClick = (e) => {
        funcOperacion(e, paso)
    }
  
    return(
        <Button 
        onClick={manejarClick}
        colorScheme="green"
        size="lg"
        mr="4"
        mt="50px"
        isDisabled={valor === limite}
        _hover={{ transform: 'scale(1.1)' }} 
        _active={{ transform: 'scale(0.9)' }}
      >{operacion}</Button>
    )
}

export default BotonContador;