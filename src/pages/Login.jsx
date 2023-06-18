import Add from "../img/addAvatar.png";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lmao Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign up</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
