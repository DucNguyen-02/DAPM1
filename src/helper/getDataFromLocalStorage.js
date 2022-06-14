const getDataFromLocalStorage = () => {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'))
    return isLogin
}

export default getDataFromLocalStorage
