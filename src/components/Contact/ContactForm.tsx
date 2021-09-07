import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormControls } from "./ContactFormControls";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./ContactForm.scss";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  })
);

export const ContactForm = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();
  const classes = useStyles();
  return (
    <div>
      <form
        id="contact-form"
        autoComplete="on"
        onSubmit={handleFormSubmit}
        className={classes.root}
      >
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              onChange={handleInputValue}
              onBlur={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue?.name]?.length > 0}
              multiline={inputFieldValue.multiline ?? false}
              fullWidth
              rows={inputFieldValue.rows ?? 1}
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
            />
          );
        })}
        <div className="buttonForm">
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          disabled={!formIsValid()}
        >
          Send Message
        </Button>
        </div>
      </form>
    </div>
  );
};
