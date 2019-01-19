import gql from "graphql-tag";
export const LOCAL_STATE_QUERY = gql`
  query {
    isLogin @client
  }
`;

export const LOCAL_MENU_QUERY = gql`
  query {
    listMenus{
    items {
      data
      route
      name
    }
    nextToken
  }
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
export const listFeeds = gql`
  query {
  listFeeds{
    nextToken
    items {
      id
      title
      elements {
        id
        title
        type
        duration
        short_description
        base_image
        url
      }
    }
  }
  listGames{
    items{
      id
      title
      two_title
      updateTime
      categoryTitle
      description
      imageUrl
      publish
      image
      image2
    }
    nextToken
  }
  listSliders{
    items {
      id
      title
      type
      short_description
      url
    }
    nextToken
  }
}

`;

export const TOGGLE_LOGIN_MUTATION = gql`
  mutation TOGGLE_LOGIN_MUTATION($isLogin: bool!) {
    toggleLogin(isLogin: $isLogin) @client
  }
`;