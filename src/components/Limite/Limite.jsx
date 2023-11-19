import React from "react";
import { Text } from "@chakra-ui/react";

const Limite = ({ limite, valor }) => {
    return (
        <Text 
        as='p' 
        fontSize={['1.5em','1.5em',,'1.5em','2.5em']} 
        color={(Math.abs(valor) == limite)?'red':'white'}>Limite:  <Text 
                                                                    as='span'  
                                                                    verticalAlign='super' 
                                                                    textDecoration='underline'>+</Text> {limite}
        </Text>
    )
}
export default Limite;