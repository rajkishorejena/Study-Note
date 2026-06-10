class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}123`;
  }

  lowerCaseUserName() {
    return `${this.username.toLowerCase()}`;
  }
}

const chai = new User("Rajkishroe", "raj@gmail.com", "1234");
console.log(chai.encryptPassword());
console.log(chai.lowerCaseUserName());

class Teacher extends User {
  constructor(username, email, password, subject) {
    super(username, email, password);
    this.subject = subject;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const tea = new Teacher("Chai", "tea@teacher.com", "456", "JavaScript");
tea.addCourse();
console.log(tea.lowerCaseUserName()); // chai (inherited from User)
console.log(tea.encryptPassword());

console.log(tea instanceof Teacher); // true
console.log(tea instanceof User); // true

/**
 * Getters & Setters , are special accessor methods that let you intercept and control how a class property is read and written,
 */
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set email(value) {
    this._email = value;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return `${this._password}rajkishore`;
  }
}

const raj = new User("rajkishore@jena", "raj@123");
console.log(raj.email);
console.log(raj.password);
