let d = new Date(); //UTC date: 2020-07-06T13:00:16.033Z
d = d.toString(); //Mon Jul 06 2020 09:01:06 GMT-0400 (Eastern Daylight Time)

let date02 = new Date();
date02 = date02.toISOString(); //2020-07-06T13:04:08.630Z
date02 = date02.
            replace(/T/, '_').      // replace T with a space
            replace(/:/, '-').
            replace(/:/, '-'). 
            replace(/\..+/, '')     // delete the dot and everything after

console.log(date02);

// in user's timezone:
var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
localISOTime = localISOTime.
                replace(/T/, ' ').
                replace(/\..+/, '')
console.log(localISOTime);