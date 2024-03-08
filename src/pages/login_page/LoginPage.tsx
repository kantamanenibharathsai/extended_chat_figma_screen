import { Box, Button, Divider, FormControl, IconButton, InputAdornment, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material"
import loginPageStyles from "./LoginPage.Styles"
import extendedLogo from "../../assets/extendedLogo.png"
import loginImage from "../../assets/loginImage.png"
import { ChangeEvent, useState } from "react"
import countryPhoneNumCodes from "../../typescript/LoginPageData"
import { useNavigate } from "react-router-dom"



interface IState {
    phoneNumber: string,
    countryPhoneNumCode: string
}


const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState<IState["phoneNumber"]>("");
    const [countryPhoneNumCode, setCountryPhoneNumCode] = useState<IState["countryPhoneNumCode"]>("91")
    const navigate = useNavigate()

    const handlePhoneNumChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value)
    }

    const handleCountryPhoneNumCodeChange = (event: SelectChangeEvent) => {
        setCountryPhoneNumCode(event.target.value)
    }

    const loginBtnHandler = () => {
        navigate("/login")
    }

    const registerBtnHandler = () => {
        navigate("/register")
    }

    return (
        <Box sx={loginPageStyles.mainContainer}>
            <Stack direction={"column"} sx={loginPageStyles.largeDeviceStack}>
                <Box sx={loginPageStyles.topContainer}>
                    <Stack direction={"column"} justifyContent={"space-between"} sx={loginPageStyles.topLeftContainer}>
                        <Box component="img" alt="extended-logo" sx={loginPageStyles.extendedLogo} src={extendedLogo} />
                        <Box>
                            <Typography sx={loginPageStyles.welcomeBackText}>Welcome</Typography>
                            <Typography sx={loginPageStyles.welcomeBackText}>Back!</Typography>
                            <Typography marginTop={1} sx={loginPageStyles.commonFontAndColor}>Welcome Back You've Been Missed!</Typography>
                        </Box>
                        <Stack direction={"row"} gap={1} marginLeft={6}>
                            <Button onClick={loginBtnHandler} disableFocusRipple disableElevation disableTouchRipple disableRipple sx={{ ...loginPageStyles.loginAccountBtn, ...loginPageStyles.commonFontAndColor }}>Login Account</Button>
                            <Button onClick={registerBtnHandler} disableFocusRipple disableElevation disableTouchRipple disableRipple variant="contained" sx={{ ...loginPageStyles.registerBtn, ...loginPageStyles.commonFontAndColor }}>Register</Button>
                        </Stack>
                    </Stack>
                    <Box sx={loginPageStyles.topRightContainer}>
                        <Box component="img" alt="loginImage" sx={loginPageStyles.loginImage} src={loginImage} />
                    </Box>
                </Box>
                <Box sx={loginPageStyles.bottomContainer}>
                    <Box sx={loginPageStyles.bottomChildContainer}>
                        <Box sx={loginPageStyles.bottomCardContainer}>
                            <Stack direction={"column"} gap={"20px"}>
                                <Typography sx={loginPageStyles.bottomHeadingText}>Login Account</Typography>
                                <TextField sx={loginPageStyles.textFieldStyle} label="Phone Number" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FormControl>
                                                    <Select
                                                        value={countryPhoneNumCode}
                                                        onChange={handleCountryPhoneNumCodeChange}
                                                        sx={loginPageStyles.selectCountryPhoneNumElement}
                                                    >
                                                        {countryPhoneNumCodes.map(eachCountry => (<MenuItem sx={loginPageStyles.menuItemPhoneNum} key={eachCountry.countryId} value={eachCountry.countryCode}>
                                                            <Box sx={loginPageStyles.countryFlagImage} component={"img"} alt={`country-code-${eachCountry.countryCode}`} src={eachCountry.countryFlagUrl} />
                                                            {/* <Typography sx={loginPageStyles.countryCodeText}>{eachCountry.countryCode}</Typography> */}
                                                        </MenuItem>))}
                                                    </Select>
                                                </FormControl>
                                                <Divider sx={loginPageStyles.divider} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button disableTouchRipple disableFocusRipple disableRipple sx={loginPageStyles.sendVerifyBtn}>SEND</Button>
                            </Stack>
                        </Box>
                        <Box sx={loginPageStyles.bottomCardContainer}>
                            <Stack direction={"column"} gap={"20px"}>
                                <Typography sx={loginPageStyles.bottomHeadingText}>OTP verification</Typography>
                                <Box component="form" sx={loginPageStyles.otpFormContainer}>
                                    <Box sx={loginPageStyles.otpNumsContainer}>
                                        <TextField sx={loginPageStyles.otpNumTextFieldStyle} />
                                        {/* <Box sx={loginPageStyles.otpNumBox}>1</Box>
                                        <Box sx={loginPageStyles.otpNumBox}>1</Box>
                                        <Box sx={loginPageStyles.otpNumBox}>1</Box> */}
                                    </Box>
                                </Box>
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Button disableTouchRipple disableFocusRipple disableRipple sx={loginPageStyles.sendVerifyBtn}>VERIFY</Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <Stack direction={"row"} sx={loginPageStyles.smallDeviceStack}>
                <Box sx={loginPageStyles.mobileLeftContainer}>
                    <Box sx={loginPageStyles.mobileButtonsContainer}>
                        <Button disableFocusRipple disableElevation disableTouchRipple disableRipple sx={loginPageStyles.mobileLoginAccButton} onClick={loginBtnHandler}>Login Account</Button>
                        <Button disableFocusRipple disableElevation disableTouchRipple disableRipple sx={loginPageStyles.registerMobileBtn} onClick={registerBtnHandler}>Register</Button>
                    </Box>
                </Box>
                <Box sx={loginPageStyles.mobileRightContainer}>
                    <Box sx={loginPageStyles.formImageContainer}>
                        <Box sx={loginPageStyles.contentFormContainer}>
                            <Box>
                                <Typography sx={loginPageStyles.mobileWelcomeBackText}>Welcome</Typography>
                                <Typography sx={loginPageStyles.mobileWelcomeBackText}>Back!</Typography>
                                <Typography color={"#000000"} marginTop={1} sx={loginPageStyles.mobileWelcomeMissedText}>Welcome Back You've Been Missed!</Typography>
                            </Box>
                            <Box component="form" sx={loginPageStyles.mobileFormContainer}>
                                <Stack direction={"column"} gap={1}>
                                    <Typography sx={loginPageStyles.bottomHeadingText}>Login Account</Typography>
                                    <TextField sx={loginPageStyles.textFieldStyle} label="Phone Number" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FormControl>
                                                        <Select
                                                            value={countryPhoneNumCode}
                                                            onChange={handleCountryPhoneNumCodeChange}
                                                            sx={loginPageStyles.selectCountryPhoneNumElement}
                                                        >
                                                            {countryPhoneNumCodes.map(eachCountry => (<MenuItem sx={loginPageStyles.menuItemPhoneNum} key={eachCountry.countryId} value={eachCountry.countryCode}>
                                                                <Box sx={loginPageStyles.countryFlagImage} component={"img"} alt={`country-code-${eachCountry.countryCode}`} src={eachCountry.countryFlagUrl} />
                                                                {/* <Typography sx={loginPageStyles.countryCodeText}>{eachCountry.countryCode}</Typography> */}
                                                            </MenuItem>))}
                                                        </Select>
                                                    </FormControl>
                                                    <Divider sx={loginPageStyles.divider} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                </Stack>
                                <Box sx={loginPageStyles.buttonsContainer}>
                                    <Button disableTouchRipple disableFocusRipple disableRipple sx={loginPageStyles.loginBtn}>LOGIN</Button>
                                    <Typography sx={loginPageStyles.registerWithText}>Or Continue With</Typography>
                                    <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...loginPageStyles.iconButton, ...loginPageStyles.googleIconBtn }}>
                                            <Box component="img" alt="google-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/9d24/7445/2af0c41dee9e4e10cd77a441b11d7ce7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKZuuPIb3aXJxUkAIaI7sozhEZwh9g5w9gUOPhCMMkZP9HYzk1rGvjENzUKlzO7K90tCQCI9XVwNies8oLPNzAQth5Rzgkmw~gjPQOBkhWjtkHPY8iY9ZVTzea3NA9BMxPWndjCR9JYUwlMrmfFLTNfyK6evheHNz-wmrT7fNeU-f0PA8qmq8jYGs0r3eu70SFF-BGZTacSTsBuq7IAG6bwG-mXROFOnXDyd0D4del~5Hc9l~kxkZZAGkohySqMqXHYcXw~ozQiGBgsyOf8klFGA9v481Lg0ex5C~EoyPO~eKwTiKAGYZgI3Z23A9F05xdfdJrQq8vumJwuzhWGQLA__"} sx={loginPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...loginPageStyles.iconButton, ...loginPageStyles.facebookIconBtn }}>
                                            <Box component="img" alt="facebook-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/5791/d568/1a0be17a955c8cd3756ad4589484532c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IETFHcz5HFdoHKxbzP5PFFMitU4FZF0B5SqxlaFYtR7SGBdwu8Gn89cU57L1diea8CAaWiTwkfX40FI3mdSiioyfBu6~fvFk6KEjg-CWzCoW9FmiDWsnEw4qUZ5svH9lj8MGJhtqWDKl2qxsTUH-YyWDcuqeAaYELNGQt7WuLKWw-92fTay5R2~Ey87rLwqAjOKqtmuz~6K-MwHLnhY-2gqfOx~pzgzkGx4zkxbVUcmU30RViG1Jkx1xDVU4r7D0cWS4157DdcC9yPdCZ--UnD4QWm0EqfhjIJLbdBU2VrhXBMrDHtMZCuv3fNiH9vUUxJQdT~LI9gd161mQPlPnKw__"} sx={loginPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...loginPageStyles.iconButton, ...loginPageStyles.twitterIconBtn }}>
                                            <Box component="img" alt="twitter-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/19bf/2c98/45258389a30d3cb04c474688fcb32299?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8rtJ5xUGtIz36arV~3oRwruB5QRjJRvdsW0i4P3IHzUB4ZsJjEnXv0-UQJ3dTlQj6YYp5wOma9Z2FWLmkUle1ObbYg1DQr8xkg7znPdWIfP92~h70WuD0ynAhePa6z-T~5Dtm3kWjTiVekwP69Br7ndWTcfPosQ0gQhU0OM0bUjE1P1SZPOLeBpFvZ6uwDCaX2tNcITnzreb5SYAc4I~r3XHkKWEoLXXgQHeZtG8WlazKoJyxsHrtoMMkS~Mr0A7nEY5L9nQN4dt0CrlbV6CTWbHbNUvg2aYONa~o7ZSaIeXKxYQBVk43IDhoQD1NEl~XqGmuqQ0rADeWCgr760gw__"} sx={loginPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...loginPageStyles.iconButton, ...loginPageStyles.linkedinIconBtn }}>
                                            <Box component="img" alt="linkedin-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/4a04/0fd0/6fb6acf5010c7d37cf10c8f5deb1fca4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qy~GPm~gGWyQWFJarda8cwx-nq4exCWL5Xak4BPTTME2dMhsM5GKcpjYQJ76kgdYymI4QiwLLyKTCNH9C9Khm7UINXzgoRAlxcfEPKpCBHR0xhUCAZhDo3C~RGkhld-6f9jcQAAwSdZRSird-PPc4o45DKucDruqaQ~8jYjI~GqDbvjLYwBqGH4F6tY8SfKqf0YcL3AFcoSVaKBsOw8IBzCK3dQLNxOLLhI-yGtlte3YoH7YlNQMeQsF~BZFmCo9ixJO0aDAdbu7ZUS~0Ndqyv6kOI6WsLJVJhNMEWqSZsRuw8JHgwaPY8bXy5Celln0GOjYkeE0ENHwQjIMVJbcFw__"} sx={loginPageStyles.iconButtonIcon} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={loginPageStyles.mobileBottomImageContainer}>
                            <Box component="img" alt="loginImage" sx={loginPageStyles.loginImage} src={loginImage} />
                        </Box>
                    </Box>
                </Box>
            </Stack >
        </Box >
    )
}


export default LoginPage