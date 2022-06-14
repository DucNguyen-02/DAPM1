import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import BlockForm from '../BlockForm/BlockForm'
import DetailForm from '../DetailForm/DetailForm'
import Modal from '../Modal/Modal'
import styles from './UserDetailModal.module.scss'

const cx = classNames.bind(styles)

const UserDetailModal = ({ toggleDetail, userIdDetail }) => {
    const [isDetail, setIsDetail] = useState(true)
    const [user, setUser] = useState()

    const fetchUserByID = async () => {
        const resp = await fetch(`http://localhost:3000/cbql/${userIdDetail}`)
        const data = await resp.json()
        setUser(data)
    }

    useEffect(() => {
        fetchUserByID()
    }, [userIdDetail])

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
                                isDetail ? 'header-title-item-active' : ''
                            )}
                            onClick={() => {
                                changeForm()
                            }}
                        >
                            Tài khoản người dùng
                        </button>
                        <button
                            className={cx(
                                'header-title-item',
                                isDetail ? '' : 'header-title-item-active'
                            )}
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
                        <DetailForm toggleDetail={toggleDetail} user={user} />
                    ) : (
                        <BlockForm toggleDetail={toggleDetail} user={user} />
                    )}
                </div>
            </div>
        </Modal>
    )
}

export default UserDetailModal
