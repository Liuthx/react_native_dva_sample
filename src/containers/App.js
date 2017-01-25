/**
 * Created by k on 2017/1/25.
 */
import '../constants';
import dva, { connect } from 'dva/mobile';
import MainNav from './MainNav';

const app = dva();

import appModel from '../models/appModel'
app.model(appModel);
import tabModel from '../models/mainTabModel';
app.model(tabModel);

const mapStateToProps = (state) => {
    return { state };
};

const App = connect(mapStateToProps)((props) => {
    return (
        <MainNav />
    );
});

app.router(() => <App />);

export default app.start();