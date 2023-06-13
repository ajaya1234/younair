import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!email) {
      setOutput("*Email is required");
      return;
    } else if (!password) {
      setOutput("*Password is required");
      return;
    }

    const userDetails = { email: email, password: password };
    axios
      .post("http://16.16.91.234:3003/api/login", userDetails)
      
      .then((response) => {
      console.log("sadasdasd",response)
        if (response.data.token !== "error") {
          const responseData = response.data.userDetails;
          localStorage.setItem("_id", response.data.data._id);
          localStorage.setItem("username", response.data.data.username);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("password", response.data.data.password);
          localStorage.setItem("confirm_password", response.data.data.confirm_password);
          localStorage.setItem("gender", response.data.data.gender);
          localStorage.setItem("role", response.data.data.role);

          response.data.data.role === "0" ? navigate("/") : navigate("/");
        } else {
          if (response.data.message === "User not found") {
            setOutput("Invalid user. Please register first.");
          } else {
            setOutput("Invalid user or verify your account.");
          }
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        console.log(err);
        setOutput("Incorrect email & password");
      });
  };
  return (
    <>
    <div class="login-main-body">
    <section className="login-main-wrapper">
  <div className="container-fluid pl-0 pr-0">
    <div className="row no-gutters">
      <div className="col-md-12 p-5 bg-white full-height">
        <div className="login-main-left">
          <div className="text-center mb-5 login-main-left-header pt-4">
            <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
            <h5 className="mt-3 mb-3">Login</h5>
            
          </div>
          <font style={{ "color": "blue" }}>{output}</font>
              <form onSubmit={handleSubmit} text="center">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email" placeholder="Email Addres" value={email} onChange={e => setEmail(e.target.value)}
                className="form-control"
 
              />
              <br/><span className="form-validation" style={{ color: "red" }}></span>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                id="form-login-password-2"  name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                className="form-control"

              />
              <br/><span className="form-validation" id='unicpass'  style={{ color: "red" }}></span>
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline btn-block btn-lg"
                    style={{
                      backgroundColor: "#000080",
                      color: "white",
                      borderRadius: 20
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center mt-5">
            <p className="light-gray">
              <Link to="/forgotpassword">Forgot Password</Link>
            </p>
            <p className="light-gray">
              Don’t have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
        <Link
          className="oauth-container btn darken-4 white black-text"
          to="#"
          style={{
            position: "relative",
            left: 320,
            marginBottom: 2,
            marginRight: 8,
            textTransform: "none"
          }}
        >
          <div className="left">
            <img
              width="20px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />{" "}
            Login with Google
          </div>
        </Link>
    
        <Link
          className="oauth-container btn darken-4 white black-text"
          to="#"
          style={{ position: "relative", left: 420, textTransform: "none" }}
        >
          <div className="left">
            <img
              width="30px"
              style={{ marginBottom: 2, marginRight: 2 }}
              alt="Google sign-in"
              src="img/facebook.png"
            />
            Login with Facebook
          </div>
        </Link>
      </div>

    </div>
  </div>
</section>
</div>


    </>
  )
}

export default Login