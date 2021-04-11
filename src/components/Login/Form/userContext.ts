import { createContext } from "react";
import { CognitoUser } from '@aws-amplify/auth';


type TUserContext = {
    user: CognitoUser | undefined,
    setUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>
} | undefined;

const UserContext = createContext<TUserContext>(undefined);

export default UserContext;