import React from 'react'

export default function Total(props) {
    
    const {groceries} = props
    
    const value = groceries.reduce((acc,next)=>{
        acc+=next.units*next.unitPrice
        return acc
    },0)
    
    return (
        
        <>
            <span> Grand Total: &#8377; {value}</span>
        </>
    )
}