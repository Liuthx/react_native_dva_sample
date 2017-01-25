const NavBar = (props) => {

    const { title, navigator, onNavBack, titleView, rightView, barTintStyle } = props;


    let backBtn;
    if ( navigator && (navigator.getCurrentRoutes().length > 1 )) {
        backBtn = (
            <TouchableOpacity
                style={{ width:24, height:24}}
                onPress={ onNavBack || (()=>{navigator.pop()})}>
                <Image
                    source={require('../images/icon_nav_back@2x.png')}
                />
            </TouchableOpacity>
        );
    }

    return (
        <View style={{height:64, width:kScreenW, ...barTintStyle}}>
            <View style={{marginTop:20, flex:1, flexDirection:'row', alignItems:'center',}}>
                <View style={{position:'absolute', width:kScreenW, height:44, left:0, top:0, justifyContent:'center',
                              paddingLeft:12}}
                      pointerEvents="box-none">
                    {backBtn}
                </View>
                <View style={{position:'absolute', width:kScreenW, height:44, left:0, top:0, justifyContent:'center',
                              alignItems:'center'}}
                      pointerEvents="box-none">
                    <Text style={{fontSize:18}}>{ title || '' }</Text>
                </View>
                <View style={{position:'absolute', width:kScreenW, height:44, left:0, top:0, justifyContent:'center',
                              alignItems:'center'}}
                      pointerEvents="box-none">
                    {titleView}
                </View>
                <View style={{position:'absolute', width:kScreenW, height:44, left:0, top:0, justifyContent:'center',
                              alignItems:'flex-end', paddingRight:12}}
                      pointerEvents="box-none">
                    {rightView}
                </View>
            </View>
            <View style={{position:'absolute', left:0, right:0, bottom:0, height:kOnePixel, backgroundColor:'#eee'}}/>
        </View>
    );
};

NavBar.propTypes = {
    navigator: PropTypes.object.isRequired,
    title: PropTypes.string,
    onNavBack: PropTypes.func,
    titleView: PropTypes.element,
    rightView: PropTypes.element,
    barTintStyle: PropTypes.object
};

export default NavBar;