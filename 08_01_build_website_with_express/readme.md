# Steps to set up the project

1. Init package.json file

```
npm init -y
```

2. Install express

```
npm install express
```

3. Install dev tools eslint for code style check

```
npm install eslint --save-dev
```

4. Init eslint configuration

```
npx eslint --init
```

5. Install prettier for formatting code

```
prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

6. Install eslint and prettier plugin in VS code

7. Change setting of VS code

- Go to Code -> Preference -> Setting
- Enter "auto fix on save" in search bar. Make sure it's enabled.
- Enter "format on save" in search bar. Make sure it's enabled.
- Enter "default formatter" in search bar. Select Prettier - code formatter

8. Change .eslintrc.json config file

- add prettier in extends
- add prettier as plugins

9. Add .prettierrc config file

```
{
  "trailingComma": "es5",
  "printWidth": 100,
  "singleQuote": true
}
```

10. Install nodemon

```
npm install -D nodemon
```

11. Change scripts in package.json file

```
    "dev": "nodemon server.js"
```
