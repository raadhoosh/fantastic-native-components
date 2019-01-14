import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "./config";
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
          const menus =  [
              { route: "Home", name: "Premier League", data: "PremierLeague" },
              { route: "Home", name: "UEFA Champions League", data: "UEFAChampionsLeague" },
              { route: "Home", name: "UEFA Europa League", data: "PremierLeague" },
              { route: "Home", name: "Internationals", data: "Internationals" },
              { route: "Home", name: "Podcasts", data: "Podcasts" },
              { route: "Home", name: "Log In | Sign-Up" },
            ];
          // cache.writeData(menus);
          return menus;
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