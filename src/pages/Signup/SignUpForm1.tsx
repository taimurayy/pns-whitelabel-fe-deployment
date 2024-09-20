import React, { useState } from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Apple,
  Google,
  ArrowBack,
} from "@mui/icons-material";
import GenericTextField from "../../components/TextField";
import PasswordField from "../../components/PasswordField";
import GenericButton from "../../components/Button";
import CustomSlider from "../../components/CustomSlider";
import EmailField from "../../components/EmailField";
import { useNavigate } from "react-router-dom";
import signup1img from "../../assets/SignUp-1.jpg";
const SignUpForm1: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState<{
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
  }>({});
  const validateFirstname = (value: string) => {
    if (!value) {
      return "First name is required";
    }
    return "";
  };

  // Validate lastname
  const validateLastname = (value: string) => {
    if (!value) {
      return "Last name is required";
    }
    return "";
  };

  // Validate email
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return "";
  };

  // Validate password

  const navigate = useNavigate();
  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFirstname(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      firstname: validateFirstname(value),
    }));
  };

  // Handle change for lastname
  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLastname(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      lastname: validateLastname(value),
    }));
  };

  // Handle change for email
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value),
    }));
  };
  const validatePassword = (value: string) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    let errorMessage = "";
    let strength = "Weak";

    if (!value) {
      errorMessage = "Password is required";
    } else if (value.length < minLength) {
      errorMessage = `Password must be at least ${minLength} characters long`;
    } else if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      errorMessage =
        "Password must include uppercase, lowercase, number, and special character";
    } else {
      if (
        value.length >= 12 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar
      ) {
        strength = "Strong";
      } else if (value.length >= 8) {
        strength = "Moderate";
      }
    }

    return {
      errorMessage,
      strength,
    };
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    const { errorMessage, strength } = validatePassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: errorMessage,
    }));
    setPasswordStrength(strength);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = {
      firstname: validateFirstname(firstname),
      lastname: validateLastname(lastname),
      email: validateEmail(email),
      password: validatePassword(password).errorMessage,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted:", { firstname, lastname, email, password });
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPasswordStrength("");
      navigate("/sign-up-2");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${signup1img})`,
          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1066px)": { display: "none" },
        }}
      />
      <Box
        sx={{
          flex: 1,
          padding: 0,
          backgroundColor: "#FAF9F6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "text.primary",
            zIndex: 1,
          }}>
          <ArrowBack />
        </IconButton>
        <CustomSlider currentStep={1} />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginTop: 2,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", lg: "1.7rem" },
            textAlign: "center",
          }}>
          Choose how you want to sign up
        </Typography>
        <br />
        <Box
          sx={{
            width: "55%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <Apple />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <Google />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2 }}>or</Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <GenericTextField
                  value={firstname}
                  onChange={handleFirstnameChange}
                  label="First name"
                  helperText={errors.firstname}
                  type="text"
                />
                <GenericTextField
                  value={lastname}
                  onChange={handleLastnameChange}
                  label="Last name"
                  helperText={errors.lastname}
                  type="text"
                />
              </Box>
              <EmailField
                value={email}
                onChange={handleEmailChange}
                label="Email Address"
                helperText={errors.email}
                sx={{ marginTop: 2, marginBottom: 2 }}
              />
              <PasswordField
                value={password}
                onChange={handlePasswordChange}
                label="Password"
                helperText={errors.password}
                sx={{ marginBottom: 2 }}
              />
              {password && (
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 2 }}
                  color={
                    passwordStrength === "Strong"
                      ? "success.main"
                      : passwordStrength === "Moderate"
                      ? "warning.main"
                      : "error.main"
                  }>
                  Password Strength: {passwordStrength}
                </Typography>
              )}
              <GenericButton
                onClick={() => console.log("Button clicked")}
                label="Continue"
                variant="contained"
                color="custom"
                type="submit"
                size="medium"
                sx={{
                  height: "56px",
                  width: "100%",
                  maxWidth: 400,
                  display: "block",
                  margin: "0 auto",
                  textTransform: "none",
                }}
              />
            </form>
          </Box>
          <Typography
            variant="body2"
            textAlign="center"
            color="textSecondary"
            sx={{ mt: 2 }}>
            Already have an account?{" "}
            <a href="/login" color="primary">
              Login
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm1;
