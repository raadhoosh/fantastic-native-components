interface ColorBase {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}
enum TextAlign {
    auto = "auto",
    left = "left",
    right = "right",
    center = "center",
    justify = "justify",
}
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
interface Text {
    fontsize?: string | number,
    color?: number | string,
    lineHeight?: number,
    textAlign?: TextAlign,
    fontFamily?: string,
    fontWeight?: FontWeight | string | number;
}
export default interface Theme {
    primary: ColorBase;
    secondary: ColorBase;
    info: ColorBase;
    warning: ColorBase;
    danger: ColorBase;
    success: ColorBase;
    purple: ColorBase;
    grey: ColorBase;
    deviceWidth: number;
    deviceHeight: number;
    isIphoneX: boolean;
    platform: "ios" | "android";
    text: Text
}