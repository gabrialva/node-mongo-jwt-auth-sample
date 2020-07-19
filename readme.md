# node-mongo-jwt-auth

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cecfafc8595040109b5fcbc0494471db)](https://www.codacy.com/manual/GHOSCHT/node-mongo-jwt-auth?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GHOSCHT/node-mongo-jwt-auth&amp;utm_campaign=Badge_Grade)

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
