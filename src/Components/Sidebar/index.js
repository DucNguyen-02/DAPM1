import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import {
    BACKGROUND_SIDEBAR,
    LOGO,
    PERSON,
    SEARCH,
    TREND,
} from '../../assets/images'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const cx = classNames.bind(styles)

const Sidebar = () => {
    const [activeBtn, setActiveBtn] = useState()
    const redirects = [
        {
            id: 0,
            path: '/account',
            img: PERSON,
            title: 'Cập nhật tài khoản người dùng',
        },
        {
            id: 1,
            path: '/searchinfo',
            img: SEARCH,
            title: 'Tra cứu thông tin',
        },
        {
            id: 2,
            path: '/statistic',
            img: TREND,
            title: 'Thống kê - Báo cáo',
        },
    ]

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('backgroundimg')}
                src={BACKGROUND_SIDEBAR}
                alt=""
            />
            <div className={cx('content')}>
                <Link
                    onClick={() => setActiveBtn(null)}
                    to="/"
                    className={cx('content-logo')}
                >
                    <img src={LOGO} alt="" />
                </Link>
                <div className={cx('content-features')}>
                    {redirects.map((item) => {
                        return (
                            <Link
                                onClick={() => setActiveBtn(item.id)}
                                to={item.path}
                                className={cx('content-row', {
                                    active: activeBtn === item.id,
                                })}
                            >
                                <img src={item.img} alt="" />
                                <div className={cx('content-title')}>
                                    {item.title}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
