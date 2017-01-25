/**
 * Created by k on 2017/1/25.
 */
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    Animated,
    BackAndroid,
    Dimensions,
    PixelRatio,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    ListView,
    Alert,
    TextInput,
    Navigator,
    Linking,
    StyleSheet,
    StatusBar,
    RefreshControl,
    InteractionManager,
    ActivityIndicator,
    WebView,
} from 'react-native';

global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;

global.AppRegistry = AppRegistry;
global.Animated = Animated;
global.BackAndroid = BackAndroid;
global.Platform = Platform;
global.Text = Text;
global.View = View;
global.Image = Image;
global.TouchableOpacity = TouchableOpacity;
global.TouchableHighlight = TouchableHighlight;
global.ScrollView = ScrollView;
global.ListView = ListView;
global.Alert = Alert;
global.TextInput = TextInput;
global.Navigator = Navigator;
global.Linking = Linking;
global.StyleSheet = StyleSheet;
global.StatusBar = StatusBar;
global.RefreshControl = RefreshControl;
global.InteractionManager = InteractionManager;
global.ActivityIndicator = ActivityIndicator;
global.WebView = WebView;


global.kScreenW = Dimensions.get('window').width;
global.kScreenH = Dimensions.get('window').height;
global.kOnePixel = 1 / PixelRatio.get();

global.log = __DEV__&&true?console.log:()=>{};
