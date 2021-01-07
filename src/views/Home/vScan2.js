import React from 'react';
import {BackHandler, View, Text, StyleSheet, ScrollView, StatusBar,TouchableOpacity, Image, ImageBackground, TextInput , Platform,  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
import { Button, Input } from 'react-native-elements';
import {width, height, totalSize} from 'react-native-dimension';
import RNExitApp from 'react-native-exit-app';
import { RNCamera } from 'react-native-camera';
// custom import
import {icons, imgs} from '@assets';
import {constant, common, lang} from '@utils';
import {user_helper, profile_helper} from '@helper';

export default class vScan2 extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            // page : 'learn_detail'
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

    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
          this.props.navigation.navigate('scan3')
        }
    };

    render(){
        return (
            <View style = {styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <Spinner  visible={this.state.loading} />
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <Image source = {icons.scan_focus} style = {{
                    position : 'absolute', top : (height(100) - width(70) - 80) / 2, left : 60, right : 60,
                    width: width(100) - 120, height : width(70), resizeMode : 'contain', }} />
                <TouchableOpacity style = {{position : 'absolute', top : 40, left : 16,}} onPress = {() => this.props.navigation.goBack()}> 
                    <Image source = {icons.back} style = {{width: 36, height : 36, resizeMode : 'contain', }} />
                </TouchableOpacity>
                <View style={{position : 'absolute', flexDirection : 'row', justifyContent : 'center', bottom : 120, width : '100%'}}>
                    <View style={styles.info}>
                        <Text style = {{fontSize : 11, color : '#fff'}}>2. Scan the Side of pill (Expiration and Refill)</Text>
                    </View>
                </View>
                <View style={styles.controlBar}>
                    <TouchableOpacity style={styles.capture}>
                        <Image source = {icons.photo_library} style = {{width: 24, height : 24, resizeMode : 'contain', }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Image source = {icons.scanbtn} style = {{width: 52, height : 52, resizeMode : 'contain', }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.capture}>
                        <Image source = {imgs.med1} style = {{width: 42, height : 42, resizeMode : 'contain', }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, flexDirection : 'column', 
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    controlBar : { position : 'absolute', bottom : 28, left : 28, right : 28, borderRadius : 24,
        width : width(100) - 56, height : 82, backgroundColor : '#fff', paddingLeft : 20, paddingRight : 20,
        flexDirection : 'row', justifyContent : 'space-evenly', alignItems : 'center',
    },
    info : { 
        paddingTop : 12, paddingBottom : 12, paddingLeft : 24, paddingRight : 24,
        backgroundColor : '#FA77D7', borderRadius : 30}
});

