import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: '50%',
  },
}));

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Introduction to Intro.js
        </Typography>
        <Card variant="outlined" className={classes.card}> 
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Helpful Resources
            </Typography>
            <List>
              <ListItem>
                <Link href="https://github.com/usablica/intro.js">
                  Intro.js GitHub page
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://introjs.com/">
                  Intro.js Website
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>
       
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Download Intro.js
            </Typography>
            <Typography>
              Intro.js doesn't have any dependencies. All you need is to add the JS and CSS file.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              href="https://github.com/usablica/intro.js/releases"
            >
              GitHub Releases
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Use NPM to Install Intro.js
            </Typography>
            <Typography>
              Alternately, you can install Intro.js using the node package manager.
              <br />
              <code>npm install intro.js --save</code>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
