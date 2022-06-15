import axios from 'axios'

import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './BlockForm.module.scss'

const cx = classNames.bind(styles)

const BlockForm = ({ toggleDetail, user, indexButton }) => {
    const [reason, setReason] = useState()

    const handleCloseModal = () => {
        toggleDetail(false)
    }

    const handleBlock = async (user, e) => {
        e.preventDefault()
        let role =
            indexButton === 0 ? 'cbql' : indexButton === 1 ? 'cnct' : 'nnn'
        let id =
            indexButton === 0
                ? user.maCanBo
                : indexButton === 1
                ? user.maCNCT
                : user.maHoChieu
        const data = { trangThaiTaiKhoan: 'Bị khóa', reason: reason }
        const resp = await axios.put(
            `http://127.0.0.1:3000/${role}/${id}`,
            data
        )
        console.log(resp)

        toggleDetail(false)
    }

    const handleUnblock = async (user, e) => {
        e.preventDefault()
        const data = { trangThaiTaiKhoan: 'Đang hoạt động', reason: null }
        let role =
            indexButton === 0 ? 'cbql' : indexButton === 1 ? 'cnct' : 'nnn'
        let id =
            indexButton === 0
                ? user.maCanBo
                : indexButton === 1
                ? user.maCNCT
                : user.maHoChieu
        const resp = await axios.put(
            `http://127.0.0.1:3000/${role}/${id}`,
            data
        )
        console.log(resp)

        toggleDetail(false)
    }

    return (
        <form className={cx('content')}>
            <div className="container">
                <div className="row">
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Họ tên</label>
                        <input
                            disabled
                            className="form-control"
                            type="text"
                            value={user && user.hoTen}
                        />
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Tài khoản</label>
                        <input
                            disabled
                            className="form-control"
                            type="text"
                            value={user && user.tenTaiKhoan}
                        />
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Trạng thái</label>
                        <input
                            style={
                                user.trangThaiTaiKhoan === 'Đang hoạt động'
                                    ? { color: 'green' }
                                    : { color: 'red' }
                            }
                            disabled
                            className="form-control"
                            type="text"
                            value={user && user.trangThaiTaiKhoan}
                        />
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Lý do</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Lý do"
                            disabled={
                                user.trangThaiTaiKhoan !== 'Đang hoạt động'
                            }
                            value={user.reason || reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('content-btns')}>
                {user.trangThaiTaiKhoan === 'Đang hoạt động' ? (
                    <button
                        onClick={(e) => {
                            handleBlock(user, e)
                        }}
                        className={cx('content-btn', 'content-btn-save')}
                    >
                        Khóa
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            handleUnblock(user, e)
                        }}
                        className={cx('content-btn', 'content-btn-save')}
                    >
                        Mở khóa
                    </button>
                )}
                <button
                    className={cx('content-btn', 'content-btn-close')}
                    onClick={() => {
                        handleCloseModal()
                    }}
                >
                    Hủy
                </button>
            </div>
        </form>
    )
}

export default BlockForm
