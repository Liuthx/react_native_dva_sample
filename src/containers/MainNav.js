/**
 * Created by k on 2017/1/25.
 */
import { connect } from 'dva/mobile';
import MainTab from './MainTab';

class MainNav extends Component {

    // 注册安卓物理返回键监听
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', ()=>this.onBackAndroid());
    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor='rgba(0, 0 ,0, 0.1)'
                    translucent={true}
                />
                <Navigator
                    ref="navigator"
                    initialRoute={{ component: MainTab }}
                    configureScene={this.configureScene}
                    onDidFocus={this.onDidFocus}
                    renderScene={this.renderScene}
                />
            </View>
        );
    }

    // 此处处理每个页面单独的push方式及手势开启状态, 已兼容dva
    configureScene = (route) => {
        let component = route.component || {};
        component = component.WrappedComponent || component;
        if (component.defaultProps && component.defaultProps.forbidEdgeBack) {
            return {...(route.sceneConfig || Navigator.SceneConfigs.PushFromRight), gestures:{}};
        }
        return route.sceneConfig || Navigator.SceneConfigs.PushFromRight;
    };

    // 此处为route赋值sceneRef, 目的是能够调用页面各自的声明方法, 已兼容dva
    renderScene = (route, navigator) => {
        let RouteComponent = route.component;
        return (
            <RouteComponent
                { ...route.passProps }
                navigator={ navigator }
                ref={(component) => {
                    if (component) {
                        route.sceneRef = component.getWrappedInstance?component.getWrappedInstance():component;
                    }
                }}
            />
        );
    };

    // 处理页面各自的焦点事件, 对应子页面class中的onDidFocus方法, 已兼容dva
    onDidFocus = (route, renderScene) => {
        route.sceneRef.onDidFocus && route.sceneRef.onDidFocus();
    };

    // 安卓物理返回键的事件处理, 对应子页面class中的onBackAndroid方法, 已兼容dva
    onBackAndroid = () => {
        const navigator = this.refs.navigator;
        if (!navigator) return false;
        const routers = navigator.getCurrentRoutes();

        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            const handleBack = (top.sceneRef && top.sceneRef.onBackAndroid);
            if (handleBack) {
                return handleBack();
            }
            navigator.pop();
            return true;
        }

        if (this.lastBackPressed && (this.lastBackPressed + 2000 >= Date.now())) {
            return false;
        }
        this.lastBackPressed = Date.now();
        log('再按一次退出应用');
        return true;
    };
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(MainNav);
