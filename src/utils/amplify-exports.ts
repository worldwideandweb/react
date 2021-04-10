import env from './env.variables';
const awsExports = {
    Auth: {
        userPoolId: env.REACT_APP_COGNITO.poolId,
        userPoolWebClientId: env.REACT_APP_COGNITO.clientId,
        storage: env.REACT_APP_COGNITO.storage
    }
}

export default awsExports;