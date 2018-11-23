import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import withRoot from './../withRoot'
import Layout from './../components/layout'

const styles = {
  tweets: {
    maxWidth: 600,
    marginTop: 15,
    margin: '0 auto',
  },
  card: {
    borderRadius: 0,
    borderLeft: '1px solid #e6ecf0',
    borderRight: '1px solid #e6ecf0',
    backgroundClip: 'padding-box',
    borderBottom: '1px solid #e6ecf0',
  },
  seeNew: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const IndexPage = ({ classes }) => (
  <Layout title="Reactify Tweets">
    <div className={classes.tweets}>
      <Card className={classes.card} elevation={0}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
