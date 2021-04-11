import { faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from 'worldwideandweb-storybook/dist/components/External';
import useStyles from './List.styles';

interface IProps {
  icon: IconDefinition;
  to: string;
  text: string;
  handleDrawerClose: () => void;
}

const List: React.FC<IProps> = (props: IProps) => {
  const styles = useStyles();
  return (
    <Link to={props.to} onClick={props.handleDrawerClose}>
      <ListItem button className={styles.root}>
        <FontAwesomeIcon icon={props.icon} />
        <Typography variant={'body1'}>{props.text}</Typography>
      </ListItem>
    </Link>
  );
};

export default List;
