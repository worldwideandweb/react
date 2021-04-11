import React, { memo } from 'react';
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from 'worldwideandweb-storybook/dist/components/External';
import { AccountCircle } from 'worldwideandweb-storybook/dist/icons/External';

interface IProps {
  menuOpen: boolean;
  anchorEl: null | HTMLElement;
  handleMenuOpen: (
    event: React.MouseEvent<HTMLButtonElement>,
    state: boolean
  ) => void;
  handleLogout: () => void;
}

const Profile: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(event) => props.handleMenuOpen(event, true)}
        color="inherit"
      >
        <AccountCircle fontSize={'large'} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={props.menuOpen}
        onClose={(event) => props.handleMenuOpen(event as any, false)}
      >
        <MenuItem>My Account</MenuItem>
        <MenuItem>My Organization</MenuItem>
        <MenuItem>My Service Quotas</MenuItem>
        <MenuItem>My Billing Dashboard</MenuItem>
        <Divider />
        <MenuItem onClick={props.handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default memo(Profile);
