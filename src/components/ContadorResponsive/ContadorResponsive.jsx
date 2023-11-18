import React from "react";
import { chakra, Stack } from '@chakra-ui/react'
import { useState } from "react";
import BotonContador from "../BotonContador/BotonContador";
const ContadorResponsive = ({ sumar, restar }) => {
    let paso =1
    let limite = 10
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

if(cambiarValor < -limite){
    setCambiarValor(-limite)
    

}
if(cambiarValor > limite){
    setCambiarValor(limite)
}

    return (
        <>
        <chakra.span style={{ fontFamily: 'Contador', fontSize: '10em', fontStyle: 'italic' }}>{cambiarValor}</chakra.span>
        <Stack  direction={['column', 'row']} bg='yellowgreen' justify={['center','space-evenly']} >

            <BotonContador operacion='-2' funcOperacion={disminuir} paso={2} valor={cambiarValor} limite={-limite}/>
            <BotonContador operacion={restar} funcOperacion={disminuir} paso={paso}valor={cambiarValor} limite={-limite}/>
            <BotonContador operacion={sumar} funcOperacion={aumentar} paso={paso} valor={cambiarValor} limite={limite}/>
            <BotonContador operacion='+2' funcOperacion={aumentar} paso={2} valor={cambiarValor} limite={limite}/>
        </Stack>
        </>
    )

}

export default ContadorResponsive;