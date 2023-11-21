import React from "react";
import { chakra } from "@chakra-ui/react";
const RedSocial = ({link, clase, nombre}) => {
    return (
        <chakra.a 
        fontSize={['1.5em','1.5em','1.8em','2.5em']}
        href={link} 
        target="_blank" 
        title={nombre}
        _hover={{transform: 'scale(1.1)' }}>
            <i className={clase}></i>
        </chakra.a>
    )
}

export default RedSocial;