import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ApartmentIcon from '@material-ui/icons/Apartment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProject, loadProjects } from '../actions/projectActions';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ProjectsList(props) {
  const classes = useStyles();

  let user = JSON.parse(sessionStorage.user);

  let projects = props.projects;

  async function onDelete(event, projectName) {
    event.preventDefault();
    await deleteProject(projectName);

    await loadProjects(user.data.userId);
  }


  return (
    <div className={classes.root}>
      <h2>Lista de Proyectos</h2>
      <List component="nav" aria-label="projects list">

        {projects.map((project) => (

          <ListItem
            key={project._id}
            button
          >
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary={project.projectName} />
            <IconButton aria-label="delete" onClick={(event) => onDelete(event, project.projectName)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>

        ))}

      </List>

    </div>
  );
}