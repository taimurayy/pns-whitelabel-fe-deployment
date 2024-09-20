import { useState, useRef } from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import GenericTextField from "../../components/TextField";
import { SketchPicker, ColorResult } from "react-color";
import { Palette, UploadFile } from "@mui/icons-material";
import GenericButton from "../../components/Button";
import Layout from "../../components/Layout";

export default function Customization() {
  const [agencyName, setAgencyName] = useState("");
  const [color, setColor] = useState<string>("#6b1d1d");
  const [errors, setErrors] = useState<{ agencyName?: string }>({});
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const validateAgencyName = (value: string) => {
    if (!value) {
      return "Agency name is required";
    }
    return "";
  };

  const handleAgencyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setAgencyName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      agencyName: validateAgencyName(value),
    }));
  };

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  const closeColorPicker = () => {
    setColorPickerVisible(false);
  };

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          p: 2,
          marginLeft: "-18px",
          marginBottom: 10,
        }}>
        <Typography
          sx={{ fontSize: "1.25rem", display: "inline", color: "black" }}>
          Customize
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            p: { sm: 1, xs: 1, md: 2.5, l: 3, xl: 3 },
            mt: 2,

            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            position: "relative",
            height: "auto",
          }}>
          <Typography
            sx={{ fontSize: "0.8rem", display: "inline", color: "GREY" }}>
            AGENCY CUSTOMIZATION
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              marginTop: 3,
              flexDirection: { xs: "column", md: "row" },
            }}>
            {/* Left side with input fields */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flex: 1,
              }}>
              {/* Agency name input */}
              <GenericTextField
                value={agencyName}
                onChange={handleAgencyNameChange}
                label="Agency Name"
                helperText={errors.agencyName}
                type="text"
                sx={{ width: "100%" }}
              />

              {/* Color Picker */}
              <Box sx={{ position: "relative" }}>
                <GenericTextField
                  value={color}
                  onChange={() => {}} // No need for onChange here
                  label="Color"
                  helperText=""
                  sx={{ width: "100%" }}
                  endAdornment={
                    <IconButton
                      ref={buttonRef}
                      onClick={toggleColorPicker}
                      edge="end">
                      <Palette sx={{ color: color }} />
                    </IconButton>
                  }
                />
                {colorPickerVisible && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: buttonRef.current
                        ? buttonRef.current.offsetHeight
                        : 0,
                      left: buttonRef.current
                        ? buttonRef.current.offsetLeft - 200 // Adjust this value based on your color picker width
                        : 0,
                      zIndex: 1,
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                      boxShadow: 3,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <SketchPicker
                      color={color}
                      onChangeComplete={handleColorChange}
                    />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <GenericButton
                        onClick={closeColorPicker}
                        label="OK"
                        variant="contained"
                        color="custom"
                        type="button"
                        size="medium"
                        sx={{
                          marginTop: 2,
                          textTransform: "none",
                          width: "fit-content",
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Right side with logo uploads */}
            <Box
              sx={{
                flex: 1,
                marginTop: { xs: 2, sm: 2, md: -3 }, // Adjusts the top margin on small screens
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stacks logos vertically on small screens
                gap: 4,
              }}>
              {/* First Logo Upload */}
              <Box>
                <Typography sx={{ fontSize: "0.8rem", color: "grey", mb: 1 }}>
                  Agency Logo Square
                </Typography>
                <Box
                  sx={{
                    borderStyle: "dotted",
                    borderWidth: "2px",
                    borderColor: "#B0BEC5", // Light grey border color
                    borderRadius: "8px",
                    width: "130px",
                    height: "90%",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "4px",
                    paddingLeft: "8px",
                    paddingBottom: "4px",
                    paddingRight: "8px",
                  }}>
                  <Box
                    sx={{
                      backgroundColor: "#E7EEFE",
                      width: "130px",
                      height: "90%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}>
                    <UploadFile sx={{ marginBottom: 1 }} />
                    <Box sx={{ display: "flex", marginLeft: 1.4 }}>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "grey",
                        }}>
                        Drag and drop or choose files
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Second Logo Upload */}
              <Box>
                <Typography sx={{ fontSize: "0.8rem", color: "grey", mb: 1 }}>
                  Agency Logo
                </Typography>
                <Box
                  sx={{
                    borderStyle: "dotted",
                    borderWidth: "2px",
                    borderColor: "#B0BEC5", // Light grey border color
                    borderRadius: "8px",
                    width: "200px",
                    height: "90%",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "4px",
                    paddingLeft: "8px",
                    paddingBottom: "4px",
                    paddingRight: "8px",
                  }}>
                  <Box
                    sx={{
                      backgroundColor: "#E7EEFE",
                      width: "200px",
                      height: "90%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}>
                    <UploadFile sx={{ marginBottom: 1 }} />
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: 0.8,
                        marginBottom: 2,
                      }}>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "black",
                        }}>
                        Drag and drop or choose files
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ mt: 6 }} />
          <Box sx={{ marginBottom: 2 }}></Box>
        </Box>
      </Box>
    </Layout>
  );
}
