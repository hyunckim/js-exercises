function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function (course) {
  for(let i = 0; i < this.courses.length; i++){
    if(this.courses[i].conflictsWith(course)){
      throw "Time Conflict!";
    }
  }
  this.courses.push(course);
  course.enrolledStudents.push(this);
};

Student.prototype.courseLoad = function () {
  let c = {};
  this.courses.forEach((course) => {
    if (c[course.department]){
      c[course.department] += course.numCredits;
    } else {
      c[course.department] = course.numCredits;
    }
  });

  return c;
};

function Course(name, department, numCredits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.enrolledStudents = [];
  this.days = days;
  this.timeBlock = timeBlock;
}

Course.prototype.students = function () {
  return this.enrolledStudents;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function (course) {
  if ( this.timeBlock === course.timeBlock ) {
    for (let i = 0; i < this.days.length; i++) {
      if ( course.days.includes(this.days[i])) { return true; }
    }
  }
  return false;
};


let j = new Student("Jesse", "F");
let h = new Student("Hyun", "K");

let a = new Course("algebra", "math", 4, ['mon', 'wed', 'fri'], 1);
let c = new Course("calculus", "math", 3, ['mon'], 1);
let p = new Course("Python", "CS", 5);

console.log(a.conflictsWith(c));

try{
j.enroll(a);
j.enroll(c);
j.enroll(p);

h.enroll(p);
h.enroll(a);
} catch(e) {
  console.log(e);
}

console.log(j.courseLoad());
console.log(h.courseLoad());
