import React from 'react';
import {BackHandler, View, Text, StyleSheet, ScrollView, Switch, StatusBar,TouchableOpacity, Image, ImageBackground, TextInput , Platform,  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import { Button, Input,  } from 'react-native-elements';
import RNExitApp from 'react-native-exit-app';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';
import Icon from 'react-native-vector-icons/Feather';
import TabNavBottom from '../../components/cTabNavBottom';
import MedTrackingItem from '../../components/cMedTrackingItem';
import ModalOption from '../../components/cModalOption';

export default class vProfile extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            isModal : false,
            isLockQRcodeEnabled : false
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

    toggleQRcode = () => {
        this.setState({isLockQRcodeEnabled : !this.state.isLockQRcodeEnabled})
    }

    items = [
        {
            title : 'Atorvastatin 10mg',
            description : 'Once a Day, Everyday, 60 tablets',
            photo : imgs.med1,
            date : '11/30/24',
            exp_date : '11/30/23',
        },
        {
            title : 'Metformin 500mg',
            description : 'Once a day with food, Everyday, 60 tablets',
            photo : imgs.med2,
            date : '11/30/24',
            exp_date : '11/30/23',
        },
        {
            title : 'Lisinopril 5mg',
            description : 'Twice a day, Everyday, 60 tablets',
            photo : imgs.med3,
            date : '11/30/24',
            exp_date : '11/30/23',
        }
    ]

    render(){
        return (
            <View style = {styles.container}>
                {this.state.isModal && <ModalOption navigation = {this.props.navigation} onBackPressed = {() => this.setState({isModal : false})} />} 
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <Spinner  visible={this.state.loading} />
                <View style = {styles.header}>
                    <Text style = {{color : '#fff', fontSize : 28, fontWeight : 'bold', marginBottom : 12}}>Profile</Text>
                    <View style = {{ height: 50, marginTop : 8, marginBottom : -5}}>
                        <Image source = {imgs.avatar_2} style = {styles.avatar}/>
                    </View>
                </View>
                <View style = {{height : 45}}></View>
                <View style = {styles.formView} >
                    <View style = {styles.row}>
                        <View style = {styles.item}>
                            <View style = {styles.row}>
                                <Image source = {icons.people} 
                                    style = {{width : 28, height : 20, resizeMode : 'cover', }}/>
                                <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>Groups Following</Text>
                            </View>
                            <Text style = {{color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>12</Text>
                        </View>
                        <View style = {styles.item}>
                            <View style = {styles.row}>
                                <Image source = {icons.user_plus} 
                                    style = {{width : 24, height : 20, resizeMode : 'cover', }}/>
                                <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>Followed By</Text>
                            </View>
                            <Text style = {{color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>23</Text>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <View style = {styles.item}>
                            <View style = {styles.row}>
                                <Image source = {icons.meds} 
                                    style = {{width : 26, height : 20, resizeMode : 'cover', }}/>
                                <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>Meds Tracking</Text>
                            </View>
                            <Text style = {{color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>4</Text>
                        </View>
                        <View style = {styles.item}>
                            <View style = {styles.row}>
                                <Image source = {icons.question} 
                                    style = {{width : 20, height : 20, resizeMode : 'cover', }}/>
                                <Text style = {{color : '#919191', fontSize : 14, marginLeft : 12,}}>Questions Posted</Text>
                            </View>
                            <Text style = {{color : '#343090', fontSize : 16, fontWeight : 'bold', marginTop : 12}}>120</Text>
                        </View>
                    </View>
                    <View style = {[styles.row, {marginTop : 42}]}>
                        <Text style = {{color : constant.Color_Text, fontSize : 16, fontWeight : 'bold', marginLeft : 18, marginTop : 12}}>Lock QR code</Text>
                        <View style = {{flex : 1}}></View>
                        <Switch
                            trackColor={{ false: "#767577", true: constant.Color_Primary }}
                            thumbColor={this.state.isLockQRcodeEnabled ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleQRcode}
                            value={this.state.isLockQRcodeEnabled}
                            style = {{marginTop : 6, marginRight : 18,}}
                        />
                    </View>
                </View>
                <TabNavBottom sel_index = {3} navigation = {this.props.navigation} onPlusPressed = {() => this.setState({isModal : true})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', alignItems : 'center', backgroundColor : constant.Color_WhiteBg,
    },
    header : {
        backgroundColor : constant.Color_Primary, width : '100%', height : 168, alignItems : 'center', justifyContent : 'flex-end',
        borderBottomLeftRadius : 32, borderBottomRightRadius : 32
    },
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', paddingTop : 10,
        paddingLeft : 25, paddingRight : 25, 
    },
    avatar : {width : 90, height : 90, resizeMode : 'cover', borderColor : '#fff', borderWidth : 4, borderRadius : 45, },
    row : {flexDirection : 'row', justifyContent : 'center', alignItems : 'center',},
    item : {flexDirection : 'column', justifyContent : 'center', alignItems : 'center', width : '45%', margin : 6,
        borderRadius : 20, paddingTop : 16, paddingBottom : 16, paddingLeft : 12, paddingRight : 12, paddingRight : 12, backgroundColor : '#ECF2FB'},
});

