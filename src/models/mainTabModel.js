/**
 * Created by k on 2017/1/25.
 */
export default {
    namespace: 'tab',

    state: {
        tabSelectedIndex: 0
    },

    reducers: {
        onTabChangeIndex(state, { payload }) {
            return {...state, tabSelectedIndex:payload.tabChangeIndex};
        },
    },

    effects: {

        *tabChangeIndex({payload}, {put, call, select}) {
            yield put({
                type:'onTabChangeIndex',
                payload: payload
            });

            // 第一次切换时 component还未实例化
            if (_tabItems[payload.tabChangeIndex]) {
                _tabItems[payload.tabChangeIndex].onDidFocus &&
                _tabItems[payload.tabChangeIndex].onDidFocus();
            }
            else {
                setTimeout(()=>{
                    _tabItems[payload.tabChangeIndex] &&
                    _tabItems[payload.tabChangeIndex].onDidFocus &&
                    _tabItems[payload.tabChangeIndex].onDidFocus();
                },0);
            }

        }

    },

    subscriptions: {

    }

};
