import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { LOGO } from '../../assets/images'
import getDataFromLocalStorage from '../../helper/getDataFromLocalStorage'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!getDataFromLocalStorage()) {
            navigate('/login')
        }
    }, [])
    return (
        <div className={cx('wrapper ')}>
            <div className={cx('content')}>
                <div className={cx('content-img')}>
                    <img src={LOGO} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
