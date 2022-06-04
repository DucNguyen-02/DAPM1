import classNames from 'classnames/bind'
import React, { useMemo, useState } from 'react'
import { PERSON } from '../../assets/images'
import InfoTable from '../../Components/InfoTable/InfoTable'
import RegisterModal from '../../Components/RegisterModal/RegisterModal'
import styles from './UpdateAccUser.module.scss'

const cx = classNames.bind(styles)

const UpdateAccUser = () => {
    const [isToggleModal, setIsToggleModal] = useState(false)
    const [indexButton, setIndexButton] = useState(0)

    const data = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
            },
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'World',
                col4: 'World',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'STT',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Tài khoản',
                accessor: 'col2',
            },
            {
                Header: 'Họ và tên',
                accessor: 'col3',
            },
            {
                Header: 'Tình trạng',
                accessor: 'col4',
            },
        ],
        []
    )

    const buttons = [
        {
            id: 1,
            title: 'Người nước ngoài',
        },
        {
            id: 2,
            title: 'Chủ nơi cư trú',
        },
        {
            id: 3,
            title: 'Cán bộ',
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
                    {/* <button className={cx('select-btn', 'select-button')}>
                        Người nước ngoài
                    </button>
                    <button className={cx('select-btn', 'select-button')}>
                        Chủ nơi cư trú
                    </button>
                    <button
                        className={cx('select-btn', 'active', 'select-button')}
                    >
                        Cán bộ
                    </button> */}
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
                <InfoTable columns={columns} data={data} />
            </div>
            {isToggleModal && <RegisterModal toggleModal={setIsToggleModal} />}
        </div>
    )
}

export default UpdateAccUser
