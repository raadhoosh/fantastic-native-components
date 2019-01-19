import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './carousel/styles/index.style';
import { sliderWidth, itemWidth } from './carousel/styles/SliderEntry.style';
import { Row } from 'react-native-easy-grid';

export const ENTRIES1 = [
    {
        title: 'Premier League',
        subtitle: 'Watch now',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Watch now',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Watch now ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Watch now',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic ',
        subtitle: 'Watch now',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

const SLIDER_1_FIRST_ITEM = 1;
export default class Slideshow extends Component {
    _carousel: any;
    state: {
        errors: any,
        slider1ActiveSlide: any
    }
    constructor(props: any) {
        super(props);
        this.state = {
            errors: [],
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        }
        this._carousel = {};
    }

    _onPressCarousel = (item: any) => {
        // here handle carousel press
        alert("dcx s")
    }
    _renderItem({ item }: any) {

        return (
            <View style={{
                width: "98%",
                marginLeft: "1%",
                marginRight: "1%"
            }}>
                <View >
                    <Image source={{ uri: item.illustration }} style={{ height: 300, width: "100%", flex: 1 }} />
                    <TouchableOpacity style={styles.titleWrapper} >
                        <Row>
                            <Text style={styles.titleSlideshow} >
                                {item.title}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={styles.subTitleSlideshow} >
                                {item.subtitle}
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
                        layout={'default'}
                        ref={(c: any) => { this._carousel = c; }}
                        data={ENTRIES1}
                        renderItem={item => this._renderItem(item)}
                        autoplay={true}
                        autoplayInterval={3000}
                        loop={true}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />

                    <Pagination
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={slider1ActiveSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={colors.white}
                        inactiveDotOpacity={1}
                        inactiveDotScale={0.6}
                        carouselRef={this._carousel}
                        tappableDots={!!this._carousel}
                    />
                </View>

            </>
        );
    }
}
