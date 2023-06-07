import { useEffect, useState } from "react";
import Input from "./input";
import inputCss from "./inputCss.module.css";
import { useValidateForm } from "../hooks/useValidateForm";

export default function MyInputs({ setIsDone }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: "",
    passWord: "",
  });

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validateForm = useValidateForm(user);

  const handleFormChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(validateForm);
    setIsSubmit(true);
    if (Object.keys(error).length === 0 && isSubmit) {
      setIsDone(true);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      setError(validateForm);
    }
    // eslint-disable-next-line
  }, [isSubmit, user]);

  return (
    <form onSubmit={handleFormSubmit}>
      {!error.firstName ? (
        <Input
          label="first name"
          type="text"
          value={user.firstName}
          onChange={handleFormChange}
          name="firstName"
          variant={inputCss.defaultInput}
        />
      ) : (
        <Input
          label="first name"
          type="text"
          value={user.firstName}
          onChange={handleFormChange}
          name="firstName"
          variant={inputCss.defaultInput}
          error={inputCss.error}
          someText={error.firstName}
        />
      )}
      {!error.lastName ? (
        <Input
          label="last name"
          type="text"
          value={user.lastName}
          onChange={handleFormChange}
          name="lastName"
          variant={inputCss.defaultInput}
        />
      ) : (
        <Input
          label="last name"
          type="text"
          value={user.lastName}
          onChange={handleFormChange}
          name="lastName"
          variant={inputCss.defaultInput}
          error={inputCss.error}
          someText={error.lastName}
        />
      )}
      {!error.email ? (
        <Input
          label="Email"
          type="text"
          name="email"
          value={user.email}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
        />
      ) : (
        <Input
          label="Email"
          type="text"
          name="email"
          value={user.email}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
          error={inputCss.error}
          someText={error.email}
        />
      )}
      {!error.phoneNum ? (
        <Input
          label="Phone number"
          type="text"
          name="phoneNum"
          value={user.phoneNum}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
        />
      ) : (
        <Input
          label="Phone number"
          type="text"
          name="phoneNum"
          value={user.phoneNum}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
          error={inputCss.error}
          someText={error.phoneNum}
        />
      )}
      <Input
        label="Message"
        type="text"
        name="message"
        value={user.message}
        onChange={handleFormChange}
        variant={inputCss.defaultInput}
        someText="some interesting text"
        placeholder="send a message"
        row="4"
        multiline
      />
      {!error.passWord ? (
        <Input
          label="Password"
          type="password"
          name="passWord"
          value={user.passWord}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
          someText={error.passWord}
        />
      ) : (
        <Input
          label="Password"
          type="password"
          name="passWord"
          value={user.passWord}
          onChange={handleFormChange}
          variant={inputCss.defaultInput}
          someText={error.passWord}
          error={inputCss.error}
        />
      )}
      <button>Submit</button>
    </form>
  );
}
