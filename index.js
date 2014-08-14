var NwBuilder = require('node-webkit-builder');

console.log("Hello");

var nw1= new NwBuilder({
  files: './testapp/**/**', // use the glob format
  platforms: ['win','osx'],
  version: "0.9.2",
  buildDir: "./build/TestApp-1"
});
// var nw2 = new NwBuilder({
//   files: './testapp/**/**', // use the glob format
//   platforms: ['win','osx'],
//   version: "0.10.2",
//   buildDir: "./build/TestApp-2"
// });

nw1.on('log',  console.log);
//nw2.on('log',  console.log);

// Build retruns a promise
// nw1.build().then(function () {
//   console.log('TestApp-1 Done');
//   // nw2.build().then(function () {
//   //   console.log('TestApp-2 Done');
//   //   done(); 
//   // }).catch(function (error) {
//   //   console.error("Error:", error);
//   //   done(error);
//   // }); 
// }).catch(function (error) {
//   console.log("Error:", error);

//     console.error("Error:", error);
//     //done(error);
// });

nw1.build(function(err, data) {
  if(err) { 
    console.log("Error: ", err); 
  } else {
    console.log("Data: ", data);
  }
});