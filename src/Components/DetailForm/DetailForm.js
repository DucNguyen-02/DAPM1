import React, { useState } from 'react'
import styles from './DetailForm.module.scss'
import classNames from 'classnames/bind'
import Modal from '../Modal/Modal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
    fullname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    status: yup.string().required(),
})

const DetailForm = ({ toggleDetail }) => {
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
                            {...register('fullname')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.fullname?.message}
                            </h6>
                        }
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Tài khoản</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('username')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.username?.message}
                            </h6>
                        }
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Mật khẩu</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('password')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.password?.message}
                            </h6>
                        }
                    </div>
                    <div className={cx('content-wrapper')}>
                        <label className="form-label">Trạng thái</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('status')}
                        />
                        {
                            <h6 className="text-danger form-text text-capitalize">
                                {errors.status?.message}
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

export default DetailForm
