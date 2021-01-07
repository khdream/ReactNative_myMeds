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


export default class ModalOption extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
        }
    }

    componentDidMount(){
    
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.props = props;
    }

    onAddMed = () => {
        if (this.props.navigation == null) return;
        this.props.navigation.navigate('scan1')
    }
    
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} style = {styles.container} onPress = {this.props.onBackPressed} >
                <View style = {styles.form} >
                    <TouchableOpacity style = {styles.btn} onPress = {() => this.onAddMed()}>
                        <Image source = {imgs.scan} style = {{width : 40, height : 40, resizeMode : 'contain', borderRadius : 8, margin : 8}}/>
                        <View style = {{marginLeft : 6, flex : 1}}>
                            <Text style = {styles.title}>Add New Med</Text>
                            <Text style = {styles.subtitle}>Easily scan new medicines to add.</Text>
                            <Divider style = {{marginTop : 5, marginBottom : 3}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn}>
                        <Image source = {imgs.med} style = {{width : 40, height : 40, resizeMode : 'contain', borderRadius : 8, margin : 8}}/>
                        <View style = {{marginLeft : 6, flex : 1}}>
                            <Text style = {styles.title}>My tracked Meds</Text>
                            <Text style = {styles.subtitle}>List of your current Meds with history. </Text>
                            <Divider style = {{marginTop : 5, marginBottom : 3}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn}>
                        <Image source = {imgs.share} style = {{width : 40, height : 40, resizeMode : 'contain', borderRadius : 8, margin : 8}}/>
                        <View style = {{marginLeft : 6, flex : 1}}>
                            <Text style = {styles.title}>Share my QR Code</Text>
                            <Text style = {styles.subtitle}>Share with your friends and family.</Text>
                            <Divider style = {{marginTop : 5, marginBottom : 3}}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        width : width(100), height : height(100), alignItems : 'center', backgroundColor : '#19314D98', padding : 16, zIndex : 100, position : 'absolute', top : 0, left : 0, right : 0, bottom : 0,
    },
    form : {
        width : '80%', borderRadius : 25, padding : 16, backgroundColor : '#fff', position : 'absolute', bottom : 100
    },
    btn : {width : '100%', flexDirection : 'row', alignItems : 'center', marginTop : 4},
    title : {color : constant.Color_Text, fontSize : 16, fontWeight : 'bold' },
    subtitle : {color : constant.Color_Text1, fontSize : 13,},
});
