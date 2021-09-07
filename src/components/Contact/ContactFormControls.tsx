import { useState } from "react";

export class iValues {
  "fullName": string;
  "email": string;
  "message": string;
  "formSubmitted": boolean;
  "success": boolean;
}

const PostContactForm = async (
  values: iValues,
  successCallback: any,
  errorCallback: any
) => {
  const data = {
    name: values.fullName,
    email: values.email,
    message: values.message,
    timeStame: new Date(),
  };

  fetch("/api/Contact", {
    method: "POST",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        successCallback();
      } else {
        errorCallback();
      }
    });
};

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);
  const [success, setSuccess] = useState({} as boolean);
  const [
    isSuccessfullySubmitted,
    setIsSuccessfullySubmitted,
  ] = useState(false);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
    setSuccess(true);
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
    setSuccess(false);
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError).then(
        (response) => {
          setValues({
            ...initialFormValues,
            fullName: "",
            email: "",
            message: "",
            formSubmitted: false,
            success: false,
          });
          setIsSuccessfullySubmitted(true);
          e.target.reset();
          
          return success;
        }
      );
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    isSuccessfullySubmitted
  };
};
