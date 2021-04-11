import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSnackbar from '../../../hooks/useSnackbar';
import { AuthenticationFlowType } from '../../../models/authentication';
import routes from '../../../routes/routes';
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
    const sb = useSnackbar();
  if (!user) {
    return <LoginContainer setUser={setUser} />;
  }
  switch ((user as any).challengeName as AuthenticationFlowType) {
    case 'NEW_PASSWORD_REQUIRED':
      return <NewPasswordContainer user={user} />;
  }

  if (user.getSignInUserSession()?.getAccessToken()) {
      sb.trigger('Successfully logged in - welcome!', 'success');
      return <Redirect to={routes.home.base} />
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
