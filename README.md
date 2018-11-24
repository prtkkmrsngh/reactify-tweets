# Reactify Tweets

## ENV setup

Create .env in packages/server/

```sh
CONSUMER_KEY=****
CONSUMER_SECRET=****
ACCESS_TOKEN=****
ACCESS_TOKEN_SECRET=****
```

Create .env in root of web packages/web/

```sh
REACT_APP_SERVER_URL=**URL-OF-SAILS-SERVER**
```

## development

```sh
git clone https://github.com/prtkkmrsngh/reactify-tweets.git
cd reactify-tweets
yarn install
yarn dev
```

## production

```sh
yarn build
yarn start
```
