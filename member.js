function skillsMember() {
  // Create a new object
  var member = new Object();

  // Add properties to the object
  member.name = "John";
  member.age = 30;
  member.skills = ["HTML", "CSS", "JavaScript"];
  member.sayHello = function() {
    console.log("Hello, I'm " + this.name);
  };

  return member;
}