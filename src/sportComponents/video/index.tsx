import _ from "lodash";
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, AsyncStorage } from "react-native";
import Video from "react-native-video";
import { StyledText } from "./video.style";
import JWPlayer from "./JWPlayer.js";
import { relative } from "path";
import playerInstanceSetup from "./playerInstanceSetup";

interface IProps {
    text?: string;
}
interface IState {
    paused?: boolean;
    Auth?: any;
    playerInstanceSetup?: any;
    data?: any;
}

export default class VideoSport extends Component<IProps, IState> {
    player: any;
    constructor(props: IProps) {
        super(props);
        this.player = {};
        this.state = { paused: true };
    }

    async componentWillMount() {
        let Auth;
        let d = new Date();
        let t = "t:" + d.getMonth() + "-" + d.getDate() + "-" + d.getHours();
        let p = await AsyncStorage.getItem("@auth:" + t);
        if (p) {
            Auth = JSON.parse(p);
        } else {
            let a: string = JSON.stringify({ "username": "salman.zare@optus.com.au", "password": "Salman@2o19", "rememberMe": "false" });
            fetch("https://web-pp.sport-ott.com/api/userauth/login", { method: "POST", body: a })
                .then((data) => {
                    if (data) {
                        Auth = data;
                        AsyncStorage.setItem("@auth:" + t, JSON.stringify(data));
                    }
                    alert(JSON.stringify(data));
                })
                .catch((err: any) => {
                    alert(err);
                });
        }

        await Auth;
        if (Auth) {
            const AccessToken = _.get(Auth, "IdToken");
            this.setState({ Auth: AccessToken });
            if (AccessToken)
                // tslint:disable-next-line:max-line-length
                fetch("https://sport-pp.sport.optus.com.au/api/playback/generalPlayback/web/users/1521132/assets/42463?type=dash&drm=widevine",
                    {
                        method: "GET",
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Authorization": AccessToken,
                        },
                    })
                    .then((data) => {
                        this.setState({ data: data });
                        let list = playerInstanceSetup(data);
                        this.setState({ playerInstanceSetup : list });
                        // alert(JSON.stringify(data));
                    })
                    .catch((err: any) => {
                        alert(err);
                    });
        }

        // alert(JSON.stringify(Auth));
    }

    render() {
        setTimeout(() => {
            if (this.state.paused) {
                this.setState({ paused: false });
            }
        }, 1000);
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.videoWrapper}>
                        <JWPlayer
                            key={"name"}
                            title={this.props.text}
                            // description={'Film Test'}
                            src="https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8"
                            // src="https://wowzaec2demo.streamlock.net/live/bigbuckbunny/playlist.m3u8"
                            // src="https://descargapwebrealmadrid.akamaized.net/2018/04/05/b2c71017-0b44-4bfa-9d6f-f56247a818b2_1000k.mp4"
                            // src={require("./video.mp4").toString()}
                            play={true}
                            style={styles.video}
                        />
                        {/* <Video
                            ref={(ref) => {
                                this.player = ref;
                            }}
                            source={require("./video.mp4")}
                            // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            // rate={1.0}
                            // volume={1.0}
                            // muted={false}
                            resizeMode={"cover"}
                            // fullscreenOrientation
                            style={styles.video}
                            controls
                            // fullscreen
                            paused={this.state.paused}
                        /> */}
                    </View>
                    <View style={{ marginTop: 60, flex: 1 }}>
                        <StyledText>
                            {this.props.text}
                            {this.state && JSON.stringify(this.state.playerInstanceSetup)}
                        </StyledText>
                    </View>
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoWrapper: {
        flex: 1,
        height: 300,
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});