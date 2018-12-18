import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, FAB } from "../../components";

export interface FABPageProps {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class FABPage extends React.PureComponent<FABPageProps> {
    constructor(props: FABPageProps) {
        super(props)
    }
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Text>menu</Text>
                    </TouchableOpacity>
                </Left>
                <Title>{"Headers"}</Title>
                <Right>
                    <Text>right</Text>
                </Right>
            </Header>            
          
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <FAB primary top={10}/>
                    <FAB success bottom={10}/>
                    <FAB warning right={10}/>
                    <FAB secondary left={70}/>                    
                    <FAB danger/>                    
                    <FAB warning top={80} />
                    <FAB backgroundColor={"#9c27b0"} color="#fff" label={"Press FAB"}
                    top={80}
                    right={20}
                    height={50}
                    iconName={"plus-circle"}
                    iconSize={18}
                        onPress={() => {
                            alert('You tapped the FAB!');
                        }}
                    />                    
                    <FAB info left={150}/>
                    <FAB primary inverse right={10} bottom={10} label={"inverse"}/>
                    <FAB secondary inverse right={10} bottom={70} />
                    <FAB right={10} bottom={170} backgroundColor={"#e74c3c"}/>                    
                    <FAB disabled  inverse right={10} bottom={270}/>                   
                    <FAB borderRadius={"10px"} left={10} bottom={70}/>
                    <FAB borderRadius={"0"} backgroundColor="#ff0080" color="#fff" left={10} bottom={170}/>
                </View>              
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default FABPage;