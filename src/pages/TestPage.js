/**
 * Created by k on 2017/1/25.
 */
import { connect } from 'dva/mobile';
import NavBar from '../components/BaseComponents';

class TestPage extends Component {

    // 在Nav中增加的 关闭边角返回手势的配置
    static defaultProps = {
        forbidEdgeBack: false
    };

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <NavBar navigator={this.props.navigator} title="测试页面"/>
                <View>
                    <Text>{this.props.text}</Text>
                </View>
            </View>
        );
    }

    onDidFocus() {
        log('test onDidFocus');
    }

    onBackAndroid() {
        log('test android back');
        return true;    // true 不退出  false退出app
    }
}

// export default TestPage;
export default connect(({test})=>({test}), (dispatch)=>({dispatch}), Object.assign, {withRef: true})(TestPage);