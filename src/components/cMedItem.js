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


export default class MedItem extends React.Component {
    constructor(props)
    {
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

    componentDidMount(){
    
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.props = props;
    }

    render() {
        return (
            <TouchableOpacity style = {styles.container} activeOpacity = {0.8} onPress = {this.props.onPress}>
                <View style = {styles.row}>
                    <Text style = {styles.title}>{this.state.item.title}</Text>
                    <FontAwesome name="commenting" color = "#FA77D7" size = {14}/>
                    <Text style = {styles.comment}>{this.state.item.comments}</Text>
                </View>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.state.item.rate}
                    containerStyle = {{width : 120}}
                    starSize = {20}
                    fullStarColor = {'#EBE300'}
                    // starStyle = {{color : '#EBE300'}}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
                <View style = {styles.row}>
                    <Text style = {styles.description}>{this.state.item.description}</Text>
                </View>
                <View style = {styles.rowRight}>
                    <TouchableOpacity  >
                        <Text style = {{color : constant.Color_Primary, fontSize : 12}}>FOLLOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {{marginLeft : 22}}>
                        <Feather name = "upload" size = {18} color = {constant.Color_Primary}/>
                    </TouchableOpacity>
                </View>
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
    comment : {color : '#FA77D7', fontSize : 12, marginLeft : 4},
    description : {color : constant.Color_Text1, fontSize : 13, fontWeight : '300',marginTop : 6, marginBottom : 4},
});
