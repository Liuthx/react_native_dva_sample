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
            <View style={{flex:1, backgroundColor:'white', }}>
                <NavBar navigator={this.props.navigator} title="测试页"/>
                <View>
                    <Text>我是测试页</Text>
                    <Text>我是测试页</Text>
                    <Text>我是测试页</Text>
                </View>
            </View>
        );
    }

}

// export default TestPage;
export default connect(({test})=>({test}), (dispatch)=>({dispatch}), Object.assign, {withRef: true})(TestPage);