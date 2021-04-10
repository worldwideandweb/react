enum AppUrls {
    DEVELOPMENT = 'https://app.client.alpha-abs.co.uk',
  }
  
  interface CognitoConfig {
    poolId: string;
    clientId: string;
    storage: Storage;
  }
  
  interface EnvironmentConfig {
    REACT_APP_API_URL: string;
    REACT_APP_COGNITO: CognitoConfig;
  }
  
  // Default is development
  let environmentVars: EnvironmentConfig = {
    REACT_APP_API_URL: 'https://api.dev.worldwideandweb.com/',
    REACT_APP_COGNITO: {
      poolId: 'eu-west-1_npgPwqBfx',
      clientId: '3ftkgsareirbu8t9rj30mmhj9t',
      storage: localStorage,
    },
  };
  
  export default environmentVars;
  