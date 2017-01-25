/**
 * Created by k on 2017/1/25.
 */
import { connect } from 'dva/mobile';
import NavBar from '../components/BaseComponents';
class UserPage extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <NavBar navigator={this.props.navigator} title="我的"/>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text>用户页</Text>
                </View>
            </View>
        );
    }

}

export default connect(({home})=>({home}), (dispatch)=>({dispatch}), Object.assign, {withRef: true})(UserPage);