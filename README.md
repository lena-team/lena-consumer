# Project Name

lena consumer web service

## Roadmap


## Contributing


# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Airbnb Style Guide Setup](#Airbnb Style Guide Setup)
    1. [MySQL Setup](#MySQL Setup)

## Usage


## Requirements

- Node 8.3.0
- MySQL 5.7.20

## Development

### Airbnb Style Guide Setup
```
# global
npm install -g eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# local (project specific)
npm install --save-dev eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# add .eslintrc (global/local)
$ cat .eslintrc.js
// These rules enforce the Airbnb style guide.

module.exports = {
  extends: 'airbnb',
  env: { browser: true },
};
```

### MySQL Setup
```
# install mysql (Mac)
brew install mysql

# start mysql
brew services start mysql

# create database
mysql -u <user> -p <password>
> CREATE DATABASE consumer;
> CREATE DATABASE test_consumer;
```

## Other Information
