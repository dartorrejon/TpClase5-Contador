import React from "react";
import {Button} from "@chakra-ui/react";
const BotonContador = ({operacion, funcOperacion, paso, valor, limite}) => {
    const manejarClick = (e) => {
        funcOperacion(e, paso)
    }
  
    return(
        <Button 
        onClick={manejarClick}
        bg='linear-gradient(180deg,  #256ea2 , #1b4f72 90%)'
        color='#c8cfd0'
        size="lg"
        w={['80%','7%']}
        isDisabled={valor === limite}
        _hover={{ transform: 'scale(1.1)' }} 
        _active={{ transform: 'scale(0.9)' }}
      >{operacion}</Button>
    )
}

export default BotonContador;