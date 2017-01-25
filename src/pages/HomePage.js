/**
 * Created by k on 2017/1/25.
 */
import { connect } from 'dva/mobile';
import NavBar from '../components/BaseComponents';

import TestPage from './TestPage';

class HomePage extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <NavBar navigator={this.props.navigator} title="首页"/>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{marginBottom:20}}>导航测试</Text>
                    <Text
                        style={{marginBottom:20}}
                        onPress={()=>{
                        this.props.navigator.push({
                            component: TestPage,
                            passProps: {
                                text: '默认动画'
                            }
                        })
                    }}>
                        默认动画
                    </Text>
                    <Text
                        style={{marginBottom:20}}
                        onPress={()=>{
                        this.props.navigator.push({
                            component: TestPage,
                            passProps: {
                                text: '自定义动画',

                            },
                            sceneConfig: Navigator.SceneConfigs.FadeAndroid
                        })
                    }}>
                        自定义动画
                    </Text>
                </View>
            </View>
        );
    }



    /*
    * 以下为额外添加的事件
    * */

    onDidFocus() {
        // 此页面显示之后的事件
    }

    onBackAndroid() {
        // 在当前页面下安卓物理返回键的事件
        // 该方法在不指定返回true的情况下会退出app
    }
}
// 由于在处理Nav的onDidFocus事件中使用了组件的实例化对象, 需要配置connect的第四个参数
export default connect(({home})=>({home}), (dispatch)=>({dispatch}), Object.assign, {withRef: true})(HomePage);