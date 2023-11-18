import React from "react";
import { Image, Box } from "@chakra-ui/react";
import reloj from '../../../public/img/reloj.png'
const Header = () => {
    return (
        <Box
            display='flex'
            alignItems='center'
            gap={10}
            px={[5,10]}
            py={[null,'20px']}
            as='header'
            h='15dvh'
            bg='#1a1a1a'
        >
            <Image
                src={reloj}
                alt='contador'
                width={20}
                 />
            <Box as='h1' color='#c8cfd0' fontSize={['3em','4em','4em']} textTransform='uppercase' fontStyle='italic'>Contador</Box>
        </Box>
    )
}

export default Header;