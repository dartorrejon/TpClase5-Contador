import React from "react";
import { chakra, Flex} from '@chakra-ui/react'
import { useState } from "react";
import BotonContador from "../BotonContador/BotonContador";
import BotonReset from "../BotonReset/BotonReset";
import Limite from "../Limite/Limite";
const Main = () => {
    let paso = 1
    let limite = 50
    const [cambiarValor, setCambiarValor] = useState(0)

    const aumentar = (e, paso = 1) => {
        e.preventDefault()
        e.stopPropagation()
        if (cambiarValor < limite) setCambiarValor(cambiarValor + paso)
    }
  
    const disminuir = (e, paso = 1) => {
        e.preventDefault()
        e.stopPropagation()
        if (cambiarValor > -limite) {
            setCambiarValor(cambiarValor - paso)

        }
    }

    const reset = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCambiarValor(0)
    }

    if (cambiarValor < -limite) {
        setCambiarValor(-limite)


    }
    if (cambiarValor > limite) {
        setCambiarValor(limite)
    }

    return (
        <Flex
        direction='column' 
        justifyContent={["center",'space-evenly','space-evenly', 'space-evenly']}
        h={['85dvh','100%','100%','65dvh']}
        py={[0,2,'10px',5]}
        rowGap={['1em','0px','0px','10px']}
        >
            <Flex
            gap={['10px','0px','0px', '5px']}
            direction='column' 
            alignItems='center' 
            justifyContent='space-around'
            py={['0.5em', '0em','0em','2em']} 
            color={(Math.abs(cambiarValor) != limite)?'#A2A0A0':'red'}>
                <chakra.span 
                lineHeight={['.71em', '1em', '1em', '.7em']}
                style={{ fontFamily: 'Contador', fontStyle: 'italic' }}
                fontSize={['14em', '8em', '10em', '18em']}
                textAlign='center'
                >{cambiarValor}</chakra.span>
                <Limite 
                limite={limite} 
                valor={cambiarValor}/>
            </Flex>
           
            <Flex 
            direction={['column-reverse', 'row']} 
            py={['1em','2em','2em', '1em']} 
            justifyContent={['space-arround', 'space-evenly']} 
            alignItems={['center', 'center','end', 'end']} 
            gap={['10px', null]}>
                <BotonContador 
                operacion='-2' 
                funcOperacion={disminuir} 
                paso={2} 
                valor={cambiarValor} 
                limite={-limite} />
                <BotonContador 
                operacion='-1' 
                funcOperacion={disminuir} 
                paso={paso} 
                valor={cambiarValor} 
                limite={-limite} />
                <BotonReset valor={reset} />
                <BotonContador 
                operacion='+1'
                funcOperacion={aumentar} 
                paso={paso} 
                valor={cambiarValor} 
                limite={limite} />
                <BotonContador 
                operacion='+2' 
                funcOperacion={aumentar} 
                paso={2} 
                valor={cambiarValor} 
                limite={limite} />
            </Flex>
        </Flex>
    )
}

export default Main;