import React from "react";
import SideBar from "../../screens/sideBar";
import { Query } from "react-apollo";
import { LOCAL_MENU_QUERY } from "../../common/gql";
export interface IProps {
    navigation: any;
}
class SideBarContainer extends React.PureComponent<IProps | any> {
    onChangeRout = (route: string) => {
        return () => {
            this.props.navigation.navigate(route);
        };
    }
    render() {
        return (
            <Query query={LOCAL_MENU_QUERY}>
                {({ data, error, loading }) => {
                    return (<SideBar
                        routes={data.menus}
                        error={error}
                        loading={loading}
                        onChangeRoute={this.onChangeRout}
                    />);
                }}
            </Query>
        );
    }
}

export default SideBarContainer;