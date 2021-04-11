import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import useSnackbar from '../../../../../hooks/useSnackbar';
import history from '../../../../../routes/history';
import routes from '../../../../../routes/routes';
import Profile from './Profile';

const ProfileContainer = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const sb = useSnackbar();

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    state: boolean
  ): void => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(state);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await Auth.signOut();
      sb.trigger('Logged out successfully - hope to see you soon!', 'success');
    } catch {
      sb.trigger('There was an error loggin you out');
    } finally {
        history.push(routes.login);
    }
  };
  return (
    <Profile
      anchorEl={anchorEl}
      menuOpen={menuOpen}
      handleMenuOpen={handleMenuOpen}
      handleLogout={handleLogout}
    />
  );
};

export default ProfileContainer;
