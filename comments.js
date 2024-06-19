// Create web server
var http = require('http');
// Create a new object
var member = new Object();
// Add properties to the object
member.name = "John";
member.age = 30;
member.skills = ["HTML", "CSS", "JavaScript"];
member.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(member.name + " is " + member.age + " years old and has skills in " + member.skills.join(", "));
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');
// Output:
// Server running at http://localhost:3000/
// Open the browser and go to http://localhost:3000/
// John is 30 years old and has skills in HTML, CSS, JavaScript