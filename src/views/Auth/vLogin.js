import React from 'react';
import {BackHandler, View, Text, StyleSheet, ImageBackground, StatusBar,TouchableOpacity, Image, TextInput , Platform } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import { Button, Input } from 'react-native-elements';
import RNExitApp from 'react-native-exit-app';
// custom import
import {icons, imgs} from '@assets';
import {constant, common} from '@utils';
import {user_helper, profile_helper} from '@helper';
import { connect } from "react-redux";
import {addUser} from "../../redux/actions";

class vLogin extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            loading : false,
            email : '',
            pass : '',
            err_email : '',
            err_pass : '',
        }
    }

    componentDidMount = () => {
    }

    UNSAFE_componentWillReceiveProps(props) {
        // this.props.navigation.replace('discover')
    }
 
    validate = () => {
        if (this.state.email == '') {
            this.setState({err_email : 'please input valid email', err_pass : ''});
            return false;
        }
        else if (this.state.pass == '') {
            this.setState({err_email : '', err_pass : 'please input password'});
            return false;
        }
        else {
            this.setState({err_email : '', err_pass : ''});
            return true;
        }
    }

    goRegister = () => {
        this.props.navigation.navigate('register')
    }

    onLogin =  () => {
        let isValid = this.validate()
        if (isValid==true) {
            this.setState({ loading: true })
            user_helper.login(this.state.email, this.state.pass, 
                this.onLoginSuccess,
                (error) => {
                    // if(error.response.status == 400)
                    this.setState({ loading: false })
                    alert(error.response.data.message)
                    console.log(error.response.data)
                }
            )
        }
    }
    
    onLoginSuccess = async(res) => {
        console.log('res', res)
        this.setState({ loading: false })
        let userObj = {token : res.Authorization}
        // await common._storeData(constant.Key_usertoken, userObj)
        this.props.dispatch(addUser(userObj))
        this.props.navigation.navigate('discover')
    }

    render(){
        return (
            <View style = {styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <Spinner  visible={this.state.loading} />
                <View style = {{width : '100%', marginTop : 25, alignItems : 'flex-start'}}>
                    <Button
                        onPress = {this.goRegister}
                        icon={ <Feather name="chevron-left" size={20} color="white" /> }
                        titleStyle = {{color : 'white'}}
                        title="Register" type = "clear"
                        />
                </View>
                <Image source = {icons.logo} style = {styles.logo}/>
                <View style = {styles.formView} >
                    <View style = {styles.titleView}>
                        <Text style = {styles.titleTxt}>Welcome, login to</Text><Text style = {styles.titleTxt}>your account.</Text>
                    </View>
                    <Input 
                        placeholder='Username' placeholderTextColor = {constant.Color_Text1} 
                        onChangeText={value => this.setState({ email: value })} 
                        errorMessage = {this.state.err_email}
                        inputStyle = {{color : constant.Color_Text, fontSize : 14}}
                        inputContainerStyle = {styles.inputContainer} 
                        />
                    <Input 
                        placeholder='Password' placeholderTextColor = {constant.Color_Text1} 
                        onChangeText={value => this.setState({ pass: value })} errorMessage = {this.state.err_pass}
                        inputStyle = {{color : constant.Color_Text, fontSize : 14}} secureTextEntry = {true}
                        inputContainerStyle = {styles.inputContainer} 
                        />
                    <View style={{width : '100%', alignItems : 'flex-end', paddingRight : 16}}>
                        <TouchableOpacity>
                            <Text style = {styles.fogotTxt}>Fogot message?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{width : '100%', padding : 16, marginTop : 20}}>
                        <Button title='Login' onPress = {this.onLogin} 
                            containerStyle = {styles.loginBtn} 
                            buttonStyle = {{backgroundColor : constant.Color_Primary, height : 56}} 
                            titleStyle = {{color : '#fff'}}/>
                    </View>
                    <View style = {{width : '100%',}}>
                        <View >
                            <Text style = {styles.termsTxt}>By continuing, you agree to Terms & Conditions</Text>
                            <Text style = {[styles.termsTxt, {marginTop : 12}]}>Or sign in with</Text>
                        </View>
                        <View style = {{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                            <TouchableOpacity style = {{margin : 8}}>
                                <View style = {styles.socialBtn}><Image source = {icons.google} style = {{width : 22, height : 23}}/></View>
                            </TouchableOpacity>
                            <TouchableOpacity style = {{margin : 8}}>
                                <View style = {styles.socialBtn}><Image source = {icons.fb} style = {{width : 13, height : 24}}/></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', alignItems : 'center', backgroundColor : constant.Color_Primary
    },
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', paddingTop : 20,
        paddingLeft : 40, paddingRight : 40, backgroundColor : '#fff', borderTopLeftRadius : 35, borderTopRightRadius : 35,
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

  
export default connect(
    null
)(vLogin);