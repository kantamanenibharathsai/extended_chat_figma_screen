const loginPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    fontFamily: "Poppins",
  },

  largeDeviceStack: {
    display: { xs: "none", md: "flex" },
  },

  smallDeviceStack: {
    display: { xs: "flex", md: "none" },
  },

  topContainer: {
    height: "40vh",
    background: "#064081",
    paddingTop: "40px",
    paddingLeft: { md: "25px", lg: "40px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  topLeftContainer: {
    width: "auto",
    height: "100%",
  },

  extendedLogo: {
    width: "125px",
    height: "55px",
  },

  welcomeBackText: {
    font: "bolder 35px Poppins",
    color: "#ffffff",
  },

  commonFontAndColor: {
    font: "400 14px Poppins",
    color: "#ffffff",
  },

  loginAccountBtn: {
    background: "transparent",
    textTransform: "capitalize",
    border: "0px",
    width: "120px",
    height: "40px",
    color: "#A6C1ED",
    "&:hover": {
      background: "transparent",
    },
  },

  registerBtn: {
    background: "#02B0E8",
    textTransform: "capitalize",
    width: "120px",
    height: "40px",
    fontWeight: "800",
    borderRadius: "10px 10px 0px 0px",
    "&:hover": {
      background: "#02B0E8",
    },
  },

  topRightContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
  },

  loginImage: {
    width: { xs: "280px", sm: "350px", md: "400px", lg: "500px", xl: "600px" },
    height: { xs: "220px", sm: "320px", md: "350px", lg: "400px", xl: "430px" },
    alignSelf: "flex-end",
    ml: { xs: "-80px", sm: "-22%", md: "0px" },
    mb: { xs: 0, md: "-80px" },
    mr: { xs: 0, md: "10%" },
  },

  bottomContainer: {
    height: "60vh",
    background: "#F7F8FC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomChildContainer: {
    width: { md: "90%", xl: "65%" },
    border: "3px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomCardContainer: {
    width: { xl: "40%" },
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "35px 50px",
    borderRadius: "24px",
  },

  selectCountryPhoneNumElement: {
    width: "68px",
    font: "500 14px Poppins",
    color: "#7D8387",
    borderRadius: "0px 0px 15px 15px",
    border: "0px",
    borderColor: "#ffffff",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
      border: "0px",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
      border: "0px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
      border: "0px",
    },
  },

  menuItemPhoneNum: {
    font: "bolder 15px Poppins",
    color: "#ffffff",
  },

  countryFlagImage: {
    width: "22px",
    height: "22px",
  },

  countryCodeText: {
    font: "200 15px Poppins",
    color: "#000000",
  },

  bottomCardChildContainer: {
    width: { md: "95%", lg: "90%" },
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: "25px",
  },

  bottomHeadingText: {
    color: "#414042",
    font: "600 15px Poppins",
    mb: 1,
  },

  otpFormContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  otpNumsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
  },

  otpNumBox: {
    color: "#7D8387",
    font: "500 30px Poppins",
    textAlign: "center",
    px: "25px",
    py: "14px",
    background: "#E4F4FC",
    borderRadius: "10px",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
  },

  textFieldsContainer: {},

  textFieldStyle: {
    width: "100%",
    background: "transparent",
    "& label": {
      color: "#7D8387",
      fontSize: "14px",
    },
    "& label.Mui-focused": {
      color: "#7D8387",
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      padding: "0px",
      paddingLeft: "5px",
      paddingRight: "10px",
      height: "60px",
    },
    input: {
      "&::placeholder": {
        color: "#7D8387",
        fontSize: "14px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #02B0E8",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #02B0E8",
      },
      "&:hover fieldset": {
        borderColor: "#02B0E8",
      },
    },
  },

  inputAdornment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "7px",
  },

  textFieldIcon: {
    height: { xs: "19px", sm: "24px" },
    width: { xs: "19px", sm: "24px" },
  },

  flagImageTextField: {
    width: { xs: "19px", sm: "22px" },
    height: { xs: "19px", sm: "22px" },
  },

  dropIcon: {
    fontSize: "14px",
    ml: "-4px",
  },

  divider: {
    ml: "10px",
    border: "1px solid #BEE6FA",
    height: "30px",
  },

  passwordVisibleOrNotIcon: {
    cursor: "pointer",
  },

  checkboxAgreeTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    alignSelf: "center",
  },

  checkbox: {
    accentColor: "#02B0E8",
    width: "17px",
    height: "17px",
    color: "white",
  },

  termsAndConditionsText: {
    color: "#000000",
    font: "500 15px Poppins",
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    gap: { xs: "15px", md: "50px" },
    alignSelf: "center",
  },

  sendVerifyBtn: {
    background: "#02B0E8",
    color: "#ffffff",
    width: "140px",
    height: "50px",
    fontWeight: "800",
    borderRadius: "30px",
    "&:hover": {
      background: "#02B0E8",
    },
  },

  otpNumTextFieldStyle: {
    width: "55px",
    height: "55px",
    background: "#E4F4FC",
    borderRadius: "10px",
    "& label": {
      color: "#7D8387",
      fontSize: "14px",
    },
    "& label.Mui-focused": {
      color: "#7D8387",
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "10px",
      height: "55px",
    },
    input: {
      "&::placeholder": {
        color: "#7D8387",
        fontSize: "14px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "0px",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "0px",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        border: "0px",
        borderRadius: "10px",
      },
    },
  },

  registerWithText: {
    color: "#414042",
    font: "500 15px Poppins",
  },

  iconButton: {
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    outline: "none",
    border: "none",
  },

  iconButtonIcon: {
    width: "14px",
    height: "14px",
    color: "#ffffff",
  },
  googleIconBtn: {
    background: "#EA4335",
    "&:hover": {
      background: "#EA4335",
    },
  },

  facebookIconBtn: {
    background: "#0E5CA7",
    "&:hover": {
      background: "#0E5CA7",
    },
  },

  twitterIconBtn: {
    background: "#1DA1F2",
    "&:hover": {
      background: "#1DA1F2",
    },
  },

  linkedinIconBtn: {
    background: "#0C64C5",
    "&:hover": {
      background: "#0C64C5",
    },
  },

  mobileLeftContainer: {
    width: { xs: "21.5%", sm: "15%" },
    background: "#064081",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },

  mobileButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  mobileLoginAccButton: {
    background: "transparent",
    textTransform: "capitalize",
    color: "#ffffff",
    py: 7,
    font: "800 17px Poppins",
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    "&:hover": {
      background: "transparent",
    },
  },

  registerMobileBtn: {
    background: "#02B0E8",
    textTransform: "capitalize",
    fontWeight: "800",
    color: "#ffffff",
    padding: 0,
    py: 11,
    width: "inherit",
    alignSelf: "strech",
    flexGrow: 1,
    borderRadius: "0px",
    font: "800 17px Poppins",
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    "&:hover": {
      background: "#02B0E8",
      borderRadius: "0px",
    },
  },

  mobileRightContainer: {
    background: "#E4F4FC",
    height: "100vh",
    flexGrow: 1,
  },

  registerText: {
    font: "800 25px Poppins",
    lineHeight: "40px",
  },

  formImageContainer: {
    py: "20px",
    height: "inherit",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  contentFormContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    flexGrow: 1,
  },

  mobileWelcomeBackText: {
    font: "bolder 35px Poppins",
    color: "#000",
  },

  mobileWelcomeMissedText: {
    font: "100 15px Poppins",
    color: "#000",
  },

  mobileFormContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  loginBtn: {
    background: "#02B0E8",
    color: "#ffffff",
    width: "230px",
    height: "50px",
    fontWeight: "800",
    borderRadius: "30px",
    "&:hover": {
      background: "#02B0E8",
    },
  },

  mobileFormCardContainer: {
    border: "1px solid #BEE6FA",
    borderRadius: "15px",
    width: "100%",
  },

  mobileNameTextFieldStyle: {
    borderRadius: "15px 15px 0px 0px",
  },

  mobileTextFieldStyle: {
    width: "100%",
    background: "#ffffff",
    border: "0px",
    borderBottom: "1px solid #BEE6FA",
    "& label": {
      color: "black",
      fontSize: "14px",
    },
    "& label.Mui-focused": {
      color: "black",
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      padding: "0px",
      paddingLeft: "5px",
      paddingRight: "10px",
      height: "60px",
      border: "0px",
      borderBottom: "1px solid #BEE6FA",
    },
    input: {
      "&::placeholder": {
        color: "black",
        fontSize: "14px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "0px",
        borderBottom: "1px solid #BEE6FA",
      },
      "&.Mui-focused fieldset": {
        borderBottom: "1px solid #BEE6FA",
        border: "0px",
      },
      "&:hover fieldset": {
        border: "0px",
        borderBottom: "1px solid #BEE6FA",
      },
    },
  },

  selectIconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#ffffff",
    borderRadius: "0px 0px 15px 15px",
  },

  stateImg: {
    width: { xs: "19px", sm: "22px" },
    height: { xs: "19px", sm: "22px" },
    ml: "14px",
    mt: "-3px",
  },

  mobileStateSelectStyle: {
    font: "500 14px Poppins",
    color: "#7D8387",
    borderRadius: "0px 0px 15px 15px",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },

  stateMenuItem: {
    font: "500 14px Poppins",
    color: "#7D8387",
  },

  mobileBottomImageContainer: {},
};

export default loginPageStyles;
