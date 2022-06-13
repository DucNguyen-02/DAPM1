import axios from 'axios'
import classNames from 'classnames/bind'
import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import { PERSON } from '../../assets/images'
import InfoTable from '../../Components/InfoTable/InfoTable'
import RegisterModal from '../../Components/RegisterModal/RegisterModal'
import styles from './UpdateAccUser.module.scss'

const cx = classNames.bind(styles)

const UpdateAccUser = () => {
    const [isToggleModal, setIsToggleModal] = useState(false)
    const [indexButton, setIndexButton] = useState(0)
    const [listUser, setListUser] = useState([])

    const fetchUser = async () => {
        let param = ''
        if (indexButton === 0) {
            param = 'cbql'
        } else if (indexButton === 1) {
            param = 'cnct'
        } else if (indexButton === 2) {
            param = 'nnn'
        }

        const resp = await fetch(`http://127.0.0.1:3000/${param}`)
        const data = await resp.json()
        setListUser(data)
    }

    useEffect(() => {
        fetchUser()
    }, [indexButton])

    const columns = React.useMemo(
        () => [
            {
                Header: 'CMND/CCCD',
                accessor: 'CMND', // accessor is the "key" in the data
            },
            {
                Header: 'Tài khoản',
                accessor: 'tenTaiKhoan',
            },
            {
                Header: 'Họ và tên',
                accessor: 'hoTen',
            },
            {
                Header: 'Tình trạng',
                accessor: 'trangThaiTaiKhoan',
            },
        ],
        []
    )

    const buttons = [
        {
            id: 1,
            title: 'Cán bộ',
        },
        {
            id: 2,
            title: 'Chủ nơi cư trú',
        },
        {
            id: 3,
            title: 'Người nước ngoài',
        },
    ]

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
                    {buttons.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setIndexButton(index)
                                }}
                                className={cx(
                                    'select-btn',
                                    'select-button',
                                    index === indexButton ? 'active' : ''
                                )}
                            >
                                {item.title}
                            </button>
                        )
                    })}
                </div>

                <button
                    onClick={handleToggleModal}
                    className={cx('select-btn', 'select-addnew')}
                >
                    Thêm mới
                </button>
            </div>
            <div className={cx('content')}>
                <InfoTable columns={columns} data={listUser} />
            </div>
            {isToggleModal && <RegisterModal toggleModal={setIsToggleModal} />}
        </div>
    )
}

export default UpdateAccUser
