/**
 * TweetsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetch: function(req, res) {
    let Twit = require('twit')

    let T = new Twit({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token: process.env.ACCESS_TOKEN,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    })

    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function(
      err,
      data,
      response
    ) {
      return res.json(data)
    })
  },
}
