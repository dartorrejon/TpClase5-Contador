import React from 'react';
import { chakra } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import ContadorResponsive from '../ContadorResponsive/ContadorResponsive';

const Main = () => {
    return (
        <chakra.section className="main" bg='blue.200' h='80vh' display='grid'  alignContent='space-between' gap='5px' px={4} py={4}>
            <Box as='h1' border='1px solid black'>Contador Responsive</Box>
            <ContadorResponsive sumar='+' restar='-'/>
            <chakra.p bg='green.200'>Lorem ipsum  distinctio eaque ducimus nesciunt asperiores illum esse rerum numquam! Dolores, vitae excepturi.</chakra.p>
        </chakra.section>
    )
}

export default Main;