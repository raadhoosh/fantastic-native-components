export enum AUTH_TYPE {
    NONE = "NONE",
    API_KEY = "API_KEY",
    AWS_IAM = "AWS_IAM",
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
    OPENID_CONNECT = "OPENID_CONNECT",
}

export default {
    graphqlEndpoint: "https://k3o7lg5jlrb3xip25hrbcuq44q.appsync-api.us-east-2.amazonaws.com/graphql",
    region: "us-east-2",
    authenticationType: AUTH_TYPE.API_KEY,
    apiKey: "da2-c3ffyyb7qjfklo5ypvbnk3yfde",
};
