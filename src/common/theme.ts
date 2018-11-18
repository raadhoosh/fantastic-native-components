import { Theme } from "../components";
import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX =
    platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
enum FontWeight {
    normal = "normal",
    bold = "bold",
    hundred = "100",
    twoHundred = "200",
    threeHundred = "300",
    fourHundred = "400",
    fiveHundred = "500",
    sixHundred = "600",
    sevenHundred = "700",
    eightHundred = "800",
    nineHundred = "900",
}
const mainTheme: Theme = {
    primary: {
        light: "#4dabf5",
        main: "#2196f3",
        dark: "#1769aa",
        contrastText: "#fff",
    },
    secondary: {
        light: "#ffac33",
        main: "#ff9800",
        dark: "#b26a00",
        contrastText: "#fff",
    },
    info: {
        light: "#33c9dc",
        main: "#00bcd4",
        dark: "#ba000d",
        contrastText: "#fff",
    },
    warning: {
        light: "#ffcd38",
        main: "#ffc107",
        dark: "#b28704",
        contrastText: "#fff",
    },
    danger: {
        light: "#f6685e",
        main: "#f44336",
        dark: "#aa2e25",
        contrastText: "#fff",
    },
    success: {
        light: "#a2cf6e",
        main: "#8bc34a",
        dark: "#618833",
        contrastText: "#fff",
    },
    purple: {
        light: "#af52bf",
        main: "#9c27b0",
        dark: "#6d1b7b",
        contrastText: "#fff",
    },
    grey: {
        light: "#dddddd",
        main: "#6c757d",
        dark: "#343a40",
        contrastText: "#fff",
    },
    text: {
        fontsize: '14px',
        color: '#000',
        fontWeight: FontWeight.normal,
    },
    deviceWidth: deviceHeight,
    deviceHeight: deviceWidth,
    isIphoneX: isIphoneX,
    platform: platform === "android" ? "android" : "ios",
};
export default mainTheme;