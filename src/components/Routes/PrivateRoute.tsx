import Auth from '@aws-amplify/auth';
import React, { useEffect } from 'react';
import { Route, RouteProps, useLocation } from 'react-router';
import { Box } from 'worldwideandweb-storybook/dist/components/External';
import useSnackbar from '../../hooks/useSnackbar';
import history from '../../routes/history';
import routes from '../../routes/routes';

interface IProps extends RouteProps {}

const PrivateRoute: React.FC<IProps> = (props: IProps) => {
  const sb = useSnackbar();
  const location = useLocation();

  useEffect(() => {
    isUserAuthenticated();
  }, [location.pathname]);

  const isUserAuthenticated = async (): Promise<void> => {
    try {
      const currentSession = await Auth.currentSession();
      if (!currentSession.isValid()) {
        throw Error('No valid session');
      }
    } catch (e) {
      history.push(routes.login);
      sb.trigger(
        (typeof e === 'string' && e) || e.message || 'Not authenticated'
      );
    }
  };

  return (
    <Route {...props}>
      <Box padding={'100px 0 24px 0'}>{props.children}</Box>
    </Route>
  );
};

export default PrivateRoute;
