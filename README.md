![footwork.js](https://raw.github.com/footworkjs/footwork/master/dist/gh-footwork-logo.png)
========

### What is this repository?

This repository contains the custom lodash build utilized internally by [FootworkJS](https://github.com/footworkjs/footwork).

### Generating a new build

1. First you will need to install lodash-cli

        npm i -g lodash-cli

1. Then generate the build from the command line with this command

        lodash -d -o lodash.js exports=node include=isFunction,isObject,isString,isBoolean,isNumber,isUndefined,isArray,isNull,extend,pick,each,filter,bind,invoke,invokeMap,clone,reduce,has,result,uniqueId,map,find,omitBy,indexOf,first,values,reject,once,last,isEqual,defaults,noop,keys,merge,after,debounce,throttle,intersection,every,isRegExp,identity,includes,partial,sortBy,inRange,noConflict,capitalize

### License

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
