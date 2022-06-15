import React, { useState } from 'react'
import styles from './DetailForm.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const DetailForm = ({ toggleDetail, user }) => {
    const handleCloseModal = () => {
        toggleDetail(false)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className="row justify-content-center">
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Họ tên:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.hoTen : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Ngày sinh:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.ngaySinh : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Tài khoản:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.tenTaiKhoan : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Số điện thoại:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.soDienThoai : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Mật khẩu:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.matKhau : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Giới tính:</div>
                            <span className={cx('content-detail')}>
                                {user && user.gioiTinh === '1' ? 'Nam' : 'Nữ'}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>Email:</div>
                            <span className={cx('content-detail')}>
                                {user ? user.email : ''}
                            </span>
                        </div>
                        <div className={cx('content-wrapper', 'col-xl-5')}>
                            <div className={cx('label')}>CMND/CCCD:</div>
                            <span className={cx('content-detail')}>
                                {user
                                    ? user.CMND || user.maHoChieu || user.soCCCD
                                    : ''}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('content-btns', 'mt-5')}>
                    <button
                        className={cx('content-btn', 'content-btn-save')}
                        onClick={() => {
                            handleCloseModal()
                        }}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailForm
