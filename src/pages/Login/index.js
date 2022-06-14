import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { LOGO } from '../../assets/images'
import addDataToLocalStorage from '../../helper/addDataToLocalStorage'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

const Login = () => {
    const [isSuccess, setIsSuccess] = useState(true)
    const navigation = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        if (data.username === 'admin' && data.password === 'admin') {
            addDataToLocalStorage(data)
            navigation('/', { replace: true })
        } else {
            reset()
            setIsSuccess(false)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={LOGO} alt="" />
                <h4 className={cx('title')}>Quản lí xuất nhập cảnh</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row">
                            <div className={cx('form-wrapper')}>
                                <label className={cx('form-label')} htmlFor="">
                                    Tên đăng nhập
                                </label>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    {...register('username')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.username?.message}
                                    </h6>
                                }
                            </div>
                            <div className={cx('form-wrapper')}>
                                <label className={cx('form-label')} htmlFor="">
                                    Mật khẩu
                                </label>
                                <input
                                    className={cx('form-control')}
                                    type="password"
                                    {...register('password')}
                                />
                                {
                                    <h6 className="text-danger form-text text-capitalize">
                                        {errors.password?.message}
                                    </h6>
                                }
                            </div>
                        </div>
                        {isSuccess ? (
                            ''
                        ) : (
                            <h3 className="text-danger text-center">
                                Đăng nhập thất bại
                            </h3>
                        )}
                        <button className={cx('login-btn')}>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
