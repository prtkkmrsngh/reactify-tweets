# Reactify Tweets

## ENV setup

Create .env in root of packages/server/

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

## clone repository

```sh
git clone https://github.com/prtkkmrsngh/reactify-tweets.git
```

## development

```sh
cd reactify-tweets
yarn install
yarn dev
```

## production

```sh
cd reactify-tweets
yarn install
yarn build
yarn start
```
