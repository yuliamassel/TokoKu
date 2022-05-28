import React from 'react'


const Button = ({children,isLoading,...props}) => {
    return (
        <button  {...props}>{isLoading ?'Loading...' :children}</button>
    )
}

export default Button