import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './UpdateAccUser.module.scss'
import { PERSON } from '../../assets/images'
import RegisterModal from '../../Components/RegisterModal/RegisterModal'
import useToggle from '../../hooks/useTogge'

const cx = classNames.bind(styles)

const UpdateAccUser = () => {
    const [isToggleModal, setIsToggleModal] = useState(false)

    const handleToggleModal = () => {
        setIsToggleModal(true)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src={PERSON} alt="" />
                <h4 className={cx('title')}>Cập nhật tài khoản người dùng</h4>
            </div>
            <div className={cx('select')}>
                <h4 className={cx('select-title')}>Danh sách người dùng</h4>
                <div className={cx('select-buttons')}>
                    <button className={cx('select-btn', 'select-button')}>
                        Người nước ngoài
                    </button>
                    <button className={cx('select-btn', 'select-button')}>
                        Chủ nơi cư trú
                    </button>
                    <button className={cx('select-btn', 'select-button')}>
                        Cán bộ
                    </button>
                </div>
                <button
                    onClick={handleToggleModal}
                    className={cx('select-btn', 'select-addnew')}
                >
                    Thêm mới
                </button>
            </div>
            {isToggleModal && <RegisterModal toggleModal={setIsToggleModal} />}
        </div>
    )
}

export default UpdateAccUser
