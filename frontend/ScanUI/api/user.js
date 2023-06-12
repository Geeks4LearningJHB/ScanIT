class Users {
  constructor(email, password) {
    (this.email = email)((this.password = password));
  }

  async getUser() {
    return await fetch(
      `http://localhost:8000/api/users/read/${this.userName}&&${this.password}`
    )
      .then((response) => response)
      .catch((err) => err);
  }
}

export default Users;
