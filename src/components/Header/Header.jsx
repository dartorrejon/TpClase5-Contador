import React from "react";
import { Image, Box} from "@chakra-ui/react";
import reloj from '../../../public/img/reloj.png'
const Header = () => {

    return (
        <Box
            display='flex'
            alignItems='center'
            gap={10}
            px={[5,10]}
            py={['5px','5px','5px','20px']}
            as='header'
            h={['12.5dvh','20dvh','22dvh','15dvh']}
            bg='#1a1a1a'
        >
            <Image
                className="App-logo"
                src={reloj}
                alt='contador'
                width={['4em','3.8em','4.5em','5.5em']}
                _hover={{
                    transform: 'rotate(360deg)',
                    transition: 'transform .5s infinite ease-in-out'}}
                 />
            <Box 
            as='h1' 
            color='#c8cfd0' 
            fontSize={['3em','3em','3.2m','4em']} 
            textTransform='uppercase' 
            fontStyle='italic'>Contador</Box>
        </Box>
    )
}

export default Header;