import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getDataFromLocalStorage from '../helper/getDataFromLocalStorage'

const PrivateRouter = ({ children }) => {
    const navigation = useNavigate()
    useEffect(() => {
        if (!getDataFromLocalStorage()) {
            navigation('/login', { replace: true })
        }
    }, [children])

    return <>{children}</>
}

export default PrivateRouter
