import React from 'react';
import { chakra } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import ContadorResponsive from '../ContadorResponsive/ContadorResponsive';

const Main = () => {
    return (
        <chakra.section className="main" h={['80dvh', '100%','80vh', '75dvh']} display='grid'  alignContent='space-between'>
            <ContadorResponsive sumar='+' restar='-'/>
        </chakra.section>
    )
}

export default Main;