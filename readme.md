# node-mongo-jwt-auth

A boilerplate login system in Node.js for my React applications

## Getting Started

### Installation

1.  Clone the repo

```sh
git clone https://github.com/GHOSCHT/node-mongo-jwt-auth.git
```

2.  Install all required modules

```sh
yarn
```

4.  Set environment variables listed below:

-   **PORT**
-   **DB_CONNECT** (mongodb uri)
-   **JWT_ACCESS_SECRET**, **JWT_REFRESH_SECRET**, **JWT_ACCESS_LIFE**, **JWT_REFRESH_LIFE** (lifetime in '1min' / '1h')

## Development server

Start the development server

```sh
yarn start
```

## Built With

-   [Express](https://expressjs.com/)
-   [mongoose](https://mongoosejs.com/)
-   [bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken/)

## License

Distributed under the MIT License. See `LICENSE` for more information.
