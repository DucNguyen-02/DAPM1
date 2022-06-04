import React from 'react'
import styles from './BlankLayout.module.scss'
import classNames from 'classnames/bind'
import Modal from '../../Components/Modal/Modal'

const cx = classNames.bind(styles)

const BlankLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Modal>{children}</Modal>
            </div>
        </div>
    )
}

export default BlankLayout
