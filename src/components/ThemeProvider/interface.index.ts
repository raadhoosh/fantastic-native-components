interface ColorBase {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface Text {
    fontSize?: string | number;
    color?: string;
    lineHeight?: number;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    fontFamily?: string,
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}
interface Button {
    fontSize?: string | number;
    width?: string;
    color?: string;
    borderRadius?: string;
    fontFamily?: string;
    backgroundColor?: string;
    padding?: string;   
}
interface TextInput {
    fontSize?: string | number;
    width?: string;
    color?: string;
    borderRadius?: string;
    fontFamily?: string;
    backgroundColor?: string;
    padding?: string;   
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
    text: Text;
    button: Button;
    textInput :TextInput;
}