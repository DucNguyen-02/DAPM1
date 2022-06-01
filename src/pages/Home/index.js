import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { LOGO } from '../../assets/images'

const cx = classNames.bind(styles)

const Home = () => {
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
