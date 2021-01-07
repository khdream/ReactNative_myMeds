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
import Icon from 'react-native-vector-icons/Feather';
import TabCategories from '../../components/cTabCategories';
import TabNavBottom from '../../components/cTabNavBottom';
import MedItem from '../../components/cMedItem';

export default class vSearch extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            item : {
                title : 'Ortho Tri-Cyclen',
                comments : 124, 
                rate : 5,
                description : 'Ortho Tri-Cyclen is used as contraception to prevent pregnancy. Ortho Tri-Cyclen is also used to treat moderate acne vulgaris in females who are at least 15 years old.'
            }
        }
    }

    componentDidMount = () => {
        this.getSavedData();
    }

    getSavedData = async () => {
        let last_login_name = await common._retrieveData('login_name');
        let profile = await common._retrieveData('user_profile');
        if(profile != null)
        {
            global.me = profile
            console.log('global.me', global.me)
            this.getBioInfo();
            this.setState({pass_login_eneabled : false})
        }
        else
        {
            this.setState({email : last_login_name == null ? '' : last_login_name, pass_login_eneabled : true})
        }
    }

    validate = () => {
        if (this.state.email == '') {
            this.setState({err_email : lang.input_valid_name[global.lang], err_pass : ''});
            return false;
        }
        else if (this.state.pass == '') {
            this.setState({err_email : '', err_pass : lang.input_valid_pass[global.lang]});
            return false;
        }
        else {
            this.setState({err_email : '', err_pass : ''});
            return true;
        }
    }

    onToggleLang = () => {
        global.lang = global.lang == 'ger' ? 'en' : 'ger'
        this.setState({lang : global.lang})
    }

    goLogin = () => {
        this.props.navigation.navigate('login')
    }

    onLogin =  () => {
        // this.props.navigation.replace('home')
        let isValid = this.validate()
        if (isValid==true) {
            this.setState({ loading: true })
            user_helper.login(this.state.email, this.state.pass, this.onLoginSuccess, this.onLoginFailed)
        }
    }

    onLoginSuccess = (response) => {
        console.log('success', response)
        profile_helper.getProfile(response.access_token, 
            async (res) => {
                this.setState({ loading: false, login_success : true, login_result_msg : lang.login_success[global.lang] })
                global.me = res;
                await common._storeData('login_name', this.state.email)
                await common._storeData('user_profile', global.me)
                this.props.navigation.replace('home')
            }, 
            (err) => {
                this.setState({ loading: false, login_success : false, login_result_msg : lang.login_failed[global.lang] })
                console.log('failed', err)
            }
        )
    }

    onLoginFailed = (err) => {
        this.setState({ loading: false, login_success : false, login_result_msg : lang.login_failed[global.lang] })
        console.log('failed', err)
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
                <View style = {styles.header}>
                    <View style = {{flexDirection : 'row', alignItems : 'center', padding : 8}}>
                        <TouchableOpacity style = {{padding : 8}}>
                            <Feather name="arrow-left" size = {24} color="#fff" />
                        </TouchableOpacity>
                        <View style = {{flex : 1, flexDirection : 'column', height : 42 }}>
                            <Input 
                                placeholder='Search in group...' placeholderTextColor = '#fff' 
                                onChangeText={value => this.setState({ pass: value })} errorMessage = {this.state.err_pass}
                                inputStyle = {{color : '#fff', fontSize : 14}}
                                leftIcon = {<Feather name = "search" size = {18} color = '#fff' />}
                                inputContainerStyle = {styles.searchBar} 
                                />
                        </View>
                        <TouchableOpacity style = {{padding : 8}}>
                            <Feather name = "upload" size = {18} color = "#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{width : '100%', padding : 12, paddingLeft  :16, paddingRight : 16, backgroundColor : '#fff'}}>
                    <View style = {styles.row}>
                        <Text style = {styles.title}>{this.state.item.title}</Text>
                        <Text style = {styles.comment}>{this.state.item.comments} members</Text>
                    </View>
                    <View style = {styles.row}>
                        <Text style = {styles.description}>{this.state.item.description}</Text>
                    </View>
                </View>
                <Text style = {{fontSize : 12, fontWeight : 'bold', color : constant.Color_Text1, width : '100%', paddingLeft : 32, marginTop : 8, }}>LATEST POSTS</Text>
                <View style = {styles.formView} >
                    <ScrollView style = {{flex : 1, width : '100%'}}>
                        {
                            [1,2,3,4].map((item, index) => 
                                <MedItem key = {index}/>
                            )
                        }
                        <View style = {{height: 25,}}></View>
                    </ScrollView>
                </View>
                <TabNavBottom sel_index = {0} navigation = {this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', alignItems : 'center', backgroundColor : constant.Color_WhiteBg,
    },
    header : {
        backgroundColor : constant.Color_Secondary, width : '100%', height : 100, alignItems : 'center', paddingTop : 40, justifyContent : 'center',
    },
    row : {flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',},
    searchBar : {height : 38, width: '100%', paddingLeft : 16, backgroundColor : '#ffffff40', borderBottomWidth : 0, borderRadius : 23},
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', paddingTop : 10,
        paddingLeft : 25, paddingRight : 25,
    },
    inputContainer : {height : 56, paddingLeft : 10, backgroundColor : constant.Color_InputBg, borderBottomWidth : 0, borderRadius : 8},
    title : {color : constant.Color_Text, fontSize : 24, fontWeight : 'bold', marginRight : 20, marginTop : 6, marginBottom : 6},
    comment : {color : '#FA77D7', fontSize : 16, marginLeft : 4},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});

