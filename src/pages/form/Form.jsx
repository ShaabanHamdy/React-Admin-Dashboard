import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Header from './../../components/Header';

const Form = () => {
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

 // =================================================

 const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // =================================================
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("data");
    handleClick();
  };
  // ===========================================================================
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  return (
    <>
    <Box>
    <Header title="CREATE USER" subTitle="Create a New User Profile" />
    
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" sx={{ gap: 2 }}>
          <TextField
            {...register("firstName", { required: true, maxLength: 10 })}
            helperText={
              Boolean(errors.firstName) ? "first name is required." : ""
            }
            error={Boolean(errors.firstName)}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            {...register("lastName", { required: true, maxLength: 10 })}
            helperText={
              Boolean(errors.lastName) ? "last name is required." : ""
            }
            error={Boolean(errors.lastName)}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          {...register("email", { required: true, pattern: regEmail })}
          helperText={
            Boolean(errors.email) ? "Please provide a valid email" : ""
          }
          error={Boolean(errors.email)}
          label="Email"
          variant="filled"
        />

        <TextField
          {...register("PhoneNumber", { required: true, pattern: phoneRegExp })}
          helperText={
            Boolean(errors.PhoneNumber)
              ? "Please provide a valid Phone Number"
              : ""
          }
          error={Boolean(errors.PhoneNumber)}
          label="Contact Number"
          variant="filled"
        />

        <TextField
          {...register("Address", { required: true })}
          helperText={Boolean(errors.Address) ? "Address is required" : ""}
          error={Boolean(errors.Address)}
          label="Address 1 "
          variant="filled"
        />
        <TextField label="Address 2" variant="filled" />
        <TextField
          sx={{ width: 300 }}
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            type="submit"
            variant="contained"
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%", color: "white" }}
            >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default Form;
