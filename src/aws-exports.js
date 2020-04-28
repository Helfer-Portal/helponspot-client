const {
  REACT_APP_AWS_REGION,
  REACT_APP_COGNITO_USER_POOL_ID,
  REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
  REACT_APP_COGNITO_DOMAIN,
  REACT_APP_COGNITO_IDENTITY_POOL_ID,
  REACT_APP_ENVIRONMENT_URL, // The URL of the ci deployment
} = process.env;

const ORIGIN = REACT_APP_ENVIRONMENT_URL || "http://localhost:3000/";

export const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: REACT_APP_AWS_REGION,
    userPoolId: REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: REACT_APP_COGNITO_IDENTITY_POOL_ID,
    oauth: {
      domain: REACT_APP_COGNITO_DOMAIN,
      scope: ["email", "openid"],
      redirectSignIn: ORIGIN,
      redirectSignOut: ORIGIN,
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
