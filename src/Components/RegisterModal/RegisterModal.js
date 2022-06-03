import React from 'react'
import Modal from '../Modal/Modal'
import classNames from 'classnames/bind'
import styles from './RegisterModal.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useForm } from 'react-hook-form'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
    fullname: yup.string().required(),
    dob: yup.string().required(),
    username: yup.string().required(),
    gender: yup.string().required(),
    password: yup.string().required(),
    phone: yup
        .string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'invalid Phone number'),
    email: yup.string().required(),
    CMND: yup.string().required(),
    workPlace: yup.string().required(),
})

const RegisterModal = ({ toggleModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleCancelForm = () => {
        reset()
        toggleModal(false)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Modal>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header-title')}>Cấp tài khoản</div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={cx('content')}
                >
                    <div className="container">
                        <div className="row">
                            <div className="fullname col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Họ tên:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    {...register('fullname')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.fullname?.message}
                                    </h6>
                                }
                            </div>

                            <div className="dob col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Ngày sinh:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    {...register('dob')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.dob?.message}
                                    </h6>
                                }
                            </div>

                            <div className="username col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Tài khoản:{' '}
                                </label>
                                <input
                                    name="username"
                                    {...register('username')}
                                    className="form-control"
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.username?.message}
                                    </h6>
                                }
                            </div>

                            <div className="phone col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Số điện thoại:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="phone"
                                    {...register('phone')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.phone?.message}
                                    </h6>
                                }
                            </div>

                            <div className="password col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Mật khẩu:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    {...register('password')}
                                />
                                {errors.password && (
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.phone.type === 'required'
                                            ? 'This field is required'
                                            : errors.password.message}
                                    </h6>
                                )}
                            </div>

                            <div className="gender col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Giới tính:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="gender"
                                    {...register('gender')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.gender?.message}
                                    </h6>
                                }
                            </div>
                            <div className="email col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Email:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    {...register('email')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.email?.message}
                                    </h6>
                                }
                            </div>
                            <div className="CMND col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    CMND/CCCD:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="CMND"
                                    {...register('CMND')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.CMND?.message}
                                    </h6>
                                }
                            </div>
                            <div className="workPlace col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Nơi làm việc:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="workPlace"
                                    {...register('workPlace')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.workPlace?.message}
                                    </h6>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-btns')}>
                        <button
                            className={cx('content-btn', 'content-btn-save')}
                        >
                            Lưu
                        </button>
                        <button
                            onClick={() => {
                                handleCancelForm()
                            }}
                            className={cx('content-btn', 'content-btn-close')}
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default RegisterModal
