import React from 'react';
import {BackHandler, View, Text, StyleSheet, ScrollView, StatusBar,TouchableOpacity, Image, ImageBackground, TextInput , Platform,  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import { Button, Input } from 'react-native-elements';
import RNExitApp from 'react-native-exit-app';
import { connect } from "react-redux";
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';
import Icon from 'react-native-vector-icons/Feather';
import TabCategories from '../../components/cTabCategories';
import TabNavBottom from '../../components/cTabNavBottom';
import MedItem from '../../components/cMedItem';
import ModalOption from '../../components/cModalOption';

class vDiscover extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            isModal : false,
        }
    }

    componentDidMount = () => {
        console.log('logged user : ', this.props.user)
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.props= props
        console.log('logged user : ', this.props.user)
    }

    goLogin = () => {
        this.props.navigation.navigate('login')
    }

    goDetail = () => {
        this.props.navigation.navigate('detail')
    }

    onQuitApp = () => {
        Platform.OS === 'ios' ?
        RNExitApp.exitApp() : BackHandler.exitApp()
    }

    render(){
        return (
            <View style = {styles.container}>
                {this.state.isModal && <ModalOption navigation = {this.props.navigation} onBackPressed = {() => this.setState({isModal : false})} />} 
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <Spinner  visible={this.state.loading} />
                <View style = {styles.header}>
                    <ImageBackground style = {{width : 300, height : 85, justifyContent : 'flex-end', alignItems : 'center'}} source = {imgs.discover_header}>
                        <Text style = {{color : '#fff', fontSize : 28, fontWeight : 'bold', marginBottom : 12}}>Discover</Text>
                    </ImageBackground>
                    <View style = {{ height: 50, marginTop : 8, marginBottom : -25}}>
                        <Input 
                            placeholder='Search medicine here...' placeholderTextColor = {constant.Color_Text1} 
                            onChangeText={value => this.setState({ pass: value })} errorMessage = {this.state.err_pass}
                            inputStyle = {{color : constant.Color_Text, fontSize : 14}} secureTextEntry = {true}
                            leftIcon = {<Feather name = "search" size = {18} color = {constant.Color_Text1}/>}
                            inputContainerStyle = {styles.searchBar} 
                            />
                    </View>
                </View>
                <TabCategories />
                <View style = {styles.formView} >
                    <ScrollView style = {{flex : 1, width : '100%'}}>
                        {
                            [1,2,3,4].map((item, index) => 
                                <MedItem key = {index} onPress = {() => this.goDetail()}/>
                            )
                        }
                        <View style = {{height: 25,}}></View>
                    </ScrollView>
                </View>
                <TabNavBottom sel_index = {0} navigation = {this.props.navigation} onPlusPressed = {() => this.setState({isModal : true})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', alignItems : 'center', backgroundColor : constant.Color_WhiteBg,
    },
    header : {
        backgroundColor : constant.Color_Secondary, width : '100%', height : 143, alignItems : 'center', justifyContent : 'flex-end',
        borderBottomLeftRadius : 32, borderBottomRightRadius : 32
    },
    searchBar : {height : 46, width: '92%', elevation : 20, paddingLeft : 16, backgroundColor : constant.Color_InputBg, borderBottomWidth : 0, borderRadius : 23},
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', paddingTop : 10,
        paddingLeft : 25, paddingRight : 25,
    },
    titleView : {
        width : '100%', alignItems : 'center', marginTop : 8, marginBottom : 40,
    },
    titleTxt : {
        textAlign : 'center', fontSize : 22, fontWeight : '700', color : constant.Color_Text
    },
    termsTxt : {
        textAlign : 'center', fontSize : 12, color : constant.Color_Text1,
    },
    fogotTxt : {
        textAlign : 'center', fontSize : 14, fontWeight : '500', color : constant.Color_Primary
    },
    inputContainer : {height : 56, paddingLeft : 10, backgroundColor : constant.Color_InputBg, borderBottomWidth : 0, borderRadius : 8},
    logo : {
        width : 163, resizeMode : 'contain', marginTop : 10, marginBottom : 20
    },
    loginBtn : {
        width : '100%', borderRadius : 8, height : 56,
    },
    socialBtn : {
        justifyContent : 'center', alignItems : 'center', width : 44, height : 44, borderRadius : 22, borderColor : constant.Color_Primary, borderWidth : 1, 
    }
});

const mapStatetoProps = (state) => {
    return state
}
export default connect(mapStatetoProps)(vDiscover);