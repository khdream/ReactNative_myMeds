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
import QAItem from './cQAItem';

export default class CommentItem extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            item : {
                user : {
                    name : 'John Malcom',
                    photo : imgs.avatar_1,
                },
                date : '2 hrs ago',
                title : 'This worked really well!!',
                comment : 'My best experience with it. Consuming since 2002 and no major side effects. Somtimes get morning headaches LOL.'
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
                <View style = {styles.row}>
                    <View style = {{padding : 2, }}>
                        <Image source = {this.state.item.user.photo} style = {{width : 30, height : 30, resizeMode : 'contain', borderRadius : 100, }}/>
                    </View>
                    <Text style = {styles.name}>{this.state.item.user.name}</Text>
                    <Text style = {styles.time}>{this.state.item.date}</Text>
                </View>
                <View style = {styles.row}>
                    <Text style = {styles.title}>{this.state.item.title}</Text>
                </View>
                <View style = {styles.row}>
                    <Text style = {styles.description}>{this.state.item.comment}</Text>
                </View>
                <View style = {styles.rowRight}>
                    <TouchableOpacity  style = {{marginLeft : 22, flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Entypo name = "reply" size = {18} color = {constant.Color_Primary}/>
                        <Text style = {{color : constant.Color_Primary, fontSize : 12, marginLeft : 6}}>REPLY</Text>
                    </TouchableOpacity>
                </View>
                <Divider style = {{marginTop : 12, marginBottom : 12}}/>
                <QAItem />
            </TouchableOpacity>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        width : '100%', padding : 16, borderRadius : 18, backgroundColor : '#fff', marginTop : 12, elevation : 1,
    },
    row : {flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',},
    rowRight : {flexDirection : 'row', justifyContent : 'flex-end', alignItems : 'center', marginTop : 12},
    title : {color : constant.Color_Text, fontSize : 16, fontWeight : 'bold', marginRight : 20, marginTop : 6, marginBottom : 6},
    name : {color : constant.Color_Text, fontSize : 13, marginLeft : 4},
    time : {color : '#FA77D7', fontSize : 13, marginLeft : 4},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});
