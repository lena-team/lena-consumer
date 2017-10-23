<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project Name](#project-name)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
- [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Airbnb Style Guide Setup](#airbnb-style-guide-setup)
      - [global](#global)
      - [local (project specific)](#local-project-specific)
      - [add .eslintrc (global/local)](#add-eslintrc-globallocal)
    - [MySQL Setup](#mysql-setup)
      - [install mysql (Mac)](#install-mysql-mac)
      - [start mysql](#start-mysql)
      - [create database](#create-database)
    - [npm Scripts](#npm-scripts)
      - [install](#install)
      - [start (with node)](#start-with-node)
      - [dev-start (with nodemon)](#dev-start-with-nodemon)
      - [test-server (with mocha)](#test-server-with-mocha)
      - [coverage (istanbul with mocha)](#coverage-istanbul-with-mocha)
  - [Other Information](#other-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Name

lena consumer web service

## Roadmap


## Contributing


# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage


## Requirements

- [Node 8.3.0](https://www.npmjs.com/package/node)
- [MySQL 5.7.20](https://www.mysql.com/)
- [MySQL Workbench 6.3](https://www.mysql.com/products/workbench/)

## Development

### Airbnb Style Guide Setup

#### global
```
$ npm install -g eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### local (project specific)
```
$ npm install --save-dev eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### add .eslintrc (global/local)
```
$ cat .eslintrc.js
// These rules enforce the Airbnb style guide.

module.exports = {
  extends: 'airbnb',
  env: { browser: true },
};
```

### MySQL Setup
#### install mysql (Mac)
```
$ brew install mysql
```

#### start mysql
```
$ brew services start mysql
```

#### create database
```
$ mysql -u <user> -p <password>
>
> CREATE DATABASE consumer;
>
> CREATE DATABASE test_consumer;
>
```

### npm Scripts

#### install
```
$ npm install
```

#### start (with node)
```
$ npm start
```

#### dev-start (with nodemon)
```
$ npm dev-start
```

#### test-server (with mocha)
```
$ npm test-server
```

#### coverage (istanbul with mocha)
```
$ npm coverage
```

## Other Information
