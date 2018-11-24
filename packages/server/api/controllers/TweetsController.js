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

    if (req.query.q) {
      const params = { q: req.query.q, count: 10 }

      const maxID = parseInt(req.query.maxID)
      const sinceID = parseInt(req.query.sinceID)

      if (maxID && maxID !== 0) params.max_id = maxID
      if (sinceID && sinceID !== 0) params.since_id = sinceID
      console.log(params)

      T.get('search/tweets', params, function(err, data, response) {
        return res.json(data)
      })
    } else {
      return res.json({})
    }
  },
}
