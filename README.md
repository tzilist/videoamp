# Videoamp Backend Challenge
Finds all ads on a page and recores them into a MongoDB server

## Installation
Run these commands in this order

```bash
npm install
npm start
```
## Dependencies and Notes
This server requires MongoDB to be installed on the server. It should also be noted that the server URL on the client side must be changed when deployed. Files that need to be changed are
1. `client/injector/adPost.js`
2. `client/injector/getFilters.js`
3. `client/bookmarklet.js`

Gulp was also chosen as the build-tool for this particular project. This was so that ES6 to ES5 transpilation can be used in the project, as well as the ability to modularize the client side code and bundle it via browserify.

## Detection
This server uses a small portion of [EasyList](https://easylist.github.io/). By comparing portions of the source text on elements such as iFrames and videos, ads can easily be detected. The ```filters``` folder contains a JSON version of EasyList and can easily be modified without the need for an entire server restart. While the current list is no where near complete, the idea behind this project was to create a server that was more of a 'proof of concept'.

## API
Should the user want to use this feature as an API, a request can be made to `<server url>/adparse`. This will return the JS that needs to be injected or run by the user.

## Tests
Unfortunately, time was not on my side for writing tests. I was able to write a small amount of tests, however, it is not at an acceptable level for usual development. That being said, the tests are a small start, showcasing the overall style of testing done. Mocha and Expect were used, however, Sinon should be incorporated later for fakeXMLHTTPRequest.

## Databases
MongoDB was chosen as this particular project does not require relational elements. That being said, the database portion of the project has been separated into `server/utils/insertAds.js`. Should a new user need to change the database type and/or add a more rigid schema, this can easily be done without worrying about other portions of the server code.
