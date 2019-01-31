import { StyleSheet } from "react-native";

export const colors = {
    black: "#000",
    white: "#fff",
    gray: "#888888",
    background1: "#000",
    background2: "#000",
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    scrollview: {
        flex: 1,
    },
    slideshowContainer: {
        paddingVertical: 0,
        backgroundColor: colors.black,
    },
    slideshowContainerDark: {
        backgroundColor: colors.black,
    },
    slideshowContainerLight: {
        backgroundColor: "white",
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    titleDark: {
        color: colors.black,
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 13,
        fontStyle: "italic",
        textAlign: "center",
    },
    slider: {
        marginTop: 0,
        overflow: "visible", // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0, // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8,
        position: "absolute",
        left: 0,
        bottom: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
    },
    paginationDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
        marginHorizontal: 0,
    },
    titleWrapper: {
        position: "absolute",
        top: 30,
        left: 0,
        color: "#fff",
        fontSize: 13,
        fontWeight: "bold",
        letterSpacing: 0.5,
        maxWidth: "100%",
    },
    titleSlideshow: {
        color: colors.white,
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 0.5,
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        marginRight: 10,
        marginLeft: 10,
    },
    subTitleSlideshow: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,
        padding: 10,
        backgroundColor: "#fff",
        marginRight: 10,
        marginLeft: 10,
    },
});
