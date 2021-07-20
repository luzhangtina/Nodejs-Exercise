# Npm Command

## Check Nodejs Version
```
node -v
```

## Init package.json File
Init using interaction mode
```
npm init
```

Init using default values
```
npm init -y
```

## Install new packages

***Install packages in the project***
```
npm install packagename1 packagename2 ...
```
For example
```
npm install react express
```

***Install dev dependencies***  
It is installed as dev tools. It won't be included in the production build, but used throughout development. When compling the production build, dev dependencies won't be included.
```
npm install packagename1 packagename2 ... --save-dev
```

***Install package globally***  
It will be installed in the system: /usr/local/lib/node/ OR /usr/local/lib/node_modules/
```
npm install -g packagename1 packagename2 ...
```

***Install a specific version of package***
```
npm install packagename@packageversion
```
For example
```
npm install eslint@5.2.0
```

## Check outdated packages
***Check project level outdated package***   
```
npm outdated
```

***Check outdated package globally***   
```
npm outdated -g
```

## Update packages
***Use npm install to udpate packages***   
```
npm install packagename@version [-g]
```

## Remove packages 
```
npm uninstall packagename [-g]
```

## Manage Npm cache
***Generate a cache verify report***
```
npm cache verify
```

***Clean cache***
```
npm cache clean --force
```

# package.json
## Semantic versioning
Version format: 1.5.2 -> MainRelase.Minor.Patch   
Caret: ^1.x.x -> All minor and patches are OK   
Tilde: ~1.5.x -> All patches only

