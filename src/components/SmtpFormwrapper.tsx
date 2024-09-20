import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import GenericButton from "./Button";
import { useNavigate } from "react-router-dom";

const SmtpFormwrapper: React.FC = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [host, setHost] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [port, setPort] = useState("");
  const [errors, setErrors] = useState<{
    senderName?: string;
    senderEmail?: string;
    host?: string;
    username?: string;
    password?: string;
    port?: string;
  }>({});

  const validateSenderName = (value: string) => {
    return value ? "" : "Sender name is required";
  };

  const validateSenderEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Sender email is required";
    } else if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return "";
  };

  const validateHost = (value: string) => {
    return value ? "" : "Host is required";
  };

  const validateUsername = (value: string) => {
    return value ? "" : "Username is required";
  };

  const validatePassword = (value: string) => {
    return value ? "" : "Password is required";
  };

  const validatePort = (value: string) => {
    const portRegex = /^[0-9]+$/;
    if (!value) {
      return "Port is required";
    } else if (!portRegex.test(value)) {
      return "Port must be a number";
    }
    return "";
  };

  const navigate = useNavigate();

  const handleChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      validator: (value: string) => string
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setter(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.name]: validator(value),
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = {
      senderName: validateSenderName(senderName),
      senderEmail: validateSenderEmail(senderEmail),
      host: validateHost(host),
      username: validateUsername(username),
      password: validatePassword(password),
      port: validatePort(port),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("SMTP Configuration submitted:", {
        senderName,
        senderEmail,
        host,
        username,
        password,
        port,
      });
      // Handle successful submission, e.g., navigate or display a success message
      navigate("/next-step"); // Replace with the actual route
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        maxWidth: "100%",
        width: "100%",
        margin: "0 auto",
      }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          marginBottom: 2,
          fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", lg: "1.7rem" },
          textAlign: "left",
        }}>
        SMTP Configuration
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "70%" }}>
        <TextField
          name="senderName"
          value={senderName}
          onChange={handleChange(setSenderName, validateSenderName)}
          label="Sender Name"
          helperText={errors.senderName}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="senderEmail"
          value={senderEmail}
          onChange={handleChange(setSenderEmail, validateSenderEmail)}
          label="Sender Email"
          helperText={errors.senderEmail}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="host"
          value={host}
          onChange={handleChange(setHost, validateHost)}
          label="Host"
          helperText={errors.host}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="username"
          value={username}
          onChange={handleChange(setUsername, validateUsername)}
          label="Username"
          helperText={errors.username}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="password"
          type="password"
          value={password}
          onChange={handleChange(setPassword, validatePassword)}
          label="Password"
          helperText={errors.password}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="port"
          value={port}
          onChange={handleChange(setPort, validatePort)}
          label="Port"
          helperText={errors.port}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <GenericButton
          onClick={() => console.log("Button clicked")}
          label="Submit"
          variant="contained"
          color="custom"
          type="submit"
          size="medium"
          sx={{
            height: "56px",
            width: "100%",
            marginTop: 2,
            textTransform: "none",
          }}
        />
      </form>
    </Box>
  );
};

export default SmtpFormwrapper;
