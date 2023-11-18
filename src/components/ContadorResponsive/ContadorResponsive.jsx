import React from "react";
import { chakra, Flex } from '@chakra-ui/react'
import { useState } from "react";
import BotonContador from "../BotonContador/BotonContador";
import BotonReset from "../BotonReset/BotonReset";
const ContadorResponsive = ({ sumar, restar }) => {
    let paso =1
    let limite = 40
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

if(cambiarValor < -limite){
    setCambiarValor(-limite)
    

}
if(cambiarValor > limite){
    setCambiarValor(limite)
}

    return (
        <Flex direction='column' justifyContent={["space-around",'space-between']} h={['auto','75dvh']}>
        <chakra.span
        style={{ fontFamily: 'Contador', fontStyle: 'italic' }}
        fontSize={['8em', '12em', '22em']}
        textAlign='center'
        color='#A2A0A0'
        >{cambiarValor}</chakra.span>
        <Flex direction={['column-reverse','row']} py={['25px','1em']} bg={['#1a1a1a','none']} justifyContent={['space-arround','space-evenly']}  alignItems={['center','center']} gap={['10px',null]}>
            <BotonContador operacion='-2' funcOperacion={disminuir} paso={2} valor={cambiarValor} limite={-limite}/>
            <BotonContador operacion={restar} funcOperacion={disminuir} paso={paso}valor={cambiarValor} limite={-limite}/>
            <BotonReset valor={reset}/>
            <BotonContador operacion={sumar} funcOperacion={aumentar} paso={paso} valor={cambiarValor} limite={limite}/>
            <BotonContador operacion='+2' funcOperacion={aumentar} paso={2} valor={cambiarValor} limite={limite}/>
        </Flex>
        </Flex>
    )

}

export default ContadorResponsive;