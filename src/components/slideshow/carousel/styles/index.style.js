import { StyleSheet } from 'react-native';

export const colors = {
    black: '#000',
    white: '#fff',
    gray: '#888888',
    background1: '#000',
    background2: '#000'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    slideshowContainer: {
        paddingVertical: 0
    },
    slideshowContainerDark: {
        backgroundColor: colors.black
    },
    slideshowContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 0,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8,
        position: "absolute",
        left: 0,
        bottom: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
    }
});
