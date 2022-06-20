import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './SearchInfo.module.scss'
import { PERSON, SEARCH } from '../../assets/images'
import axios from 'axios'
import { useEffect } from 'react'
import InfoTable from '../../Components/InfoTable/InfoTable'
import Title from '../../utils/Title'

const cx = classNames.bind(styles)

const SearchInfo = () => {
    const [indexButton, setIndexButton] = useState(0)
    const [search, setSearch] = useState()
    const [searchResult, setSearchResult] = useState([])
    const [isDetail, setIsDetail] = useState(false)

    const fetchSearch = async () => {
        let role =
            indexButton === 0 ? 'cbql' : indexButton === 1 ? 'cnct' : 'nnn'
        const resp = await axios.get(
            `http://127.0.0.1:3000/${role}/searching/${search}`
        )
        setSearchResult(resp.data)
    }

    useEffect(() => {
        fetchSearch()
    }, [search])

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

    const columns = [
        React.useMemo(
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
                    Header: 'Số điện thoại',
                    accessor: 'soDienThoai',
                },
                {
                    Header: 'Tình trạng',
                    accessor: 'trangThaiTaiKhoan',
                },
            ],
            []
        ),
        React.useMemo(
            () => [
                {
                    Header: 'CMND',
                    accessor: 'soCCCD', // accessor is the "key" in the data
                },
                {
                    Header: 'Tên CSLT',
                    accessor: 'tenCSLT',
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
        ),
        React.useMemo(
            () => [
                {
                    Header: 'Mã hộ chiếu',
                    accessor: 'maHoChieu', // accessor is the "key" in the data
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
                    Header: 'Quốc tịch',
                    accessor: 'tenQuocTich',
                },
                {
                    Header: 'Tình trạng',
                    accessor: 'trangThaiTaiKhoan',
                },
            ],
            []
        ),
    ]

    return (
        <div className={cx('wrapper')}>
            <Title title="Tìm kiếm người dùng" />
            <div className={cx('header')}>
                <img src={SEARCH} alt="" />
                <h4 className={cx('title')}>Tìm kiếm người dùng</h4>
            </div>
            <div className={cx('select')}>
                <h4 className={cx('select-title')}>Tìm kiếm</h4>
                <div className={cx('select-buttons')}>
                    {buttons.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setIndexButton(index)
                                    setSearch('')
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
                <input
                    type="text"
                    placeholder="Nhập thông tin tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={cx('select-title-input')}
                />
            </div>
            <div className={cx('content')}>
                {searchResult && (
                    <InfoTable
                        columns={columns[indexButton]}
                        data={searchResult}
                        isDetail={isDetail}
                        setIsDetail={setIsDetail}
                        indexButton={indexButton}
                    />
                )}
            </div>
        </div>
    )
}

export default SearchInfo
