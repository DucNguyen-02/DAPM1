import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './BlockForm.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
    fullnameBlock: yup.string().required(),
    usernameBlock: yup.string().required(),
    reason: yup.string().required(),
})

const BlockForm = ({ toggleDetail }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleCloseModal = () => {
        toggleDetail(false)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('content')}>
            <div className="container">
                <div className="row">
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Họ tên</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('fullnameBlock')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.fullnameBlock?.message}
                            </h6>
                        }
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Tài khoản</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('usernameBlock')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.usernameBlock?.message}
                            </h6>
                        }
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Lý do</label>
                        <select
                            {...register('reason')}
                            className="form-control"
                            name="reason"
                            id="reason"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.reason?.message}
                            </h6>
                        }
                    </div>
                </div>
            </div>
            <div className={cx('content-btns')}>
                <button className={cx('content-btn', 'content-btn-save')}>
                    Lưu
                </button>
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
