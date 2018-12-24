import styled from "styled-components";
import { Animated } from "react-native";

interface IProps {
    width?: number;
    height?: number;
}

const StyledSpinners = styled(Animated.View)`   
    position: absolute;
    left: 0;    
    top: 0;    
    padding: 0;
    flex:1;
    align-items: center;
    justify-content: center;
`;

const StyledSpinnersImg = styled(Animated.Image)`      
    width: ${(props: IProps) => props.width ? props.width : '100'};       
    height: ${(props: IProps) => props.height ? props.height : '100'};  
    position: absolute;
    left: 0;    
    top: 0;    
    padding: 0;
    flex:1;
    align-items: center;
    justify-content: center;
`;

export { StyledSpinners, StyledSpinnersImg };