import React from 'react'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import withRoot from '../withRoot'
import Layout from '../components/layout'

const styles = {
  tweets: {
    maxWidth: 600,
    marginTop: 8,
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
    cursor: 'pointer',
  },
  cardContent: {
    padding: '8px !important',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImage: {
    borderRadius: '50%',
  },
  subCard1: {
    padding: 5,
  },
  subCard2: {
    padding: 5,
  },
  subCard2Title: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    fontWeight: 900,
  },
  subCard2TitleStyle: {
    paddingLeft: 2,
    paddingRight: 2,
  },
}

const TweetsPage = ({ classes }) => (
  <Layout title="Reactify Tweets">
    <div className={classes.tweets}>
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <div className={classes.seeNew}>
            <Typography color="textSecondary" gutterBottom>
              See new Tweets
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardContainer}>
            <div className={classes.subCard1}>
              <img
                alt=""
                className={classes.userImage}
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                width="48"
                height="48"
              />
            </div>
            <div className={classes.subCard2}>
              <div className={classes.subCard2Title}>
                <Typography
                  className={classNames(
                    classes.userName,
                    classes.subCard2TitleStyle
                  )}
                  gutterBottom
                >
                  Prateek Kumar Singh
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  @prtkkmrsngh
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  &middot;
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  2m
                </Typography>
              </div>
              <div className={classes.subCard2Body}>
                <Typography gutterBottom>
                  Republicans and Democrats MUST come together, finally, with a
                  major Border Security package, which will include funding for
                  the Wall. After 40 years of talk, it is finally time for
                  action. Fix the Border, for once and for all, NOW!
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardContainer}>
            <div className={classes.subCard1}>
              <img
                alt=""
                className={classes.userImage}
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                width="48"
                height="48"
              />
            </div>
            <div className={classes.subCard2}>
              <div className={classes.subCard2Title}>
                <Typography
                  className={classNames(
                    classes.userName,
                    classes.subCard2TitleStyle
                  )}
                  gutterBottom
                >
                  Prateek Kumar Singh
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  @prtkkmrsngh
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  &middot;
                </Typography>
                <Typography
                  className={classes.subCard2TitleStyle}
                  color="textSecondary"
                  gutterBottom
                >
                  2m
                </Typography>
              </div>
              <div className={classes.subCard2Body}>
                <Typography gutterBottom>
                  Republicans and Democrats MUST come together, finally, with a
                  major Border Security package, which will include funding for
                  the Wall. After 40 years of talk, it is finally time for
                  action. Fix the Border, for once and for all, NOW!
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(TweetsPage))
