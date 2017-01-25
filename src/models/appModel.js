/**
 * Created by k on 2017/1/25.
 */

export default {
    namespace:'app',

    state: {
        // 该model应负责管理: 主题颜色, 夜间模式, 用户登录状态, 当前网络状态, 配置项 等
        themeColor: '#E22',
        themeMode: 'normal',
        isLogin: false,
        netStatus: 'WIFI',
    },

    reducers: {
        changeThemeColor(state, { payload }) {
            return {...state, ...payload};
        }
    },

    effects: {

    },

    subscriptions: {

    }
};
