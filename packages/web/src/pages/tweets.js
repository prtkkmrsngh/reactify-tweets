import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import withRoot from '../withRoot'
import Layout from '../components/layout'
import { requestApiData } from './../actions'

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

const getParam = (url, name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var regexS = '[\\?&]' + name + '=([^&#]*)'
  var regex = new RegExp(regexS)
  var results = regex.exec(url)
  if (results == null) return ''
  else return results[1]
}

const TweetsPage = ({ classes, requestApiData, data }) => {
  return (
    <Layout title="Reactify Tweets">
      {data.statuses ? (
        <div className={classes.tweets}>
          <Card className={classes.card} elevation={0}>
            <CardContent className={classes.cardContent}>
              <div
                className={classes.seeNew}
                onClick={() =>
                  requestApiData(
                    data.search_metadata.query,
                    11,
                    0,
                    getParam(data.search_metadata.refresh_url, 'since_id')
                  )
                }
              >
                <Typography color="textSecondary" gutterBottom>
                  See new Tweets
                </Typography>
              </div>
            </CardContent>
          </Card>
          {data.statuses.map((s, i) => {
            return (
              <Card key={i} className={classes.card} elevation={0}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.cardContainer}>
                    <div className={classes.subCard1}>
                      <img
                        alt=""
                        className={classes.userImage}
                        src={
                          s.user.profile_image_url
                            ? s.user.profile_image_url
                            : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png'
                        }
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
                          {s.user.name}
                        </Typography>
                        <Typography
                          className={classes.subCard2TitleStyle}
                          color="textSecondary"
                          gutterBottom
                        >
                          @{s.user.screen_name}
                        </Typography>
                      </div>
                      <div className={classes.subCard2Body}>
                        <Typography gutterBottom>{s.text}</Typography>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
          <Card className={classes.card} elevation={0}>
            <CardContent className={classes.cardContent}>
              <div
                className={classes.seeNew}
                onClick={() => {
                  requestApiData(
                    data.search_metadata.query,
                    11,
                    getParam(data.search_metadata.next_results, 'max_id')
                  )
                }}
              >
                <Typography color="textSecondary" gutterBottom>
                  Load More
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div />
      )}
    </Layout>
  )
}

const mapStateToProps = state => ({ ...state.data })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch)

const Tweets = withRoot(withStyles(styles)(TweetsPage))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets)
