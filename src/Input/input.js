import React from "react";
import inputCss from './inputCss.module.css';

export default function Input({
  label,
  name,
  error,
  variant,
  someText,
  startIcon,
  endIcon,
  size,
  multiline,
  row,
  ...props
}) {
  if (multiline) {
    return (
      <div className={inputCss.input}>
        <textarea name={name} id={name} rows={row} {...props}></textarea>
        <label htmlFor={name}> {label}</label>
      </div>
    );
  }
  return (
    <div
      className={`${inputCss.input} ${
        startIcon && inputCss.icon
      } ${error} ${size}`}
    >
      <p>{someText}</p>
      <img className={inputCss.startIcon} src={startIcon} alt={startIcon} />
      <img className={inputCss.endIcon} src={endIcon} alt="" />
      <input name={name} id={name} className={variant} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
