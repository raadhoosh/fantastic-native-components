import gql from "graphql-tag";
export const LOCAL_STATE_QUERY = gql`
  query {
    isLogin @client
  }
`;

export const LOCAL_MENU_QUERY = gql`
  query {
  menus @client
  }
`;

export const LOCAL_FEED_QUERY = gql`
  query {
  feeds @client
  sliders @client
  games @client
  }
`;
export const LOCAL_SLIDER_QUERY = gql`
  query {
  sliders @client
  }
`;
export const LOCAL_GAMES_QUERY = gql`
  query {
    games @client
  }
`;

export const TOGGLE_LOGIN_MUTATION = gql`
  mutation TOGGLE_LOGIN_MUTATION($isLogin: bool!) {
    toggleLogin(isLogin: $isLogin) @client
  }
`;