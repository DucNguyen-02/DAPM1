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
                        <h4 className={cx('info-name')}>Nguyen Xuan Duc</h4>
                        <h6 className={cx('info-role')}>Admin</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
