import getDataFromLocalStorage from './getDataFromLocalStorage'

const addDataToLocalStorate = (data) => {
    if (getDataFromLocalStorage()) return

    localStorage.setItem('isLogin', JSON.stringify(true))
}

export default addDataToLocalStorate
