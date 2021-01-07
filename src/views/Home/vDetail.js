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
import CommentItem from '../../components/cCommentItem';

export default class vDetail extends React.Component {
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
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
                <Spinner  visible={this.state.loading} />
                <View style = {styles.header}>
                    <View style = {{width : '100%', flexDirection : 'row', justifyContent : 'flex-start', padding : 8}}>
                        <TouchableOpacity style = {{padding : 8}} onPress = {() => this.props.navigation.goBack()}>
                            <Feather name="arrow-left" size = {24} color={constant.Color_Text} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{width : '100%', marginTop : -10, paddingLeft  :16, paddingRight : 16,}}>
                    <MedItem />
                </View>
                <Text style = {{fontSize : 12, fontWeight : 'bold', color : constant.Color_Text1, width : '100%', paddingLeft : 32, marginTop : 15, }}>COMMENTS (12)</Text>
                <View style = {styles.formView} >
                    <ScrollView style = {{flex : 1, width : '100%'}}>
                        {
                            [1,2,3,4].map((item, index) => 
                                <CommentItem key = {index}/>
                            )
                        }
                        <View style = {{height: 25,}}></View>
                    </ScrollView>
                </View>
                <View style = {{width : '100%', height : 62, backgroundColor : '#fff', elevation : 2, padding :8, }}>
                    <Input 
                        placeholder='Add a comment...' placeholderTextColor = {constant.Color_Primary}
                        onChangeText={value => this.setState({ pass: value })} errorMessage = {this.state.err_pass}
                        inputStyle = {{color : '#fff', fontSize : 14}}
                        leftIcon = {<Feather name = "search" size = {18} color = '#fff' />}
                        inputContainerStyle = {styles.searchBar} 
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', alignItems : 'center', backgroundColor : constant.Color_WhiteBg,
    },
    header : {
        width : '100%', height : 90, alignItems : 'center', paddingTop : 40, justifyContent : 'center',
    },
    row : {flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',},
    searchBar : {height : 45, width: '100%', paddingLeft : 2, backgroundColor : '#F8FAFF', borderColor : '#EBEBEB', borderWidth: 1, borderRadius : 8},
    formView : {
        flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', width : '100%', paddingTop : 10,
        paddingLeft : 25, paddingRight : 25,
    },
    title : {color : constant.Color_Text, fontSize : 24, fontWeight : 'bold', marginRight : 20, marginTop : 6, marginBottom : 6},
    comment : {color : '#FA77D7', fontSize : 16, marginLeft : 4},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});

