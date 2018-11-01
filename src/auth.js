export default {
    // 注意：不要手贱在对象直接量中些箭头函数，容易引起this的指向问题
    isLogin: localStorage.getItem('admin') ? true : false,
    login (cb) {
        setTimeout(cb, 500)
    },
    loginout (cb) {
        setTimeout(cb, 300)        
    } 
}