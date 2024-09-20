import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField as MuiTextField,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import GenericTextField from "../../components/TextField";
import GenericSelect from "../../components/Select";
import GenericButton from "../../components/Button";
import CustomSlider from "../../components/CustomSlider";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import payment from "../../assets/Payment.jpg";

const PaymentMethod: React.FC = () => {
  const [monthlyPlans, setMonthlyPlans] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCVC, setCardCVC] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const planOptions = [
    { label: "100$", value: "100$" },
    { value: "200$", label: "200$" },
    { value: "300$", label: "300$" },
    { value: "400$", label: "400$" },
  ];

  const [errors, setErrors] = useState<{
    promoCode?: string;
    monthlyPlan?: string;
    cardNumber?: string;
    cardExpiry?: string;
    cardCVC?: string;
    cardName?: string;
  }>({});

  const validateCardNumber = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length < 16) {
      return "Credit Card Number must be 16 digits";
    }
    return "";
  };

  const validateCardExpiry = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length !== 4) {
      return "Expiry Date must be in MMYY format";
    }
    return "";
  };

  const validateCardCVC = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length !== 3) {
      return "CVC must be 3 digits";
    }
    return "";
  };

  const validateCardName = (value: string) => {
    // Regular expression for alphabets and spaces only
    const alphabetRegex = /^[A-Za-z\s]+$/;

    if (!value) {
      return "Cardholder Name is required";
    } else if (!alphabetRegex.test(value)) {
      return "Cardholder Name must contain only alphabets and spaces";
    }

    return "";
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Remove all non-digit characters
    const numericValue = value.replace(/\D/g, "");
    // Format the value as xxxx-xxxx-xxxx-xxxx
    value = numericValue.replace(/(.{4})(?=.)/g, "$1-").slice(0, 19); // Limit length to 19 characters (including dashes)
    setCardNumber(value);
    setErrors((prev) => ({
      ...prev,
      cardNumber: validateCardNumber(numericValue),
    }));
  };

  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Remove all non-digit characters
    const numericValue = value.replace(/\D/g, "");
    // Format the value as MM/YY
    value = numericValue.replace(/(.{2})(?=.)/g, "$1/").slice(0, 5); // Limit length to 5 characters (MM/YY)
    setCardExpiry(value);
    setErrors((prev) => ({
      ...prev,
      cardExpiry: validateCardExpiry(numericValue),
    }));
  };

  const handleCardCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardCVC(value);
    setErrors((prev) => ({
      ...prev,
      cardCVC: validateCardCVC(value),
    }));
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardName(value);
    setErrors((prev) => ({
      ...prev,
      cardName: validateCardName(value),
    }));
  };

  const handleChangeSelectMonthlyPlan = (event: SelectChangeEvent<string>) => {
    setMonthlyPlans(event.target.value);
    setErrors((prev) => ({
      ...prev,
      monthlyPlan: event.target.value ? "" : "Monthly Plan is required",
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!monthlyPlans) {
      newErrors.monthlyPlan = "Monthly Plan is required";
    }

    if (!cardNumber) {
      newErrors.cardNumber = "Credit Card Number is required";
    } else {
      const cardNumberError = validateCardNumber(cardNumber.replace(/\D/g, ""));
      if (cardNumberError) newErrors.cardNumber = cardNumberError;
    }

    if (!cardExpiry) {
      newErrors.cardExpiry = "Credit Card Expiry Date is required";
    } else {
      const cardExpiryError = validateCardExpiry(cardExpiry.replace(/\D/g, ""));
      if (cardExpiryError) newErrors.cardExpiry = cardExpiryError;
    }

    if (!cardCVC) {
      newErrors.cardCVC = "Credit Card CVC is required";
    } else {
      const cardCVCError = validateCardCVC(cardCVC);
      if (cardCVCError) newErrors.cardCVC = cardCVCError;
    }

    if (!cardName) {
      newErrors.cardName = "Cardholder Name is required";
    } else {
      const cardNameError = validateCardName(cardName);
      if (cardNameError) newErrors.cardName = cardNameError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form data
      console.log("Monthly Plan:", monthlyPlans);
      console.log("Promo Code:", promoCode);
      console.log("Card Number:", cardNumber);
      console.log("Card Expiry:", cardExpiry);
      console.log("Card CVC:", cardCVC);
      console.log("Cardholder Name:", cardName);
      localStorage.setItem("monthlyPlans", monthlyPlans);
      localStorage.setItem("promoCode", promoCode);
      localStorage.setItem("cardNumber", cardNumber);
      localStorage.setItem("cardExpiry", cardExpiry);
      localStorage.setItem("cardCVC", cardCVC);
      localStorage.setItem("cardName", cardName);
      navigate("/sign-up-4");
    }
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "130vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${payment})`,
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
          onClick={() => navigate("/Sign-up-3")}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "text.primary",
            zIndex: 1,
          }}>
          <ArrowBack />
        </IconButton>
        <CustomSlider currentStep={3} />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginTop: 2,
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.7rem",
            },
            textAlign: "center",
          }}>
          Plan Details
        </Typography>
        <Box
          sx={{
            width: "55%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <form onSubmit={handleSubmit}>
            <GenericSelect
              value={monthlyPlans}
              onChange={handleChangeSelectMonthlyPlan}
              options={planOptions}
              label="Choose your plan"
              helperText={errors.monthlyPlan}
              sx={{
                marginBottom: 2,
                width: "100%",
                maxWidth: 400,
                "& .MuiFormHelperText-root": {
                  color: "red", // Set the helper text color to red
                },
              }}
            />
            <Box
              sx={{
                marginBottom: 2,
                padding: "16px",
                borderRadius: 1,
                backgroundColor: "#1976d2",
                color: "white",
              }}>
              <Typography>Payment {monthlyPlans}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, marginBottom: 0 }}>
              <GenericTextField
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                label="Promo code"
                helperText="optional"
                sx={{
                  marginBottom: 2,
                  "& .MuiFormHelperText-root": {
                    color: "grey", // Set the helper text color to grey
                  },
                }}
              />

              <GenericButton
                label="Continue"
                onClick={() => console.log("Button clicked")}
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
            </Box>

            <Box sx={{ width: "100%", maxWidth: 400, marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                Credit Card Details
              </Typography>
              <MuiTextField
                label="Card Number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                fullWidth
                margin="normal"
                helperText={errors.cardNumber}
                inputProps={{
                  maxLength: 19,
                }}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red", // Set the helper text color to red
                  },
                }}
              />
              <MuiTextField
                label="Expiry Date (MMYY)"
                value={cardExpiry}
                onChange={handleCardExpiryChange}
                fullWidth
                margin="normal"
                helperText={errors.cardExpiry}
                inputProps={{
                  maxLength: 5,
                }}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red", // Set the helper text color to red
                  },
                }}
              />
              <MuiTextField
                label="CVC"
                value={cardCVC}
                onChange={handleCardCVCChange}
                fullWidth
                margin="normal"
                helperText={errors.cardCVC}
                inputProps={{
                  maxLength: 3,
                }}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red", // Set the helper text color to red
                  },
                }}
              />
              <MuiTextField
                label="Cardholder Name"
                value={cardName}
                onChange={handleCardNameChange}
                fullWidth
                margin="normal"
                helperText={errors.cardName}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red", // Set the helper text color to red
                  },
                }}
              />
            </Box>
            <GenericButton
              onClick={() => console.log("Button clicked")}
              label="Authorize Card"
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
      </Box>
    </Box>
  );
};

export default PaymentMethod;
