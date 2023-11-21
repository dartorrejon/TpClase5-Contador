import React from "react";
import {Button} from "@chakra-ui/react";

const BotonReset = ({valor}) => {
    const manejoReset = (e) => {
        valor(e)
    }
    return(
        <>  <Button 
        onClick={manejoReset}
        bg='linear-gradient(180deg, #a04528 , #d98324 90%)'
        color='#c8cfd0'
        size="lg"
        w={['80%','15%']}
        _hover={{ transform: 'scale(1.1)' }} 
        _active={{ transform: 'scale(0.9)' }}
      >Reset</Button>
        </>
    )
}

export default BotonReset;