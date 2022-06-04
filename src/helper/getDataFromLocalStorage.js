const getDataFromLocalStorage = () => {
    const isLogin = localStorage.getItem('isLogin')
    return isLogin
}

export default getDataFromLocalStorage
