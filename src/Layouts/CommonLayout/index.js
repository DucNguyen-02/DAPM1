import React from 'react'
import classNames from 'classnames/bind'
import styles from './CommonLayout.module.scss'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import { BACKGROUND_CONTENT } from '../../assets/images'

const cx = classNames.bind(styles)

const CommonLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />

                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default CommonLayout
