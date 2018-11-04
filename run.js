var casper = require("casper").create();

let userid = "";
let password = "";

var login_url = "https://www.smbc-card.com/memx/web_meisai/top/index.html";
var usage_url = "https://www.smbc-card.com/memx/web_meisai/top/index.html?p01=201611#info13";

casper.start(login_url, function(){
  this.echo("Login page");
}).viewport(800,1000);

casper.wait(5000, function(){
  this.fill("form#FRM_cGMVC800100U010001-0001", {
    userid: userid,
    password: password
  }, true);
});

casper.wait(5000, function(){
  this.thenOpen(usage_url, function(){
    this.wait(3000, function(){
      this.click("a#vp-view-VC0501002_RS0001_U050100_btn-03");
    });
  });
});

casper.then(function(){
  this.capture("result.png");
  this.echo(this.getHTML("body"));
  // require("utils").dump({plop: 42});
});

casper.then(function(){
  this.echo("finished");
});

casper.run();
