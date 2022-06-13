import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { AVATAR, MAIL, NOTIFICATION } from '../../assets/images'

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('mail')}>
                    <img className={cx('content-icon')} src={MAIL} alt="" />
                </div>
                <div className={cx('notification')}>
                    <img
                        className={cx('content-icon')}
                        src={NOTIFICATION}
                        alt=""
                    />
                </div>
                <div className={cx('info')}>
                    <div className={cx('info-avatar')}>
                        <img src={AVATAR} alt="" />
                    </div>
                    <div className={cx('info-content')}>
                        <div className="container">
                            <div className=" d-none d-md-flex justify-content-between align-items-center">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-light btn-sm dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Nguyễn Xuân Đức
                                    </button>
                                    <div className="dropdown-menu">
                                        <button className="btn btn-danger w-100">
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className={cx('info-role')}>Admin</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
