import axios from 'axios'

import classNames from 'classnames/bind'
import styles from './BlockForm.module.scss'

const cx = classNames.bind(styles)

const BlockForm = ({ toggleDetail, user }) => {
    const handleCloseModal = () => {
        toggleDetail(false)
    }

    const handleBlock = async (id, e) => {
        e.preventDefault()
        const data = { trangThaiTaiKhoan: 'Bị khóa' }

        const resp = await axios.put(`http://127.0.0.1:3000/cbql/${id}`, data)
        console.log(resp)

        toggleDetail(false)
    }

    const handleUnblock = async (id, e) => {
        e.preventDefault()
        const data = { trangThaiTaiKhoan: 'Đang hoạt động' }

        const resp = await axios.put(`http://127.0.0.1:3000/cbql/${id}`, data)
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
                        <select
                            className="form-control"
                            name="reason"
                            id="reason"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={cx('content-btns')}>
                {user.trangThaiTaiKhoan === 'Đang hoạt động' ? (
                    <button
                        onClick={(e) => {
                            handleBlock(user.maCanBo, e)
                        }}
                        className={cx('content-btn', 'content-btn-save')}
                    >
                        Khóa
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            handleUnblock(user.maCanBo, e)
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
