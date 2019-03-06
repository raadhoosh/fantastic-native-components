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
        let AccessToken;
        let d = new Date();
        let t = "t:" + d.getMonth() + "-" + d.getDate() + "-" + d.getHours();
        let p = await AsyncStorage.getItem("@auth13:" + t);
        if (p) {
            // debugger
            Auth = this.state.Auth;
            this.setPlayer(Auth);
        } else {
            let a: string = JSON.stringify({ "username": "salman.zare@optus.com.au", "password": "Salman@2o19", "rememberMe": "false" });
            fetch("https://web-pp.sport-ott.com/api/userauth/login", { method: "POST", body: a })
                .then((data) => {
                    if (data) {
                        const body = JSON.parse(_.get(data, "_bodyText"));
                        Auth = body.result;
                        // debugger
                        AsyncStorage.setItem("@auth1:" + t, JSON.stringify(Auth));

                        this.setState({ Auth: Auth });
                        this.setPlayer(Auth);
                    }
                    //alert(JSON.stringify(data));
                })
                .catch((err: any) => {
                    alert(err);
                });
        }
        // alert(JSON.stringify(Auth));
    }

    setPlayer = (Auth: any) => {
        if (Auth) {
            let AccessToken = _.get(Auth, "IdToken");
            // debugger
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

                        // debugger;
                        const Body = JSON.parse(_.get(data, "_bodyText"));
                        // debugger;

                        this.setState({ data: Body });
                        let list = playerInstanceSetup(Body);
                        this.setState({ playerInstanceSetup: list });
                        // alert(JSON.stringify(data));
                    })
                    .catch((err: any) => {
                        // debugger
                        alert(err);
                    });
        }
    }

    render() {
        if (this.state) {
            if (this.state.playerInstanceSetup) {
                return (
                    <>
                        <View style={styles.container}>
                            <View style={styles.videoWrapper}>
                                <JWPlayer
                                    key={"name"}
                                    title={this.props.text}
                                    // description={'Film Test'}
                                    src={JSON.stringify(this.state.playerInstanceSetup)}
                                    // src="https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8"
                                    // src="https://wowzaec2demo.streamlock.net/live/bigbuckbunny/playlist.m3u8"
                                    // src="https://descargapwebrealmadrid.akamaized.net/2018/04/05/b2c71017-0b44-4bfa-9d6f-f56247a818b2_1000k.mp4"
                                    // src={require("./video.mp4").toString()}
                                    play={true}
                                    style={styles.video}
                                />
                            </View>
                            <View style={{ marginTop: 60, flex: 1 }}>
                                <StyledText>
                                    {Date.now()}
                                </StyledText>
                            </View>
                        </View>
                    </>
                );

            }
        }
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.videoWrapper}>
                    </View>
                    <View style={{ marginTop: 60, flex: 1 }}>
                        <StyledText>
                            {this.props.text}
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