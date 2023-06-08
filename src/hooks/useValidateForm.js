import { useCallback, useState } from "react";
import { useEffect } from "react";

export const useValidateForm = (user) => {
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [done, setIsDone] = useState(false);
  const [data, setData] = useState("");

  const handleValidate = useCallback(() => {
    let errors = {};

    const emailRegex = /\S+@\S+\.\S+/;
    const passWordRegex = {
      containNum: /^(?=.*\d).+$/,
      containSpecialChar: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
    };
    //validation for first name
    if (!formData.firstName) {
      errors.firstName = "fill blank field";
    }
    //validation for last name
    if (!formData.lastName) {
      errors.lastName = "fill blank field";
    }
    //validation for email
    if (!formData.email) {
      errors.email = "fill blank field";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid Email";
    }
    //validation for phone number
    if (!formData.phoneNum) {
      errors.phoneNum = "fill blank field";
    } else if (isNaN(formData.phoneNum)) {
      errors.phoneNum = "invalid Number";
    } else if (formData.phoneNum.length > 14) {
      errors.phoneNum = "Number greater than 11";
    }
    //validation for password

    if (!formData.passWord) {
      errors.passWord = "fill blank field";
    } else if (formData.passWord.length < 8) {
      errors.passWord = "must be at least 8 characters";
    } else if (!passWordRegex.containNum.test(formData.passWord)) {
      errors.passWord = "must contain atleast one number";
    } else if (!passWordRegex.containSpecialChar.test(formData.passWord)) {
      errors.passWord = "must contain atleast one special character";
    }
    return errors;
  }, [
    formData.firstName,
    formData.email,
    formData.lastName,
    formData.phoneNum,
    formData.passWord,
  ]);
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsDone(false);
  };

  const validateOnSubmit = (e) => {
    let validateError = handleValidate();
    setError(validateError);
    setIsSubmit(true);
    setIsDone(false);

    if (Object.keys(validateError).length === 0) {
      clearForm();
    }
  };

  const clearForm = () => {
    setData(formData);
    setFormData(user);
    setError({});
    setIsDone(true);
    setIsSubmit(false);
  };

  useEffect(() => {
    if (isSubmit && Object.values(formData).some((value) => value.length > 0)) {
      let validateError = handleValidate();
      setError(validateError);
    }
  }, [isSubmit, formData, handleValidate]);

  return {
    error,
    validateOnSubmit,
    handleFormChange,
    formData,
    clearForm,
    done,
    data,
  };
};
