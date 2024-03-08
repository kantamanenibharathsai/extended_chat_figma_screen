const registerPageStyles = {
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

  registerImage: {
    width: { xs: "270px", sm: "270px", md: "400px", lg: "500px", xl: "600px" },
    height: { xs: "220px", sm: "220px", md: "350px", lg: "400px", xl: "430px" },
    alignSelf: "flex-end",
    ml: { xs: "-80px", sm: "-18%", md: "0px" },
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

  bottomCardContainer: {
    width: { md: "95%", lg: "90%" },
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0px 20px 0px",
    borderRadius: "24px",
  },

  bottomCardChildContainer: {
    width: { md: "95%", lg: "90%" },
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: "25px",
    // border: "4px solid green"
  },

  bottomHeadingText: {
    color: "#414042",
    font: "600 20px Poppins",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    // border: "3px solid green"
  },

  textFieldsContainer: {
    // border: "3px solid pink",
    // width: "100%",
  },

  textFieldStyle: {
    width: "100%",
    background: "#E9F6FD",
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
    },
    input: {
      "&::placeholder": {
        color: "black",
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

  registerNowBtn: {
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
    width: { xs: "21.5%", sm: "25%" },
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

  mobileFormContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
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
    // color: "white",

    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    // ".MuiSvgIcon-root ": {
    //   fill: "white !important",
    // },
  },

  stateMenuItem: {
    font: "500 14px Poppins",
    color: "#7D8387",
    // width: "320px"
  },

  mobileBottomImageContainer: {
    // border: "3px solid red",
  },
};

export default registerPageStyles;
