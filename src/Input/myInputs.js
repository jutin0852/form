import Input from "./input";
import inputCss from "./inputCss.module.css";
import { useValidateForm } from "../hooks/useValidateForm";

export default function MyInputs() {
  const user = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: "",
    passWord: "",
  };

  const { error, validateOnSubmit, handleFormChange, formData, done, data } =
    useValidateForm(user);

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateOnSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        label="first name"
        type="text"
        value={formData.firstName.trim()}
        onChange={handleFormChange}
        name="firstName"
        variant={inputCss.defaultInput}
        error={error.firstName && inputCss.error}
        someText={error.firstName && error.firstName}
      />

      <Input
        label="last name"
        type="text"
        value={formData.lastName}
        onChange={handleFormChange}
        name="lastName"
        variant={inputCss.defaultInput}
        error={error.lastName && inputCss.error}
        someText={error.lastName && error.lastName}
      />

      <Input
        label="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        variant={inputCss.defaultInput}
        error={error.email && inputCss.error}
        someText={error.email && error.email}
      />

      <Input
        label="Phone number"
        type="text"
        name="phoneNum"
        value={formData.phoneNum}
        onChange={handleFormChange}
        variant={inputCss.defaultInput}
        error={error.phoneNum && inputCss.error}
        someText={error.phoneNum && error.phoneNum}
      />

      <Input
        label="Message"
        type="text"
        name="message"
        value={formData.message}
        onChange={handleFormChange}
        variant={inputCss.defaultInput}
        someText="some interesting text"
        placeholder="send a message"
        row="4"
        multiline
      />

      <Input
        label="Password"
        type="password"
        name="passWord"
        value={formData.passWord}
        onChange={handleFormChange}
        variant={inputCss.defaultInput}
        someText={error.passWord && error.passWord}
        error={error.passWord && inputCss.error}
      />

      <button>Submit</button>
      {done && <p>Hi {data.firstName}, your details have been Submitted</p>}
    </form>
  );
}
