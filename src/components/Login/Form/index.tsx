import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import { AuthenticationFlowType } from '../../../models/authentication';
import LoginContainer from './LoginContainer';
import NewPasswordContainer from './NewPasswordContainer';
import UserContext from './userContext';

interface DisplayFormProps {
  user: CognitoUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>;
}

const DisplayForm: React.FC<DisplayFormProps> = ({
  user,
  setUser,
}: DisplayFormProps) => {
  if (!user) {
    return <LoginContainer setUser={setUser} />;
  }
  switch ((user as any).challengeName as AuthenticationFlowType) {
    case 'NEW_PASSWORD_REQUIRED':
      return <NewPasswordContainer user={user} />;
  }
  return <LoginContainer setUser={setUser} />;
};

const Authentication: React.FC = () => {
  const [user, setUser] = useState<CognitoUser>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <DisplayForm user={user} setUser={setUser} />
    </UserContext.Provider>
  );
};

export default Authentication;
