import React from 'react';
import {BackHandler, View, Text, StyleSheet, ScrollView, StatusBar,TouchableOpacity, Image, ImageBackground, TextInput , Platform,  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import { Button, Input } from 'react-native-elements';
import RNExitApp from 'react-native-exit-app';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';

export default class vAfterScanDetail extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            // page : 'learn_detail'
        }
    }

    componentDidMount = () => {
    }

    goLogin = () => {
        this.props.navigation.navigate('login')
    }

    onQuitApp = () => {
        Platform.OS === 'ios' ?
        RNExitApp.exitApp() : BackHandler.exitApp()
    }

    render(){
        return (
            <View style = {styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <Spinner  visible={this.state.loading} />
                <Image source = {imgs.med_large}  style = {{width : '100%', height : '28%', resizeMode : 'cover', alignItems : 'flex-start'}} />
                <TouchableOpacity style = {{position : 'absolute', top : 40, left : 16,}} onPress = {() => this.props.navigation.goBack()}>
                    <Image source = {icons.back} style = {{width: 36, height : 36, resizeMode : 'contain', }} />
                </TouchableOpacity>
                <View style = {styles.formView} >
                    <View style = {styles.titleView}>
                        <Text style = {styles.titleTxt}>Ortho Tri-Cyclen</Text>
                        <TouchableOpacity >
                            <Image source = {icons.edit} style = {{width: 36, height : 36, resizeMode : 'contain', }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style = {{flex : 1, width : '100%',}}>
                        <View style = {styles.row}>
                            <View style = {styles.item}>
                                <View style = {styles.row}>
                                    <Image source = {icons.dosage} 
                                        style = {{width : 28, height : 22, resizeMode : 'contain', }}/>
                                    <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>DOSAGE</Text>
                                </View>
                                <Text style = {{flex : 1, color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>2 Tablets</Text>
                            </View>
                            <View style = {styles.item}>
                                <View style = {styles.row}>
                                    <Image source = {icons.calendar} 
                                        style = {{width : 20, height : 23, resizeMode : 'contain', }}/>
                                    <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>FREQUENCY</Text>
                                </View>
                                <Text style = {{flex : 1, color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>2x / week</Text>
                            </View>
                        </View>
                        <View style = {styles.row}>
                            <View style = {styles.item}>
                                <View style = {styles.row}>
                                    <Image source = {icons.refill} 
                                        style = {{width : 26, height : 23, resizeMode : 'contain', }}/>
                                    <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>REFILL</Text>
                                </View>
                                <Text style = {{flex : 1,color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>3.0</Text>
                            </View>
                            <View style = {styles.item}>
                                <View style = {styles.row}>
                                    <Image source = {icons.forbidden} 
                                        style = {{width : 24, height : 24, resizeMode : 'contain', }}/>
                                    <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>EXPIRATION</Text>
                                </View>
                                <Text style = {{flex : 1, color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>2 Apr 2021</Text>
                            </View>
                        </View>
                        <View style = {{paddingTop : 16, paddingLeft : 8, paddingRight : 8}}>
                            <Text style = {styles.guideTxt}>
                                Avoid during pregnancy and best time to consume it is after a meal. Keep stored in cool and dry place below 25 degrees or room temperature.
                            </Text>
                        </View>
                        <View style = {{flexDirection : 'row', paddingTop : 24, paddingLeft : 8, paddingRight : 8}}>
                            <TouchableOpacity style = {{flexDirection : 'row', backgroundColor : '#fff', borderColor : '#FA77D7', borderRadius : 20, borderWidth : 2, paddingTop : 8, paddingBottom : 8, paddingLeft : 32, paddingRight : 32}}>
                                <Text style = {{fontSize : 14, color : '#FA77D7',}}>Add a Note</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style = {{width : '100%', flexDirection : 'row', justifyContent : 'center', paddingLeft : 4, paddingRight : 4, marginTop : 12, marginBottom : 16}}>
                        <Button title='Add to My List' onPress = {this.onLogin} 
                            containerStyle = {[styles.loginBtn, {width : '100%', marginLeft : 8}]} 
                            buttonStyle = {{backgroundColor : constant.Color_Primary, height : 56}} 
                            titleStyle = {{color : '#fff'}}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column',
    },
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', marginTop : -45,
        paddingLeft : 28, paddingRight : 28, backgroundColor : '#fff', borderTopLeftRadius : 35, borderTopRightRadius : 35,
    },
    titleView : {
        width : '100%', flexDirection : 'row', alignItems : 'center', paddingTop : 24, paddingBottom : 24,
    },
    titleTxt : {
        textAlign : 'left', fontSize : 24, fontWeight : '700', color : constant.Color_Text, flex : 1,
    },
    guideTxt : {
        textAlign : 'left', fontSize : 14, lineHeight : 20, color : constant.Color_Text1,
    },
    fogotTxt : {
        textAlign : 'center', fontSize : 14, fontWeight : '500', color : constant.Color_Primary
    },
    inputContainer : {height : 56, paddingLeft : 10, backgroundColor : constant.Color_InputBg, borderBottomWidth : 0, borderRadius : 8},
    logo : {
        width : 163, resizeMode : 'contain', marginTop : 10, marginBottom : 20
    },
    loginBtn : {
        borderRadius : 18, height : 56,
    },
    row : {flexDirection : 'row', justifyContent : 'center', alignItems : 'center',},
    item : {flexDirection : 'column', justifyContent : 'center', alignItems : 'center', width : '48%', margin : 6,
        borderRadius : 20, paddingTop : 16, paddingBottom : 16, paddingLeft : 12, paddingRight : 12, paddingRight : 12, backgroundColor : '#F8FAFD'},
});

