import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './carousel/styles/SliderEntry.style';
import SliderEntry from './carousel/SliderEntry';
import styles, { colors } from './carousel/styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../../static/entries';
import { scrollInterpolators, animatedStyles } from './carousel/animations';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class Gallery extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }   

    momentumExample (number, title) {
        return (
            <View style={styles.exampleContainer}>               
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
    }

    layoutExample (number, title, type) {
        const isTinder = type === 'tinder';
        return (
            // <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>               
            <View style={styles.exampleContainer}>               
               
                <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text>
                <Carousel
                  data={isTinder ? ENTRIES2 : ENTRIES1}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                />
            </View>
        );
    }

    customExample (number, title, refNumber, renderItemFunc) {
        const isEven = refNumber % 2 === 0;

        // Do not render examples on Android; because of the zIndex bug, they won't work as is
        return !IS_ANDROID ? (
            <View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
              
                <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>{title}</Text>
                <Carousel
                  data={isEven ? ENTRIES2 : ENTRIES1}
                  renderItem={renderItemFunc}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
                  slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
                  useScrollView={true}
                />
            </View>
        ) : false;
    }

    // get gradient () {
    //     return (
    //         <LinearGradient
    //           colors={[colors.background1, colors.background2]}
    //           startPoint={{ x: 1, y: 0 }}
    //           endPoint={{ x: 0, y: 1 }}
    //           style={styles.gradient}
    //         />
    //     );
    // }

    render () {        
        const example2 = this.momentumExample(2, 'Featured');
        const example3 = this.layoutExample(3, '"Featured');
        const example4 = this.layoutExample(4, '"Featured');
        const example5 = this.customExample(5, 'Featured',  this._renderItem);
        const example6 = this.customExample(6, 'Featured',  this._renderLightItem);
        const example7 = this.customExample(7, 'Featured',  this._renderDarkItem);        

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    {/* { this.gradient } */}
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >                       
                        { example2 }
                        { example3 }
                        { example4 }                       
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
