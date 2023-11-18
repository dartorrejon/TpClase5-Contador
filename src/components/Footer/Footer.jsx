import React from "react";
import { Box, chakra } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box
        as='footer' 
        color='white' 
        bg={['#1a1a1a','none']} 
        h={['9vh',"auto"]}
        position='absolute'
        bottom='0'
        width='100dvw'
        px={['10px','20px']}
        py={['10px','20px']}>Yo soy el footer</Box>
    )
}

export default Footer;