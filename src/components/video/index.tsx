import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { StyledText } from "./video.style";
import { relative } from "path";

interface IProps {
    text?: string
}

export default class VideoSport extends Component<IProps> {
    player: any;
    constructor(props: IProps) {
        super(props);
        this.player = {};
    }

    render() {

        return (
            <>
                <View style={styles.container}>
                    <View style={styles.videoWrapper}>
                        <Video
                            ref={(ref) => {
                                this.player = ref
                            }}
                            source={require('./video.mp4')}
                            // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            // rate={1.0}
                            // volume={1.0}
                            // muted={false}
                            resizeMode={"cover"}
                            // fullscreenOrientation
                            style={styles.video}
                            controls
                            fullscreen
                            // paused={false}
                        />
                    </View>
                   <View style={{marginTop: 60}}>
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
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

