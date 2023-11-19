import React from "react";
import { Flex } from "@chakra-ui/react";
import RedSocial from "../RedSocial/RedSocial";

const Redes = () => {
    const redes = [
        {
            nombre:'Telegram',
            link:'https://web.telegram.org/k/',
            clase:'fa-brands fa-telegram'
         },
         {
            nombre:'Github',
            link:'https://github.com/dartorrejon/TpClase5-Contador',
            clase:'fa-brands fa-github'
         },
         {
            nombre:'Linkedin',
            link:'https://www.linkedin.com/in/drtorrejon/',
            clase:'fa-brands fa-linkedin'
         },
         {
            nombre:'Whatsapp',
            link:'https://web.whatsapp.com/',
            clase:'fa-brands fa-whatsapp'
         }
    ]
    return (
        <Flex
        justifyContent={['space-around','space-around','space-between','space-between']} 
        w={['50%','40%','30%','30%']}>
          <RedSocial link={redes[3].link} clase={redes[3].clase} nombre={redes[3].nombre}/> 
          <RedSocial link={redes[1].link} clase={redes[1].clase} nombre={redes[1].nombre}/> 
          <RedSocial link={redes[2].link} clase={redes[2].clase} nombre={redes[2].nombre}/> 
          <RedSocial link={redes[0].link} clase={redes[0].clase} nombre={redes[0].nombre}/> 
         </Flex>
    )
}

export default Redes;