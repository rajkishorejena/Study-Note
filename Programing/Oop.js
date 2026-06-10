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
