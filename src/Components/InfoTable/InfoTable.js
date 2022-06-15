import classNames from 'classnames/bind'
import { useCallback, useState } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import UserDetailModal from '../UserDetailModal/UserDetailModal'
import styles from './InfoTable.module.scss'

const cx = classNames.bind(styles)

const renderDataTable = (cell, header) => {
    switch (header) {
        case 'CMND':
        case 'nnn':
        case 'cnct':
        case 'soCCCD':
        case 'tenTaiKhoan':
        case 'hoTen':
        case 'maHoChieu':
        case 'tenCSLT':
        case 'tenQuocTich':
            return <div dangerouslySetInnerHTML={{ __html: cell.value }} />
        case 'trangThaiTaiKhoan':
            return (
                <div
                    style={
                        cell.value === 'Đang hoạt động'
                            ? { color: '#03a400' }
                            : { color: 'red' }
                    }
                    dangerouslySetInnerHTML={{ __html: cell.value }}
                />
            )
        default:
            return <span>{cell.render('Cell')}</span>
    }
}

const InfoTable = ({ columns, data, isDetail, setIsDetail, indexButton }) => {
    const [userIdDetail, setUserIdDetail] = useState()
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data })
    const memoizedRenderDataTable = useCallback(renderDataTable, [
        columns,
        data,
    ])

    const handleRowItemClick = (original) => {
        if (indexButton === 0) {
            setUserIdDetail(original.maCanBo)
        } else if (indexButton === 1) {
            setUserIdDetail(original.maCNCT)
        } else {
            setUserIdDetail(original.maHoChieu)
        }
        setIsDetail(true)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <table {...getTableProps()} className={cx('table')}>
                    <thead
                        className={cx(
                            'table-head',
                            'text-uppercase',
                            ' text-center',
                            'font-bold'
                        )}
                    >
                        {headerGroups.map((headerGroup, index) => (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}
                                key={index}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        key={column.id}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        {...getTableBodyProps()}
                        className={cx('table-body')}
                    >
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    key={row.id}
                                    className="table-row"
                                    onClick={() =>
                                        handleRowItemClick(row.original)
                                    }
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                key={cell.column.id}
                                                className="table-data text-center p-0"
                                            >
                                                <div
                                                    className={cx(
                                                        'table-data-container',
                                                        ' d-flex',
                                                        ' align-items-center',
                                                        ' justify-content-center',
                                                        ' w-100',
                                                        ' h-100'
                                                    )}
                                                >
                                                    {memoizedRenderDataTable(
                                                        cell,
                                                        cell.column.id
                                                    )}
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {isDetail && (
                <UserDetailModal
                    toggleDetail={setIsDetail}
                    userIdDetail={userIdDetail}
                    indexButton={indexButton}
                />
            )}
        </div>
    )
}

export default InfoTable
