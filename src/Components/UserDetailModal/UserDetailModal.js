import React, { useState } from 'react'
import styles from './UserDetailModal.module.scss'
import classNames from 'classnames/bind'
import Modal from '../Modal/Modal'
import DetailForm from '../DetailForm/DetailForm'
import BlockForm from '../BlockForm/BlockForm'

const cx = classNames.bind(styles)

const UserDetailModal = ({ toggleDetail }) => {
    const [isDetail, setIsDetail] = useState(true)

    const changeForm = () => {
        setIsDetail(!isDetail)
    }

    return (
        <Modal>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header-title')}>
                        <button
                            className={cx(
                                'header-title-item',
                                'header-title-item-active'
                            )}
                            onClick={() => {
                                changeForm()
                            }}
                        >
                            Tài khoản người dùng
                        </button>
                        <button
                            className={cx('header-title-item')}
                            onClick={() => {
                                changeForm()
                            }}
                        >
                            {' '}
                            Khóa tài khoản
                        </button>
                    </div>
                </div>
                <div className="content-wrapper">
                    {isDetail ? (
                        <DetailForm toggleDetail={toggleDetail} />
                    ) : (
                        <BlockForm toggleDetail={toggleDetail} />
                    )}
                </div>
            </div>
        </Modal>
    )
}

export default UserDetailModal
