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
import Highlight from 'react-highlight.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  card: {
    marginBottom: '10px',
  },
}));

function App() {
  const classes = useStyles();

  const programmaticExample = () => {
    const intro = introJs();
    intro.setOptions({
      disableInteraction: true,
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
    intro.start();
  }

  const htmlExample = () => {
    const intro = introJs();
    intro.start();
  };

  const exampleHTMLCode = `<h1 data-step="1" data-intro="This is a tooltip!">Example</h1>`;
  const quickStart = `
function startTour() {
  const tour = introJs();
  tour.start();
}`;
  const importCode = `
import introJs from 'intro.js';
import 'intro.js/introjs.css';`;
  const automaticPositionCode = `
tour.setOption('tooltipPosition', 'auto');
tour.setOption('positionPrecedence', ['left', 'right', 'top', 'bottom']);`;

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

        <Card variant="outlined" className={classes.card} data-intro="Last example" data-step={3}>
          <CardContent>
            <Typography variant="h3" gutterBottom data-intro="Example" data-step={1}>
              Quick Start with HTML
            </Typography>
            <Highlight language="javascript">
              {quickStart}
            </Highlight>
            <br />
            <Typography data-intro="More examples" data-step={2}>
              And in your HTML write:
              <br />
              <Highlight language="javascript">
                {exampleHTMLCode}
              </Highlight>
              <br />
              Be sure to include <code>data-step</code> and <code>data-intro</code> for each element 
              you want to highlight.
              Look at the other attributes you can define by looking at the <Link href="https://introjs.com/docs/intro/attributes/">documentation.</Link>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={htmlExample}>
              Start Tour
            </Button>
          </CardActions>
        </Card>

        <Card variant="outlined" className={classes.card} id="step4">
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Write Programmatic Tours
            </Typography>
            <Typography>
              One way to write tours is writing JavaScript and JSON.
              This is the 'programmatic' way of writing tours in Intro.js.
              <br />
              Look at the <Link href="https://introjs.com/docs/intro/options/">documentation</Link> for a list of options to Intro.js
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
              <Highlight language="javascript">
                {importCode}
              </Highlight>
              Alternately, use the <Link href="https://www.npmjs.com/package/intro.js-react">intro.js-react library</Link>
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
              <Highlight>
                {`position: 'right'`}
              </Highlight>
              To prioritize how the automatic positioning works:
              <Highlight language="javascript">
                {automaticPositionCode}
              </Highlight>
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" classNme={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>Further Topics of Discussion</Typography>
            <Typography>
              <List>
                <ListItem>
                  Using Intro.js with Shadow DOMs
                </ListItem>
                <ListItem>
                  Using Intro.js with dialog elements
                </ListItem>
                <ListItem>
                  Learning about stacking contexts
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
        
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h3" gutterBottom>Acknowledgments</Typography>
            <Typography>
              <List>
                <ListItem>
                  React and Create React App
                </ListItem>
                <ListItem>
                  Material UI
                </ListItem>
                <ListItem>
                  Thanks to Becky's family for listening to this presentation
                </ListItem>
                <ListItem>
                  Thanks to James for making this possible.
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
