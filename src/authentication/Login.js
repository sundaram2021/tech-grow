import React from "react";
import { Link } from "react-router-dom";
import "../CSS/form.css";
// import { app, database } from "./FirebaseConfig";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
// import { collection, getDocs } from 'firebase/firestore/lite';

function Login() {
  // let user = true;
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  // const collectionRef = collection(database, "users");

  const [toggleClass, setToggleClass] = React.useState(false);

  const handleForm = (e) => {
    setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };

  const annoyingSubmitButton = () => {
    if (form.password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };

  let auth = getAuth();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch(() => {
        alert("Incorrect Credentials");
      });
  };

  // const getData = () => {
  //   getDocs(collectionRef)
  //   .then((res) => {
  //     const userEmail = res.docs.map((item) => {
  //       return item.data().email;
  //     })
  //     for(let i=0;i<userEmail.length;i++){
  //       if(form.email === userEmail[i]){
  //         user = true;
  //       }
  //     }
  //   })
  // }

  return (
    <>
      <section className="form-section">
        <h1 className="heading">Login</h1>
        <form
          autoComplete="false"
          //   action="https://formspree.io/f/meqvlgqr"
          //   method="POST"
        >
          <div className="input-block">
            <label className="label">
              Email <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.email.length < 6 ? "wrong-input" : "correct-input"
              }`}
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="abc@gmail.com"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Password <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.password.length < 6 ? "wrong-input" : "correct-input"
              }`}
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              minLength="6"
              tabIndex={-1}
              required
            />
          </div>
          <div>
            {form.password.length < 6 ? (
              <p className="warning-message">
                Password length should be more than 6
              </p>
            ) : (
              ""
            )}
          </div>
          <div
            className={`submit-button-wrapper ${toggleClass ? "float" : ""}`}
          >
            <Link
              to='/'
              onClick={handleSubmit}
              tabIndex={-1}
              className={`submit-button ${
                form.password.length > 6 ? "button-success" : ""
              }`}
              onMouseEnter={annoyingSubmitButton}
            >
              Submit
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
