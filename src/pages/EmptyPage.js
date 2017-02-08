import { connect } from 'dva/mobile';
import NavBar from '../components/BaseComponents';

export default class EmptyPage extends Component {

    static defaultProps = {
        forbidEdgeBack: false
    };

    render() {
        return (
            <View style={{flex:1, backgroundColor:'rgba(0,0,0,0)'}}>
            </View>
        );
    }

    onBackAndroid() {
        return true;    // true 不退出  false退出app
    }
}
