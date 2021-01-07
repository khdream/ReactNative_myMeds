import React from 'react';
import {BackHandler,Share, View, Text, Dimensions, Button,ImageBackground, FlatList, TextInput,StyleSheet, ScrollView , Image, TouchableOpacity} from 'react-native';
import {Avatar, Divider, Badge} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {width, height, totalSize} from 'react-native-dimension';
import StarRating from 'react-native-star-rating';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';


export default class MedTrackingItem extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            item : this.props.item,
        }
    }

    componentDidMount(){
    
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.props = props;
    }

    render() {
        return (
            <TouchableOpacity style = {styles.container} activeOpacity = {0.8} onPress = {this.props.onPress}>
                <View style = {styles.row}>
                    <Image source = {this.state.item.photo} style = {{width : 48, height : 48, resizeMode : 'contain', borderRadius : 6, }}/>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.title}>{this.state.item.title}</Text>
                    <Text style = {styles.description}>{this.state.item.description}</Text>
                    {
                        this.props.hiddenDate == false && 
                        <View style = {styles.row}>
                            <View style = {styles.date}>
                                <Image source = {icons.redo} style = {{width : 20, height : 20, resizeMode : 'contain',}}/>
                                <Text style = {{color : constant.Color_Primary, fontSize : 13, marginLeft : 6}}>{this.state.item.date}</Text>
                            </View>
                            <View style = {[styles.date, {marginLeft : 18}]}>
                                <Image source = {icons.expire} style = {{width : 26, height : 23, resizeMode : 'contain',}}/>
                                <Text style = {{color : constant.Color_Primary, fontSize : 13, marginLeft : 6}}>{this.state.item.exp_date}</Text>
                            </View>
                        </View>
                    }
                </View>
                <View style = {{justifyContent : 'center'}}>
                    <Feather name = "chevron-right" size = {20} color = {constant.Color_Text1}/>
                </View>
            </TouchableOpacity>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        width : '100%', flexDirection : 'row', padding : 16, borderRadius : 13, backgroundColor : '#fff', marginTop : 10, elevation : 1,
    },
    row : {flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'flex-start',},
    detail : {flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'flex-start', marginLeft : 16},
    date : {flexDirection : 'row', justifyContent : 'flex-end', alignItems : 'center', marginTop : 12, },
    title : {color : constant.Color_Text, fontSize : 16, fontWeight : 'bold', marginRight : 20,},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});
