import React, { Component } from "react";
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles, { colors } from "./carousel/styles/index.style";
import { sliderWidth, itemWidth } from "./carousel/styles/SliderEntry.style";
import { Row } from "react-native-easy-grid";

const SLIDER_1_FIRST_ITEM = 1;
interface IProps {
    data: Array<Object>;
}
interface IState {
    errors: any;
    slider1ActiveSlide: any;
}
export default class Slideshow extends Component<IProps, IState> {
    _carousel: any;
    constructor(props: any) {
        super(props);
        this.state = {
            errors: [],
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        };
        this._carousel = {};
    }

    _onPressCarousel = (item: any) => {
        // here handle carousel press
        alert("dcx s");
    }
    _renderItem({ item, index }: any) {

        return (
            <View style={{
                width: "98%",
                marginLeft: "1%",
                marginRight: "1%",
            }}>
                <View >
                    <Image source={{ uri: item.url }} style={{ height: 300, width: "100%", flex: 1 }} />
                    <TouchableOpacity style={styles.titleWrapper} >
                        <Row>
                            <Text style={styles.titleSlideshow} >
                                {item.title}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={styles.subTitleSlideshow} >
                                {index % 3 === 0 ? "LOGIN IN TO WATCH" : "WATCH NOW"}
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    render() {
        const { slider1ActiveSlide } = this.state;
        return (
            <>
                <View style={styles.slideshowContainer}>
                    <Carousel
                        layout={"default"}
                        ref={(c: any) => { this._carousel = c; }}
                        data={this.props.data}
                        renderItem={item => this._renderItem(item)}
                        autoplay={true}
                        autoplayInterval={3500}
                        loop={true}
                        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />

                    <Pagination
                        dotsLength={this.props.data.length}
                        activeDotIndex={slider1ActiveSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={colors.white}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={"transparent"}
                        inactiveDotOpacity={1}
                        inactiveDotScale={1}
                        carouselRef={this._carousel}
                        tappableDots={!this._carousel}
                    />
                </View>

            </>
        );
    }
}
