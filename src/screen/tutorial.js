import React,{ Component }  from 'react';

import { Dimensions, Text, View,Platform,Image,TextInput } from 'react-native';

import Swiper from 'react-native-animated-swiper';
import Video from "react-native-video";
import Tabs from 'react-native-tabs';
import { Header, Container, Body, Title} from 'native-base';
import Overlay from 'react-native-modal-overlay';

const { height, width } = Dimensions.get('window');
GLOBAL.height = height;
GLOBAL.width = width;
GLOBAL.totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;
export default class tutorial extends Component {
    constructor(props){
        super(props);

    }
    state = {
        text: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        confirmPassword: false
    };
    render() {
        const { page } = this.state;
        const tabbarStyles = [styles.tabbar];
        // if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);

        return (
            <View style={styles.container}>

                <Video
                    source={require("./../../assets/tutorial.mp4")}
                    style={styles.backgroundVideo}
                    muted={true}
                    repeat={true}
                    resizeMode={"cover"}
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                />

                    <Image
                        style={{
                            marginTop:(14.6/37.2)*height,
                            height:(3.1/37.2)*height,
                            // borderColor:'red',
                            // borderWidth:3,
                            resizeMode: 'contain',
                            aspectRatio: 668/218,
                            position: 'absolute'
                            // alignItems: 'center', flex: 1, justifyContent: 'center',
                        }}
                        source = {require('./../../assets/cnqr.png')}/>

                <Swiper
                        dots
                        dotsStyle={{
                            borderRadius: 4,
                            height: 8,
                            marginVertical: (height)/3.7 -100,
                            width: 8,
                            margin:4

                        }}
                        dotsColor='#5F5E5F'
                        dotsColorActive='white'
                        style={styles.slides}
                        // onSwipe={(event, index) => {}}
                >
                        <Slide title={["WELCOME TO YOUR EVOLUTION","Train using custom created, proven workouts","for your body type"]}/>
                        <Slide title={["ALL IN ONE","Check your workouts and diet plan at","anytime, at your convenience"]}/>
                        <Slide title={["DISCOVER","A training plan from leading, proven figures of "," success made for your lifestyle"]}/>
                        <Slide title={["EXERCISE PLANS","Workout plans that are tried & tested, proven methods"," for by professionals in their fields"]}/>
                    </Swiper>

                <Tabs
                    selected={page}
                    style={tabbarStyles}
                    // selectedStyle={{color:'red'}}
                    onSelect={el=>this.setState({page:el.props.name})}
                >
                    <Text style={{marginLeft:60, width:width/2,color:'white',textAlign: 'center',fontSize:20,fontFamily:'Brandon_bld'}} name="first">JOIN NOW</Text>
                    <Text style={{width:5,color:'white',fontSize: 25,fontFamily:'Brandon_thin'}}>|</Text>
                    <Text style={{marginRight:60,width:width/2,color:'white',textAlign: 'center',fontSize:20 ,fontFamily:'Brandon_bld'}} name="second">LOG IN</Text>
                </Tabs>
            </View>

        );
    }
}
const Slide = ({ title}) => (
    <View style={styles.slide}>
        <Text style={{fontSize:GLOBAL.totalSize(1.5),color:'#00F3B9',fontWeight: "bold",
            fontFamily: "Brandon_bld",
            marginTop:(3.5/38)*height,
        }}> {title[0]}</Text>
        <Text style={{fontSize:20,color:'white',fontFamily:'AktivGrotesk-Light',marginTop:(0.6/38)*height,}}>{title[1]}</Text>
        <Text style={{fontSize:GLOBAL.totalSize(1.5),color:'white',fontFamily:'AktivGrotesk-Light',marginTop:(0.3/38)*height,}}>{title[2]}</Text>
    </View>
);
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slides: {
        // backgroundColor: '#F5FCFF'
    },
    slide: {alignItems: 'center', flex: 1, //justifyContent: 'center',
        marginTop:(14.6/37.2)*height + 80,
        // borderColor:'red',
        // borderWidth:3,

    },
    title: { color: 'rgba(97, 218, 251, 1)', fontSize: 36 },
    backgroundVideo: {
        flex: 1,
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    tabStyle : {
        // backgroundColor: 'white',
        justifyContent: 'center',
        // width: 120,
        height: 50,
    },
    activeTabStyle: {
        // backgroundColor: '#eef0ee',
        height: 50,
    },
    androidTabbar: {
        top: 0,
        // borderBottomColor: 'red',
        borderBottomWidth: 2,
        borderTopColor: 0
    },
    tabbar: {
        backgroundColor:'#121415',
        height: (3.2/37)*height,
        paddingBottom:12
        // borderTopColor: 'red',
        // borderTopWidth: 2
    }
};

