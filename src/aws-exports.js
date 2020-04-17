export const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "eu-central-1",
    userPoolId: "<your-pool-id>",
    userPoolWebClientId: "<your-pool-client-id>",
    oauth: {
      domain: "helponspot.auth.eu-central-1.amazoncognito.com",
      scope: ["email", "openid"],
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code",
    },
  },
};
export const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: false,
};
