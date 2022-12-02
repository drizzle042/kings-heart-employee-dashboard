import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import kingsHeartLogo from "../../Lib/assets/king_s_heart_crown.png";
import Feedback from "../../Lib/Feedback/Feedback";
import styles from "./styles/styles.module.css";
import usePost from "../../Lib/Hooks/Requests/usePost";
import { Authentication } from "../../Lib/Endpoints/Endpoints";


const SignIn = () => {
  
  localStorage.clear();
  
  const { 
    postFunc, 
    message, 
    messageSeverity,
  } = usePost(Authentication.generateAuthTokens);

  // Controls the snack bar for user feedback 
  const [feedBackMessage, setFeedBackMessage] = useState("")
  const [openSnackBar, setOpenSnackBar] = useState(false)
  function closeSnackBar(){
    setOpenSnackBar(false)
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (message?.authToken){
      setOpenSnackBar(true);
      setFeedBackMessage(message?.message)
      localStorage.setItem("user-tokens", String(message?.authToken))
      window.setTimeout(() => {
        navigate("/overview")
      }, 3000)
    } else if (message?.message) {
        setOpenSnackBar(true);
        setFeedBackMessage(message?.message)
    }
  // eslint-disable-next-line
  }, [message])

  const submitForm = (formData) => {
    postFunc("POST", "application/json", JSON.stringify(formData))
  };

  const [formData, setFormData] = useState({});

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={kingsHeartLogo} alt="Jureb" />
          </div>
          <h2>Welcome Back</h2>
          <section className={styles.contentSection}>
              <div className={styles.inputWrapper}>
                <TextField
                  size="medium"
                  placeholder="Enter email address"
                  type="email"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }}
                  label="Email Address"
                  fullWidth={true}
                  name={"email"}
                />
              </div>
              <div className={styles.inputWrapper}>
                <TextField
                  size="medium"
                  placeholder="************"
                  type="password"
                  label="Password"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value
                    })
                  }}
                  fullWidth={true}
                  name={"password"}
                />
              </div>
              <div>
              <Link to="/request-password-reset" style={{display: "block"}}>
                <p style={{color: "blue", textAlign: "right"}}>Forgot Password?</p>
              </Link>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  size="medium"
                  sx={{
                    backgroundColor: "#1F53D7"
                  }}
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    submitForm(formData)
                  }}
                >
                  Login
                </Button>
              </div>
          </section>
          <Feedback 
            severity={messageSeverity} 
            message={feedBackMessage}
            open={openSnackBar}
            handleClose={closeSnackBar} />
        </div>
      </main>
    </div>
  );
};

export default SignIn;
