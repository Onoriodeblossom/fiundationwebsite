import React  from 'react'
import { Text } from './styles'

export const P = ({children,size,align,color}) =>{
    return(
        <Text size={size} align={align} color={color}>
            {children}
        </Text>
    )
}