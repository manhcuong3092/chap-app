import Add from "../img/addAvatar.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lmao Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have already account? Login</p>
      </div>
    </div>
  );
}

export default Register;
