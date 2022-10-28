import React from "react";
import { Link } from "react-router-dom";
import "../CSS/form.css";
import { database } from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore/lite";
import Login from './Login'

function Form() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  });

  const collectionRef = collection(database, "users");
  

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

  const handleSubmit = async() => {
    await createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(<Login/>)
      .catch((err) => {
        alert(err.message);
    });
    
  };

  const addData = () => {
    addDoc(collectionRef, {
      name: form.name,
      email: form.email,
      password: form.password,
      address: form.address,
      phone: form.phone
    })
    .then(() => {
      alert("Successfull Signup")
    })
    .catch((err) => {
      alert(err.message);
    })
  }


  return (
    <>
      <section className="form-section">
        <h1 className="heading">Sign Up</h1>
        <form
          autoComplete="false"
        > 
          <div className="input-block">
            <label className="label">
              Name <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.name.length < 2 ? "wrong-input" : "correct-input"
              }`}
              type="email"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="sundaram"   
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Email <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                (form.email.length < 6 && (form.email.includes("@"))) ? "wrong-input" : "correct-input"
              }`}
              type="email"
              name="email"
              pattern=".+@globex\.com"
              size="30"
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
          <div className="input-block">
            <label className="label">
              Address <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.name.length < 2 ? "wrong-input" : "correct-input"
              }`}
              type="text"
              name="address"
              value={form.address}
              onChange={handleForm}
              placeholder="delhi,India"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Phone no <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.phone.length <= 9 ? "wrong-input" : "correct-input"
              }`}
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleForm}
              placeholder="9012345678"
              tabIndex={-1}
              required
            />
          </div>
          <div
            className={`submit-button-wrapper ${toggleClass ? "float" : ""}`}
          >
            <Link
              to='/login'
              onClick={() => {handleSubmit(); addData();}}
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

export default Form;
