export const useValidateForm = (user) => {
  const error = {};
   const emailRegex = /\S+@\S+\.\S+/;
   const passWordRegex = {
     containNum: /^(?=.*\d).+$/,
     containSpecialChar: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
   };
  if (!user.firstName) {
    error.firstName = "fill blank field";
  }
  if (!user.lastName) {
    error.lastName = "fill blank field";
  }
  if (!user.email) {
    error.email = "fill blank field";
  } else if (!emailRegex.test(user.email)) {
    error.email = "Invalid Email";
  }
  if (!user.phoneNum) {
    error.phoneNum = "fill blank field";
  } else if (isNaN(user.phoneNum)) {
    error.phoneNum = "invalid Number";
  } else if (user.phoneNum.length > 14) {
    error.phoneNum = "Number greater than 11";
  }
  if (!user.passWord) {
    error.passWord = "fill blank field";
  } else if (user.passWord.length < 8) {
    error.passWord = "must be at least 8 characters";
  } else if (!passWordRegex.containNum.test(user.passWord)) {
    error.passWord = "must contain atleast one number";
  } else if (!passWordRegex.containSpecialChar.test(user.passWord)) {
    error.passWord = "must contain atleast one special character";
  }
  return error;
};
