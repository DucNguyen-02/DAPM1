import React from 'react'
import { useEffect } from 'react'

const Title = ({ title }) => {
    useEffect(() => {
        document.title = title
    })
    return <></>
}

export default Title
