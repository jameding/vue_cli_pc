const getDefaultState = () => {
    return {
        scrollSwitch: false, //是否开启页面滚动监听，默认关闭
        scrollTop: 0, //页面的scrollTop
    }
}

const state = getDefaultState()

const mutations = {
    //监听页面滚动
    linsenerScrollTop(state) {
        window.onscroll = () => {
            state.scrollTop = document.documentElement.scrollTop
            // window.console.log(state.scrollTop)
        }
    },
}
const getters = {}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
