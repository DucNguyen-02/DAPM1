import React, { useEffect } from 'react'
import Modal from '../Modal/Modal'
import classNames from 'classnames/bind'
import styles from './RegisterModal.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
    fullname: yup.string().required('Vui lòng nhập vào trường này'),
    dob: yup.string().required('Vui lòng nhập vào trường này'),
    username: yup.string().required('Vui lòng nhập vào trường này'),
    gender: yup.string().required('Vui lòng nhập vào trường này'),
    password: yup.string().required('Vui lòng nhập vào trường này'),
    phone: yup
        .string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'invalid Phone number'),
    email: yup.string().required('Vui lòng nhập vào trường này'),
    CMND: yup.string().required('Vui lòng nhập vào trường này'),
    address: yup.string().required('Vui lòng nhập vào trường này'),
    province: yup.string().required('Vui lòng nhập vào trường này'),
    district: yup.string().required('Vui lòng nhập vào trường này'),
    wards: yup.string().required('Vui lòng nhập vào trường này'),
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
    const [province, setProvince] = useState()
    const [idProvince, setIdProvince] = useState()
    const [district, setDistrict] = useState()
    const [idDistrict, setIdDistrict] = useState()
    const [wards, setWards] = useState()
    const [currentProvince, setCurrentProvince] = useState()
    const [currentDistrict, setCurrentDistrict] = useState()
    const [currentWards, setCurrentWards] = useState()

    const fetchProvince = async () => {
        const resp = await axios.get('http://localhost:3000/tinhthanh')
        setProvince(resp.data)
    }

    useEffect(() => {
        fetchProvince()
    }, [])

    const handleProvince = (e) => {
        setIdProvince(e.target.value)
        setCurrentProvince(e.target.value)
    }

    const fetchDistrict = async () => {
        const resp = await axios.get(
            `http://localhost:3000/quanhuyen/${idProvince}`
        )
        setDistrict(resp.data)
    }

    useEffect(() => {
        fetchDistrict()
    }, [idProvince])

    const fetchWards = async () => {
        const resp = await axios.get(
            `http://localhost:3000/phuongxa/${idDistrict}`
        )
        setWards(resp.data)
    }

    useEffect(() => {
        fetchWards()
    }, [idDistrict])

    const handleDistrict = (e) => {
        setIdDistrict(e.target.value)
        setCurrentDistrict(e.target.value)
    }

    const handleWards = (e) => {
        setCurrentWards(e.target.value)
    }

    const handleCancelForm = () => {
        reset()
        toggleModal(false)
    }

    const generateID = () => {
        const rand = Math.floor(Math.random() * 10000)
        const lengthOfRandNumber = rand.toString().split('').length
        switch (lengthOfRandNumber) {
            case 1:
                return `CBQL000${rand}`
            case 2:
                return `CBQL00${rand}`
            case 3:
                return `CBQL0${rand}`
            case 4:
                return `CBQL${rand}`
            default:
                return
        }
    }

    const onSubmit = async (data) => {
        await axios
            .post('http://127.0.0.1:3000/cbql', {
                maCanBo: generateID(),
                hoTen: data.fullname,
                ngaySinh: data.dob,
                gioiTinh: data.gender,
                soDienThoai: data.phone,
                email: data.email,
                CMND: data.CMND,
                maPhuongXa: currentWards,
                diaChi: data.address,
                tenTaiKhoan: data.username,
                matKhau: data.password,
                trangThaiTaiKhoan: 'Đang hoạt động',
            })
            .then(function (response) {
                handleCancelForm()
            })
            .catch(function (error) {
                console.log(error)
            })
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
                                    type="date"
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
                                <select
                                    className="form-select form-select-lg"
                                    name="gender"
                                    {...register('gender')}
                                >
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </select>

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
                            <div className="gender col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Tỉnh thành:{' '}
                                </label>
                                <select
                                    className="form-select form-select-lg"
                                    {...register('province')}
                                    onChange={(e) => handleProvince(e)}
                                    value={currentProvince}
                                >
                                    <option value="">---</option>
                                    {province?.map((item) => {
                                        return (
                                            <option value={item.maTinhThanh}>
                                                {item.tenTinhThanh}
                                            </option>
                                        )
                                    })}
                                </select>
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.province?.message}
                                    </h6>
                                }
                            </div>
                            <div className="gender col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Quận Huyện:{' '}
                                </label>
                                <select
                                    className="form-select form-select-lg"
                                    {...register('district')}
                                    onChange={(e) => handleDistrict(e)}
                                    value={currentDistrict}
                                >
                                    {district?.map((item) => {
                                        return (
                                            <option value={item.maQuanHuyen}>
                                                {item.tenQuanHuyen}
                                            </option>
                                        )
                                    })}
                                </select>
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.district?.message}
                                    </h6>
                                }
                            </div>
                            <div className="gender col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Phường xã:{' '}
                                </label>
                                <select
                                    className="form-select form-select-lg"
                                    {...register('wards')}
                                    onChange={(e) => handleWards(e)}
                                    value={currentWards}
                                >
                                    {wards?.map((item) => {
                                        return (
                                            <option value={item.maPhuongXa}>
                                                {item.tenPhuongXa}
                                            </option>
                                        )
                                    })}
                                </select>
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.wards?.message}
                                    </h6>
                                }
                            </div>
                            <div className="CMND col-md-6">
                                <label
                                    className={cx('form-label', 'row-label')}
                                >
                                    Địa chỉ:{' '}
                                </label>
                                <input
                                    className="form-control"
                                    name="address"
                                    {...register('address')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.address?.message}
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
