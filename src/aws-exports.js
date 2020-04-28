export const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ["email", "openid"],
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code",
    },
  },
  API: {
    endpoints: [
      {
      name: "Ping",
      endpoint: "https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev-milad/ping"
    }
    ]
  }
};
export const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: false,
};
