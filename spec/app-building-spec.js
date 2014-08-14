require('fibrous/lib/jasmine_spec_helper');

// You may need to call if the test dies
// ulimit -n 4096

var exec = require('child_process').exec;
var NwBuilder = require('node-webkit-builder');

jasmine.DEFAULT_TIMEOUT_INTERVAL = (1000*60*5); // 5 Minuten
//jasmine.getEnv().defaultTimeoutInterval = 15;

describe("updater", function () {
  beforeEach(function(done){
    console.log("We are going too build two apps");
    // Create an app
    var nw1= new NwBuilder({
      files: './testapp/**/**', // use the glob format
      platforms: ['win','osx'],
      version: "0.10.2",
      buildDir: "./build/TestApp-1"
    });
    // var nw2 = new NwBuilder({
    //   files: './testapp/**/**', // use the glob format
    //   platforms: ['win','osx'],
    //   version: "0.10.2",
    //   buildDir: "./build/TestApp-2"
    // });

    //nw1.on('log',  console.log);
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
    
    nw1.build(function(err) {
      if(err) { 
        console.log("Error: ", err); 
      } else {
        console.log("Built is done!!!!! ");
        done();
      }
    });
  });

  it("should download and update", function () {
    console.log("More Juhu!");
    var openCmd = "open ./build/TestApp-1/TestApp/osx/TestApp.app";
    //exec.sync("open ./build/TestApp-1/TestApp/osx/TestApp.app");
    
    exec(openCmd, function(err, stdo, stder){
      console.log(arguments);
      console.log("err:", err);
      console.log("stdo:", stdo);
      console.log("stder:", stder);
      console.log("opened and updated");
    });

    //var u = new Updater();
    expect(false).toBe(false);
  });

}); 



// TESTSTUFF 
// 
// https://github.com/mhevery/jasmine-node/issues/344
// https://github.com/mhevery/jasmine-node/issues/240
// 
// 
// describe("updater", function () {
//   beforeEach(function(done){
//     console.log("We are going too build two apps");

//     setTimeout(function(){
//       console.log("juhu");
//       done();
//     }, 100);
//   }, 10);

//   it("should download and update", function () {
//     var u = new Updater();
//     expect(false).toBe(false);
//   }, 10);

// }); 
// 

describe("updater", function () {
  beforeEach(function(done){
    console.log("We are going too build two apps");

    setTimeout(function(){
      console.log("juhu");
      done();
    }, 100);
  }, 10);

  it("should download and update", function () {
    var u = new Updater();
    expect(false).toBe(false);
  }, 10);
}); 