import React from "react";
import { Box, Text } from "@chakra-ui/react"
import Redes from "../Redes/Redes";

const Footer = () => {
    return (
        <Box
        as='footer'
        display='flex'
        flexDir={['column','column','row-reverse','row-reverse']}
        justifyContent='space-between'
        alignItems='center'
        color='white' 
        bg={['#1a1a1a','transparent','none','none']} 
        mt={4}
        h={['12vh','22vh','70px',"auto"]}
        width='100dvw'
        px={['10px','20px','20px','40px']}
        py={['10px','20px']}
        pb='20px'
        fontFamily="'Roboto', sans-serif;">
            <Redes/>
            <Text 
            fontSize={['.9em','.8em','.9em','.95em']}            fontStyle='italic'>
            ©️DartoDev 2023 - Argentina Progama 4.0
            </Text>
            </Box>
    )
}

export default Footer;