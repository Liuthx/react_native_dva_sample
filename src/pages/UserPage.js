/**
 * Created by k on 2017/1/25.
 */
import { connect } from 'dva/mobile';
import NavBar from '../components/BaseComponents';
import { InteractionManager } from 'react-native';
import EmptyPage from './EmptyPage';
import TestPage from './TestPage';
class UserPage extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <NavBar navigator={this.props.navigator} title="我的"/>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{marginBottom:50}}>用户页</Text>
                    <Text onPress={this.replace}>测试replace</Text>
                </View>
            </View>
        );
    }

    replace = () => {
        (async ()=>{
            this.props.navigator.push({
                component: EmptyPage,
                sceneConfig: Navigator.SceneConfigs.FadeAndroid
            });
            await InteractionManager.runAfterInteractions(()=>{});
            this.props.navigator.replacePrevious({
                component: TestPage,
            });
            this.props.navigator.pop();
        })();
    };

}

export default connect(({home})=>({home}), (dispatch)=>({dispatch}), Object.assign, {withRef: true})(UserPage);