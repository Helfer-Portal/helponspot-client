export function returnAwsConfig() {
  if (process.env.REACT_APP_DEPLOYED === true) {
    let module = require("./aws-dummy-config");
    let config = module.awsConfig;
    config.Auth.userPoolId = process.env.REACT_APP_USERPOOL_ID;
    config.Auth.userPoolWebClientId =
      process.env.REACT_APP_USERPOOL_WEBCLIENTID;

    console.log(config);
  } else {
    let module = require("./aws-exports");
    let config = module.awsConfig;
  }

  return config;
}
