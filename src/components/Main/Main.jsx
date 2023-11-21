import React from 'react';
import { chakra } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import ContadorResponsive from '../ContadorResponsive/ContadorResponsive';

const Main = () => {
    return (
        <chakra.section className="main" 
        h={['90dvh', '85dvh','87dvh', '75dvh']} 
        display='grid'  
        alignContent='space-between'>
            <ContadorResponsive/>
        </chakra.section>
    )
}

export default Main;