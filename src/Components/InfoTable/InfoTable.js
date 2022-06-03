import React from 'react'
import styles from './InfoTable.module.scss'
import classNames from 'classnames/bind'
import { useTable } from 'react-table/dist/react-table.development'

const cx = classNames.bind(styles)

const InfoTable = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data })

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
                                                    {cell.render('Cell')}
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
        </div>
    )
}

export default InfoTable