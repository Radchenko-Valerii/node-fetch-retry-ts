# External wrapper utill for retries, based on node-fetch lib

##### Source js code - [node-fetch-retry](https://github.com/greatjapa/node-fetch-retry "GitHub Link")

### USAGE:
#### First of all, install the [node-fetch](https://www.npmjs.com/package/node-fetch "NPM Link") official lib

```bash
npm i node-fetch
```

#### Then, you can just copy the content from ./index.ts to your utills folder or another place in project. 
#### ! Also copy the types from ./types folder
#### ! Check the paths on imports relatively your project


#### Then you can use the default exported function from ./index.ts as a wrapper over node-fetch

##### Dependencies:
###### [typescript](https://www.npmjs.com/package/typescript "NPM Link")
###### [ts-node](https://www.npmjs.com/package/ts-node "NPM Link")
###### [node-fetch](https://www.npmjs.com/package/node-fetch "NPM Link")