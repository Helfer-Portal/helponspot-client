process = require("process");
export function returnAwsConfig() {
  let config;
  if (process.env.REACT_APP_DEPLOYED) {
    let module = require("./aws-dummy-config");
    config = module.awsConfig;
    config.Auth.userPoolId = process.env.REACT_APP_USERPOOL_ID;
    config.Auth.userPoolWebClientId =
      process.env.REACT_APP_USERPOOL_WEBCLIENTID;

    console.log(config);
  } else {
    try {
      var module = require("./aws-exports");
    } catch (e) {
      console.log("error", e);
    }
    config = module.awsConfig;
    console.log(config);
  }

  return config;
}
