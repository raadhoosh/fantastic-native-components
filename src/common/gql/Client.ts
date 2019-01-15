import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "./config";
import slider from "./mock/slider";
import feed from "./mock/feed";
import menu from "./mock/menu";
import game from "./mock/game";
let token = "";
const client = new ApolloClient({
  clientState: {
    defaults: {
      isLogin: true,
    },
    resolvers: {
      Mutation: {
        toggleLogin: (_: any, variables: { isLogin: any; }, { cache }: any) => {
          const data = {
            data: { isLogin: variables.isLogin },
          };
          cache.writeData(data);
          return data;
        },
      },
      Query: {
        menus: (_: any, variables: any, { cache }: any) => {
          // cache.writeData(menus);
          return menu;
        },
        feeds: (_: any, variables: any, { cache }: any) => {
          return feed;
        },
        sliders: (_: any, variables: any, { cache }: any) => {
          return slider;
        },
        games: (_: any, variables: any, { cache }: any) => {
          return game;
        },
      },
    },
  },
  fetchOptions: {
    credentials: "include",
  },
  request: async (operation: any) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : " ",
      },
    });
  },
  uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,

});

export default client;