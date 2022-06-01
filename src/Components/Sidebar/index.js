import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { BACKGROUND_SIDEBAR, LOGO, PERSON } from '../../assets/images'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('backgroundimg')}
                src={BACKGROUND_SIDEBAR}
                alt=""
            />
            <div className={cx('content')}>
                <Link to="/" className={cx('content-logo')}>
                    <img src={LOGO} alt="" />
                </Link>
                <div className={cx('content-features')}>
                    <Link to="/account" className={cx('content-row')}>
                        <img src={PERSON} alt="" />
                        <div className={cx('content-title')}>
                            Cập nhật tài khoản người dùng
                        </div>
                    </Link>
                    <Link to="/searchinfo" className={cx('content-row')}>
                        <img src={PERSON} alt="" />
                        <div className={cx('content-title')}>
                            Tra cứu thông tin
                        </div>
                    </Link>
                    <Link to="/statistic" className={cx('content-row')}>
                        <img src={PERSON} alt="" />
                        <div className={cx('content-title')}>
                            Thống kê - Báo cáo
                        </div>
                    </Link>
                    <Link to="/changepassword" className={cx('content-row')}>
                        <img src={PERSON} alt="" />
                        <div className={cx('content-title')}>Đổi mật khẩu</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
