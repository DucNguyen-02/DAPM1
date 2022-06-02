import React from 'react'
import classNames from 'classnames/bind'
import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

const Modal = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className="modal-children">{children}</div>
        </div>
    )
}

export default Modal
