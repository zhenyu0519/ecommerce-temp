<a href="https://ecommerce-temp-demo.herokuapp.com/"><img src="https://github.com/zhenyu0519/ecommerce-temp/blob/master/client/public/crwn-192x192.png" title="Ecomerce Website Template" alt="Snow Pea Music"></a>

# Ecommerce Website Template 

<a href="https://ecommerce-temp-demo.herokuapp.com/"><img src="https://github.com/zhenyu0519/ecommerce-temp/blob/master/client/public/demo.jpg" title="Ecomerce Website Template" alt="Ecomerce Website Template"></a>

---

![](https://img.shields.io/github/issues/zhenyu0519/ecommerce-temp?color=red&style=flat-square)
![](https://img.shields.io/github/forks/zhenyu0519/ecommerce-temp?color=green&style=flat-square)
![](https://img.shields.io/github/stars/zhenyu0519/ecommerce-temp?color=yellow&style=flat-square)
![](https://img.shields.io/github/license/zhenyu0519/ecommerce-temp?style=flat-square)
![](https://img.shields.io/github/repo-size/zhenyu0519/ecommerce-temp?color=orange&style=flat-square)
![](https://img.shields.io/github/languages/top/zhenyu0519/ecommerce-temp?color=blue&style=flat-square)


## Table of Contents 

  - [About](#about)
  - [Production](#production)
  - [Open Sourced](#open-sourced)
  - [Before Start](#before-start)
  - [Install](#install)
  - [Start](#start)
  - [Preview](#preview)
  - [License & Copyright](#license-&-copyright)

---

## About
 > This is a template website I built for e-commerce purpose. The website allows you to create or login account by using Firebase authentication (Oauth). The created user will be stored in firebase database. You can also select items from given and add to or delete from cart and process the payment.

## Open Sourced
> The project is open sourced and it is not for commercial use! It won't charge anything. 

## Before Start 
* Firebase account required ( [register here](https://firebase.google.com/) )
* Go to firebase console page and register your app, then you will get your project's configuration in the settings
* Copy and paste the configuration setting and replace my configuration setting with it under client>src>firebase>firebase.js 
* To use stripe, you need stripe account ( [register here](https://dashboard.stripe.com/register) )
* Get stripe secret key and replace my key with it under client>src>components>stripe-button>stripePublishableKey.js
* Have knowledge about Reactjs (hooks + class), React-Redux, Redux-Thunk, Axios, how Nodejs, and NPM

## Install
  Install backend dependences, navigate to **root** folder then
  ```
  npm install
  ```
  Install frontend dependences, navigate to **client** folder then
  ```
  npm install
  ```
  Create .env file under root folder, copy paste the content below and replace client id and secret with your own, save.
  ```
  STRIPE_SECRET_KEY=YOUR_OWN_SECRET_KEY,
  ```

## Start
  To run on local server, navigate to root directory
  ```
  npm run dev
  ```

## Preview
![demo](https://github.com/zhenyu0519/ecommerce-temp/blob/master/client/public/demo.gif)

---

## Production
> The website has already deploied on Heroku. Due the free server ( Dyno ), there are some constrains such as the server will put the website if it dose not receive any traffic in 1 hour. So when you access the web, you might need to wait about 15 ~ 20 seconds to wake it up.

---
## License & Copyright

![](https://img.shields.io/github/license/zhenyu0519/ecommerce-temp?style=flat-square)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://github.com/zhenyu0519/ecommerce-temp" target="_blank">Jeffrey Zhang</a>.