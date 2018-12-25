import styled from "styled-components";
import { Animated } from "react-native";

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
    position: absolute;
    left: 0;    
    top: 0;    
    padding: 0;
    flex:1;
    align-items: center;
    justify-content: center;
`;

export { StyledSpinners, StyledSpinnersImg };