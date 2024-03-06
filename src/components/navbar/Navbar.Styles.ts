const navbarStyles = {
  navbarContainer: {
    height: "75px",
    width: "100%",
    background: "#054081",
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  navbarChildContainer: {
    height: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuIcon: {
    width: "26px",
    height: "26px",
    color: "#ffffff",
  },

  chatText: {
    color: "#ffffff",
    font: "bold 24px Poppins",
  },

  userProfileImage: {
    width: "34px",
    height: "34px",
  },

  leftContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    background: "#054081",
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    transition: "2s ease width",
    zIndex: 1
  },

  leftChildContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    width: "88%",
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

  userProfileDrawerImage: {
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
};

export default navbarStyles;
