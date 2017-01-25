/**
 * Created by k on 2017/1/25.
 */
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'dva/mobile';

import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';

class MainTab extends Component {

    render() {
        const { dispatch, tab: { tabSelectedIndex }, app: { themeColor } } = this.props;
        // 一个tab组件实例化数组, 放在store中不合适, 考虑放在全局
        !global._tabItems && (global._tabItems = []);

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={tabSelectedIndex===0}
                    title="首页"
                    selectedTitleStyle={{color: themeColor}}
                    renderIcon={() => <Image source={require('../images/icon_tabbar_home@3x.png')} />}
                    renderSelectedIcon={()=> <Image source={require('../images/icon_tabbar_home@3x.png')}
                                                    style={{tintColor:themeColor}}/>}
                    onPress={()=> {
                        tabSelectedIndex!==0 && dispatch({
                            type:'tab/tabChangeIndex',
                            payload: {
                                tabChangeIndex: 0
                            }
                        });
                    }}
                >
                    <HomePage navigator={this.props.navigator}
                              ref={(component)=>{
                                  component &&
                                  (_tabItems[0]=component.getWrappedInstance?component.getWrappedInstance():component)
                              }}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={tabSelectedIndex===1}
                    title="我的"
                    selectedTitleStyle={{color: themeColor}}
                    renderIcon={() => <Image source={require('../images/icon_tabbar_user@3x.png')} />}
                    renderSelectedIcon={()=> <Image source={require('../images/icon_tabbar_user@3x.png')}
                                                    style={{tintColor:themeColor}}/>}
                    onPress={()=> {
                        tabSelectedIndex!==1 && dispatch({
                            type:'tab/tabChangeIndex',
                            payload: {
                                tabChangeIndex:1
                            }
                        });
                    }}
                >
                    <UserPage navigator={this.props.navigator}
                              ref={(component)=>{
                                  component &&
                                  (_tabItems[1]=component.getWrappedInstance?component.getWrappedInstance():component)
                              }}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
    // 向下执行由Nav创建的onDidFocus事件
    onDidFocus = () => {
        const { tab: { tabSelectedIndex } } = this.props;

        _tabItems[tabSelectedIndex] &&
        _tabItems[tabSelectedIndex].onDidFocus &&
        _tabItems[tabSelectedIndex].onDidFocus();
    };

}

const mapStateToProps = ({ app, tab }) => {
    return { app, tab };
};

export default connect(mapStateToProps, (dispatch)=>({dispatch}), Object.assign, {withRef: true})(MainTab);
