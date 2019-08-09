import React from 'react';
import PropTypes from 'prop-types';

//mui
import { withStyles } from '@material-ui/core/styles';
import {Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'inherit',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

const SearchBox = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search V-tech" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBox);