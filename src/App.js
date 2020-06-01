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
import introJs from 'intro.js';
import 'intro.js/introjs.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  card: {
    width: '50%',
    marginBottom: '10px',
  },
}));

function App() {
  const classes = useStyles();

  const programmaticExample = () => {
    console.log('started');
    const intro = introJs();
    intro.setOptions({
      steps: [
        { 
          intro: "This step isn't connected to any particular element"
        },
        {
          element: '#step1',
          intro: "This step is connected to an element with id 'step1'"
        },
        {
          element: '#step2',
          intro: "This step is positioned to the right",
          position: 'right'
        },
        {
          element: '#step3',
          intro: 'This step is positioned to the left and shows another way of selecting elements.',
          position: 'left'
        },
        {
          element: '#step4',
          intro: "This step is positioned on the bottom.",
          position: 'bottom'
        },
        {
          element: '#step5',
          intro: 'This is the last step.'
        }
      ]
    });

    console.log('sigh');
    console.log(intro);

    intro.start();
    console.log('started hypothetically');


  }
  const startBracket ="{";
  const endBracket = "}";
  const exampleHTMLCode = `<h1 data-step="1" data-intro="This is a tooltip!">Example</h1>`;

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Introduction to Intro.js
        </Typography>

        <Card variant="outlined" className={classes.card} id="step1"> 
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Helpful Resources
            </Typography>
            <List>
              <ListItem>
                <Link href="https://github.com/usablica/intro.js">
                  Intro.js GitHub
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

        <Card variant="outlined" className={classes.card} id="step2">
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Use NPM to Install Intro.js
            </Typography>
            <Typography>
              You can install Intro.js using the node package manager.
              <br />
              <code>npm install intro.js --save</code>
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={classes.card} id="step3">
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

        <Card variant="outlined" className={classes.card} >
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Quick Start with HTML
            </Typography>
            <Typography>
              <code>function startTour() {startBracket}</code><br />
              <code>var tour = introJs()</code> <br />
              <code>tour.start();</code> <br />
              <code>{endBracket}</code>
            </Typography>
            <br />
            <Typography>
              And in your HTML write:
              <br />
              <code>{exampleHTMLCode}</code>
              <br />
              Be sure to include <code>data-step</code> and <code>data-intro</code> for each element 
              you want to highlight.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={classes.card} id="step4">
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Write Programmatic Tours
            </Typography>
            <Typography>
              One way to write tours is writing JavaScript and JSON.
              This is the 'programmatic' way of writing tours in Intro.js.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={programmaticExample}>
              Start Tour
            </Button>
          </CardActions>
        </Card>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>Using Intro.js with React</Typography>
            <Typography>
              <code>import introJs from 'intro.js';</code>
              <br />
              <code>import 'intro.js/introjs.css';</code>
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>Position the tooltips</Typography>
            <Typography>
              Note that it will only position itself to the indicated position so long as there is space.
              <br /> <br />
              To specify the tooltip position to the right:
              <br />
              <code>position: 'right'</code>
              <br /> <br />
              To prioritize how the automatic positioning works:
              <br />
              <code>tour.setOption('tooltipPosition', 'auto');</code>
              <br />
              <code>tour.setOption('positionPrecedence', ['left', 'right', 'top', 'bottom']);</code>

            </Typography>
          </CardContent>
        </Card>

        <Typography>
          TODO comment about Shadow DOMs
          TODO comment about dialogs
          TODO comment about stacking context
        </Typography>
        
      </Container>
    </div>
  );
}

export default App;
