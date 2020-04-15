export const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "eu-central-1",
    userPoolId: "<your-pool-id>",
    userPoolWebClientId: "<your-pool-client-id>",
  },
};
export const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: false,
};
