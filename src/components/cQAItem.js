import React from 'react';
import {BackHandler,Share, View, Text, Dimensions, Button,ImageBackground, FlatList, TextInput,StyleSheet, ScrollView , Image, TouchableOpacity} from 'react-native';
import {Avatar, Divider, Badge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {width, height, totalSize} from 'react-native-dimension';
import StarRating from 'react-native-star-rating';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';

const MsgItem = (props) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.row}>
                <View style = {{padding : 2, }}>
                    <Image source = {props.msg.photo} style = {{width : 30, height : 30, resizeMode : 'contain', borderRadius : 100, }}/>
                </View>
                <Text style = {styles.name}>{props.msg.name}</Text>
                <Text style = {styles.time}>{props.msg.date}</Text>
            </View>
            <View style = {styles.row}>
                <Text style = {styles.description}>{props.msg.comment}</Text>
            </View>
        </View>
    )
}

export default class QAItem extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            item : {
                question : {
                    name : 'Samuel Smith',
                    photo : imgs.avatar_3,
                    date : '2 hrs ago',
                    comment : 'Did you consumed this while taking any other meds?'
                },
                answer : {
                    name : 'Maria Jones',
                    photo : imgs.avatar_2,
                    date : '2 hrs ago',
                    comment : 'Yes I have used it together with Aspirin. No issue as of yet.'
                },
            }
        }
    }

    componentDidMount(){
    
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.props = props;
    }

    render() {
        return (
            <TouchableOpacity style = {styles.container} activeOpacity = {0.8}>
                <MsgItem msg = {this.state.item.question} />
                <View style = {{marginLeft : 15, marginTop : 5, paddingLeft : 6, borderLeftWidth : 1, borderLeftColor : '#ddd',}}>
                    <MsgItem msg = {this.state.item.answer} />
                </View>
            </TouchableOpacity>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        width : '100%', paddingLeft : 4
    },
    row : {flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',},
    rowRight : {flexDirection : 'row', justifyContent : 'flex-end', alignItems : 'center', marginTop : 12},
    title : {color : constant.Color_Text, fontSize : 16, fontWeight : 'bold', marginRight : 20, marginTop : 6, marginBottom : 6},
    name : {color : constant.Color_Text, fontSize : 13, marginLeft : 4},
    time : {color : '#FA77D7', fontSize : 13, marginLeft : 4},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});
