const landingPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    background: { xs: "#F7F8FC", lg: "#ffffff" },
  },

  childContainer: {
    width: "100%",
    display: { xs: "flex", lg: "flex" },
    flexDirection: {xs: "column", lg: "row"},
    justifyContent: "flex-start",
    background: "#F7F8FC",
    height: "100%",
  },

  leftContainer: {
    width: { lg: "24%", xl: "16%" },
    background: "#054081",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    alignItems: "center",
  },

  leftChildContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    width: "88%",
    // border: "3px solid green",
    mt: "30px",
  },

  extendedLogo: {
    width: "135px",
    height: "63px",
  },

  profileContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  userProfileImage: {
    width: "55px",
    height: "55px",
  },

  userNameText: {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "800",
    mt: "16px",
  },

  sellerText: {
    fontSize: "14px",
    color: "#6285B0",
    fontWeight: "500",
  },

  unorderedList: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: "80%",
    alignSelf: "center",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  listItemIcon: {
    width: "22px",
    height: "22px",
    color: "#ffffff",
  },

  listItemText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "15px",
  },

  rightArrowIcon: {
    color: "#3b6599",
    fontSize: "20px",
  },

  rightContainer: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "76%", xl: "84%" },
    background: "#F7F8FC",
    height: { xs: "calc(100vh - 76px)", lg: "100%" },
    display: { xs: "block", lg: "flex" },
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "auto",
  },

  rightChildContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "auto",
    width: { lg: "93%" },
    height: "inherit",
    gap: { lg: "20px", xl: "40px" },
  },

  rightNavContainer: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "space-between",
    pl: "10px",
    mt: { lg: "20px", xl: 0 },
  },

  profileIconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  profileIcon: {
    color: "#3f3f41",
    width: "31px",
    height: "31px",
  },

  chatText: {
    color: "#3f3f41",
    fontSize: "23px",
    fontWeight: "700",
  },

  searchInputNotificationContainer: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  searchInputContainer: {
    width: "330px",
    border: "1px solid #07B0E8",
    borderRadius: "6px",
    display: "flex",
    height: "39px",
    alignItems: "center",
    background: "#ffffff",
    pr: 1,
  },

  inputElement: {
    flexGrow: 1,
    height: "36px",
    outline: "none",
    border: "none",
    color: "#3f3f41",
    fontSize: "15px",
  },

  notificationIcon: {
    width: "26px",
    height: "26px",
    color: "#3f3f41",
  },

  rightBodyContainer: {
    height: { lg: "90vh", xl: "85vh" },
    display: "flex",
  },

  leftSearchContactsContainer: {
    width: { xs: "100%", lg: "37%", xl: "30%" },
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    px: { xs: "10px", sm: "15px" },
    mt: { xs: "70px", lg: "0px" },
    height: { xs: "90vh", lg: "inherit" },
  },

  textFieldStyle: {
    "& .MuiInputBase-input": {
      padding: "0px",
      pr: { xs: "5px", sm: "20px" },
      height: "34px",
    },
    input: {
      "&::placeholder": {
        color: "#9e896a",
        fontSize: "14px",
        fontWeight: "900",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #9e896a",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #9e896a",
      },
      "&:hover fieldset": {
        borderColor: "#9e896a",
      },
    },
  },

  searchIcon: {
    fontSize: "18px",
  },

  contactsPersonsListContainer: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
  },

  rightChartParentContainer: {
    border: "1px solid #9e896a",
    borderRadius: "8px",
    flexGrow: 1,
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    position: "relative",
    height: { xs: "90vh", lg: "auto" },
    mt: { xs: "70px", lg: "0px" },
  },

  loggedInUserContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: { lg: "14px", xl: "20px" },
    borderBottom: "1px solid #9e896a",
  },

  loggedInUserProfileContentContainer: {
    display: "flex",
    gap: "10px",
  },

  personContactProfilePic: {
    width: "30px",
    height: "30px",
  },

  personContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    flexGrow: 1,
  },

  personContentName: {
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "#797A7B",
    fontWeight: "500",
  },

  personContentLastMsg: {
    fontFamily: "Poppins",
    fontSize: "13px",
    color: "#797A7B",
    fontWeight: "300",
  },

  moreHorizIcon: {
    color: "#797A7B",
  },

  chartBodyContainer: {
    padding: { lg: "15px", xl: "20px" },
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: { lg: "10px" },
  },

  chartContainer: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: { xs: "40px", lg: "25px", xl: "35px" },
    overflowY: "auto",
    height: { xs: "500px", lg: "300px", xl: "200px" },
    flexGrow: 1,
    py: "30px",
  },

  chartMsgSendListItem: {
    background: "#02346B",
    padding: "15px",
    fontFamily: "Poppins",
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: "300",
    width: "50%",
    borderRadius: "14px",
    borderBottomRightRadius: "0px",
    lineHeight: "20px",
    alignSelf: "flex-end",
  },

  sendMessage: {
    fontFamily: "Poppins",
    fontSize: "14px",
    color: "#fff",
    fontWeight: "300",
    lineHeight: "20px",
  },

  receiveMessage: {
    fontFamily: "Poppins",
    fontSize: "14px",
    color: "#000",
    fontWeight: "300",
    lineHeight: "20px",
  },

  chartMsgRecieveListItem: {
    background: "#E5ECF6",
    padding: "15px",
    fontFamily: "Poppins",
    fontSize: "14px",
    color: "black",
    fontWeight: "300",
    width: "50%",
    borderRadius: "14px",
    borderBottomLeftRadius: "0px",
    lineHeight: "20px",
    alignSelf: "flex-start",
  },

  textFieldImageContainer: {
    position: "relative",
  },

  rightBottomMsgInputContainer: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "white",
    borderRadius: "10px",
    mb: "10px",
    "& .MuiInputBase-input": {
      padding: "0px",
      pr: { xs: "4px", sm: "20px" },
      height: "48px",
    },
    input: {
      "&::placeholder": {
        color: "#000000",
        fontSize: "14px",
        fontWeight: "300",
        fontFamily: "Poppins",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        borderColor: "none",
      },
    },
  },

  ImageOutlinedIcon: {
    mr: { xs: "0.2", sm: 1.6 },
  },

  pickerContainer: {
    position: "absolute",
    bottom: { xs: "55px", lg: "73px" },
    width: "98%",
    overflowX: "auto",
  },

  uploadImage: {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
  },

  uploadImageContainer: {
    position: "relative",
    display: "inline-block",
    mt: "20px",
  },

  circleWhite: {
    apsectRatio: 1 / 1,
    borderRadius: "50%",
    backgroundColor: "white",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    position: "absolute",
    top: "-15px",
    right: "-15px",
  },

  circleWhiteSend: {
    apsectRatio: 1 / 1,
    borderRadius: "50%",
    backgroundColor: "white",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    position: "absolute",
    right: "16px",
    bottom: { xs: "10px", lg: "22px" },
  },

  chartMsgSendListItemImage: {
    width: "auto",
    background: "#ffffff",
    pb: "10px",
  },

  chartMsgRecieveListItemImage: {
    width: "auto",
    pb: "10px",
    background: "#E5ECF6",
  },

  sendIconButton:{
    color: "#02346B"
  }
};

export default landingPageStyles;
