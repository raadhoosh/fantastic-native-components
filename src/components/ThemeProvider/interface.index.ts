interface ColorBase {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}
export default interface Theme {
    primary: ColorBase;
    secondary: ColorBase;
    info: ColorBase;
    warning: ColorBase;
    danger: ColorBase;
    success: ColorBase;
    purple: ColorBase;
    deviceWidth: number;
    deviceHeight: number;
    isIphoneX: boolean;
    platform: "ios" | "android";
}