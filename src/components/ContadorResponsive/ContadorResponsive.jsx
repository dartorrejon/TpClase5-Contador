import React from "react";
import { chakra, Flex } from '@chakra-ui/react'
import { useState } from "react";
import BotonContador from "../BotonContador/BotonContador";
import BotonReset from "../BotonReset/BotonReset";
import Limite from "../Limite/Limite";
const ContadorResponsive = ({ sumar, restar }) => {
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
        justifyContent={["space-around",null,null, 'space-between']}
        h={['70dvh','70dvh','65dvh','400px']}
        py={[5,5,'20px',5]}
        my={['10px','10px','20px','20px']}
        >
            
        
            <Flex
            direction='column' 
            alignItems='center' 
            justifyContent='space-around'
            py={['1em', '1em','1em','4em']} 
            color={(Math.abs(cambiarValor) != limite)?'#A2A0A0':'red'}>
                <chakra.span 
                lineHeight={['1em', '1em', '1em', '.8em']}
                style={{ fontFamily: 'Contador', fontStyle: 'italic' }}
                fontSize={['8.5em', '8em', '9.5em', '22em']}
                textAlign='center'
                >{cambiarValor}</chakra.span>
                <Limite limite={limite} valor={cambiarValor}/>
            </Flex>
            <Flex 
            direction={['column-reverse', 'row']} 
            py={['1em','2em','2em', '1em']} 
            
            justifyContent={['space-arround', 'space-evenly']} 
            alignItems={['center', 'center']} 
            gap={['10px', null]}>
                <BotonContador 
                operacion='-2' 
                funcOperacion={disminuir} 
                paso={2} 
                valor={cambiarValor} 
                limite={-limite} />
                <BotonContador 
                operacion={restar} 
                funcOperacion={disminuir} 
                paso={paso} 
                valor={cambiarValor} 
                limite={-limite} />
                <BotonReset valor={reset} />
                <BotonContador 
                operacion={sumar} 
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

export default ContadorResponsive;