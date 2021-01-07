import React from 'react';
import {BackHandler,Share, View, Text, Dimensions, Button,ImageBackground, FlatList, TextInput,StyleSheet, ScrollView , Image, TouchableOpacity} from 'react-native';
import {Avatar, Divider, Badge} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {width, height, totalSize} from 'react-native-dimension';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';


export default class TabCategories extends React.Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            sel_index : 0
        }
    }

    componentDidMount(){
    
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.props = props;
    }

    tabs = ['All', 'Following', 'Featured', 'Most Popular', 'Ortho', 'Cardio', 'Nasal']

    render() {
        return (
            <View style = {styles.container}>
               <FlatList
                    data={this.tabs}
                    renderItem={({ item , index}) => (
                        <TouchableOpacity 
                            style = {[styles.item, {backgroundColor : index == this.state.sel_index ? constant.Color_Primary : constant.Color_WhiteBg}]}
                            onPress = {() => this.setState({sel_index : index})}
                            >
                            <Text style = {{color : index == this.state.sel_index ? constant.Color_WhiteBg : constant.Color_Primary, fontSize : 14}}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal = {true}
                    contentContainerStyle = {{justifyContent : 'center', alignItems : 'center', paddingLeft : 15, paddingRight : 38}}
                    style = {{width : width(100), }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        width : '100%', padding : 10, marginTop : 25,
    },
    item : {margin : 6, paddingLeft: 14, paddingRight : 14, paddingTop : 6, paddingBottom : 6, borderRadius : 16, }
});
