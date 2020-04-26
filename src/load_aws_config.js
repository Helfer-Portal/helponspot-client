export function returnAwsConfig() {
  let config;
  if (process.env.REACT_APP_DEPLOYED === true) {
    let module = require("./aws-dummy-config");
    let config = module.awsConfig;
    config.Auth.userPoolId = process.env.REACT_APP_USERPOOL_ID;
    config.Auth.userPoolWebClientId =
      process.env.REACT_APP_USERPOOL_WEBCLIENTID;

    console.log(config);
  } else {
    try {
      let module = require("./aws-exports");
    } catch (e) {
      console.log(e);
    }
    config = module.awsConfig;
  }

  return config;
}
