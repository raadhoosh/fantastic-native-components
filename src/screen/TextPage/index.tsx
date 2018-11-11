import React from "react";
import { View } from "react-native";
import { Text } from '../../components'
export interface Props {

}
class TextPage extends React.PureComponent<Props> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>               
                <Text color='#f00' >This is a text</Text>
                <Text primary >This is a text</Text>
                <Text secondary >This is a text</Text>
                <Text success >This is a text</Text>
                <Text info >This is a text</Text>
            </View>
        );
    }
}

export default TextPage;