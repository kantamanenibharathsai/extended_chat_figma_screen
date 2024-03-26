import { Box, Button, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material"
import registerPageStyles from "./RegisterPage.Styles"
import extendedLogo from "../../assets/extendedLogo.png"
import registerImage from "../../assets/registerImage.png"
import stateImage from "../../assets/state.png"
import indianFlagImage from "../../assets/indianFlag.png"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";



interface IState {
    isPasswordVisible: boolean,
    isConfirmPasswordVisible: boolean,
    stateName: string
}


interface FormData {
    userName: string;
    mobileNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    state: string;
}


const RegisterPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<IState['isPasswordVisible']>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<IState['isConfirmPasswordVisible']>(false)
    const [stateName, setStateName] = useState<IState["stateName"]>("State")
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const passwordToggleHandler = () => {
        setIsPasswordVisible(prevPasswordVisible => !prevPasswordVisible)
    }

    const confirmPasswordToggleHandler = () => {
        setIsConfirmPasswordVisible(prevConfirmPasswordVisible => !prevConfirmPasswordVisible)
    }

    const handleStateChange = (event: SelectChangeEvent) => {
        setStateName(event.target.value)
    }

    const loginBtnHandler = () => {
        navigate("/login")
    }

    const registerBtnHandler = () => {
        navigate("/register")
    }

    const onSubmit = (data: FormData) => {
        const existingData = localStorage.getItem("formData");
        const formDataArray = existingData ? JSON.parse(existingData) : [];
        formDataArray.push(data);
        localStorage.setItem("formData", JSON.stringify(formDataArray));
        reset();
        console.table(data)
    };

    return (
        <Box sx={registerPageStyles.mainContainer}>
            <Stack direction={"column"} sx={registerPageStyles.largeDeviceStack}>
                <Box sx={registerPageStyles.topContainer}>
                    <Stack direction={"column"} justifyContent={"space-between"} sx={registerPageStyles.topLeftContainer}>
                        <Box component="img" alt="extended-logo" sx={registerPageStyles.extendedLogo} src={extendedLogo} />
                        <Box>
                            <Typography sx={registerPageStyles.welcomeBackText}>Welcome</Typography>
                            <Typography sx={registerPageStyles.welcomeBackText}>Back!</Typography>
                            <Typography marginTop={1} sx={registerPageStyles.commonFontAndColor}>Welcome Back You've Been Missed!</Typography>
                        </Box>
                        <Stack direction={"row"} gap={1} marginLeft={6}>
                            <Button disableFocusRipple disableElevation disableTouchRipple disableRipple sx={{ ...registerPageStyles.loginAccountBtn, ...registerPageStyles.commonFontAndColor }} onClick={loginBtnHandler}>Login Account</Button>
                            <Button disableFocusRipple disableElevation disableTouchRipple disableRipple variant="contained" sx={{ ...registerPageStyles.registerBtn, ...registerPageStyles.commonFontAndColor }} onClick={registerBtnHandler}>Register</Button>
                        </Stack>
                    </Stack>
                    <Box sx={registerPageStyles.topRightContainer}>
                        <Box component="img" alt="registerImage" sx={registerPageStyles.registerImage} src={registerImage} />
                    </Box>
                </Box>
                <Box sx={registerPageStyles.bottomContainer}>
                    <Box sx={registerPageStyles.bottomCardContainer}>
                        <Box sx={registerPageStyles.bottomCardChildContainer}>
                            <Typography sx={registerPageStyles.bottomHeadingText}
                            >Create New Account</Typography>
                            <Box component="form" sx={registerPageStyles.formContainer} onSubmit={handleSubmit(onSubmit)}
                                noValidate
                                autoComplete="off">
                                <Grid container spacing={{ xs: 1, md: 3 }} sx={registerPageStyles.textFieldsContainer}>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <TextField sx={registerPageStyles.textFieldStyle} label="Name" placeholder="Name"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon sx={registerPageStyles.textFieldIcon} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <TextField sx={registerPageStyles.textFieldStyle} label="Name"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start" sx={registerPageStyles.inputAdornment}>
                                                            <Box component={"img"} alt="indian-flag" src={indianFlagImage} sx={registerPageStyles.textFieldIcon} />
                                                            <Typography>+91 <Box component={"span"}><ExpandMoreOutlinedIcon sx={registerPageStyles.dropIcon} /></Box></Typography>
                                                            <Divider sx={registerPageStyles.divider} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <TextField sx={registerPageStyles.textFieldStyle} label="Email Address" placeholder="Email Address"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon sx={registerPageStyles.textFieldIcon} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                type="email"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "*Email is required!",
                                                    },
                                                    pattern: {
                                                        value:
                                                            /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "*Invalid Email Address",
                                                    },
                                                })}
                                                error={Boolean(errors.email)}
                                                helperText={errors.email?.message}





                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <TextField type={isPasswordVisible ? "text" : "password"} sx={registerPageStyles.textFieldStyle} label="Password" placeholder="Password"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockIcon sx={registerPageStyles.textFieldIcon} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            {isPasswordVisible ? <VisibilityIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={passwordToggleHandler} /> :
                                                                <VisibilityOffIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={passwordToggleHandler} />
                                                            }
                                                        </InputAdornment>
                                                    ),
                                                }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <TextField type={isConfirmPasswordVisible ? "text" : "password"} sx={registerPageStyles.textFieldStyle} label="Confirm Password" placeholder="Confirm Password"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockIcon sx={registerPageStyles.textFieldIcon} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            {isConfirmPasswordVisible ? <VisibilityIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={confirmPasswordToggleHandler} /> :
                                                                <VisibilityOffIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={confirmPasswordToggleHandler} />
                                                            }
                                                        </InputAdornment>
                                                    ),
                                                }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel id="stateName">State</InputLabel>
                                                <Select
                                                    labelId="stateName"
                                                    id="stateName"
                                                    value={stateName}
                                                    label="Age"
                                                    onChange={handleStateChange}
                                                >
                                                    <MenuItem value={"State"}>State</MenuItem>
                                                    <MenuItem value={"telangana"}>Telangana</MenuItem>
                                                    <MenuItem value={"andhra-pradesh"}>Andhra Pradesh</MenuItem>
                                                    <MenuItem value={"tamil-nadu"}>Tamil Nadu</MenuItem>
                                                    <MenuItem value={"maharashtra"}>Maharashtra</MenuItem>
                                                    <MenuItem value={"Kerala"}>Kerala</MenuItem>
                                                    <MenuItem value={"goa"}>Goa</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={registerPageStyles.checkboxAgreeTextContainer}>
                                    <Box component="input" type="checkbox" sx={registerPageStyles.checkbox} />
                                    <Typography sx={registerPageStyles.termsAndConditionsText}>Agree Terms & Conditions</Typography>
                                </Box>
                                <Box sx={registerPageStyles.buttonsContainer}>
                                    <Button disableTouchRipple disableFocusRipple disableRipple sx={registerPageStyles.registerNowBtn}>Register Now</Button>
                                    <Typography sx={registerPageStyles.registerWithText}>Or Register With</Typography>

                                    <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.googleIconBtn }}>
                                            <Box component="img" alt="google-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/9d24/7445/2af0c41dee9e4e10cd77a441b11d7ce7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKZuuPIb3aXJxUkAIaI7sozhEZwh9g5w9gUOPhCMMkZP9HYzk1rGvjENzUKlzO7K90tCQCI9XVwNies8oLPNzAQth5Rzgkmw~gjPQOBkhWjtkHPY8iY9ZVTzea3NA9BMxPWndjCR9JYUwlMrmfFLTNfyK6evheHNz-wmrT7fNeU-f0PA8qmq8jYGs0r3eu70SFF-BGZTacSTsBuq7IAG6bwG-mXROFOnXDyd0D4del~5Hc9l~kxkZZAGkohySqMqXHYcXw~ozQiGBgsyOf8klFGA9v481Lg0ex5C~EoyPO~eKwTiKAGYZgI3Z23A9F05xdfdJrQq8vumJwuzhWGQLA__"} sx={registerPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.facebookIconBtn }}>
                                            <Box component="img" alt="facebook-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/5791/d568/1a0be17a955c8cd3756ad4589484532c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IETFHcz5HFdoHKxbzP5PFFMitU4FZF0B5SqxlaFYtR7SGBdwu8Gn89cU57L1diea8CAaWiTwkfX40FI3mdSiioyfBu6~fvFk6KEjg-CWzCoW9FmiDWsnEw4qUZ5svH9lj8MGJhtqWDKl2qxsTUH-YyWDcuqeAaYELNGQt7WuLKWw-92fTay5R2~Ey87rLwqAjOKqtmuz~6K-MwHLnhY-2gqfOx~pzgzkGx4zkxbVUcmU30RViG1Jkx1xDVU4r7D0cWS4157DdcC9yPdCZ--UnD4QWm0EqfhjIJLbdBU2VrhXBMrDHtMZCuv3fNiH9vUUxJQdT~LI9gd161mQPlPnKw__"} sx={registerPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.twitterIconBtn }}>
                                            <Box component="img" alt="twitter-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/19bf/2c98/45258389a30d3cb04c474688fcb32299?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8rtJ5xUGtIz36arV~3oRwruB5QRjJRvdsW0i4P3IHzUB4ZsJjEnXv0-UQJ3dTlQj6YYp5wOma9Z2FWLmkUle1ObbYg1DQr8xkg7znPdWIfP92~h70WuD0ynAhePa6z-T~5Dtm3kWjTiVekwP69Br7ndWTcfPosQ0gQhU0OM0bUjE1P1SZPOLeBpFvZ6uwDCaX2tNcITnzreb5SYAc4I~r3XHkKWEoLXXgQHeZtG8WlazKoJyxsHrtoMMkS~Mr0A7nEY5L9nQN4dt0CrlbV6CTWbHbNUvg2aYONa~o7ZSaIeXKxYQBVk43IDhoQD1NEl~XqGmuqQ0rADeWCgr760gw__"} sx={registerPageStyles.iconButtonIcon} />
                                        </IconButton>
                                        <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.linkedinIconBtn }}>
                                            <Box component="img" alt="linkedin-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/4a04/0fd0/6fb6acf5010c7d37cf10c8f5deb1fca4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qy~GPm~gGWyQWFJarda8cwx-nq4exCWL5Xak4BPTTME2dMhsM5GKcpjYQJ76kgdYymI4QiwLLyKTCNH9C9Khm7UINXzgoRAlxcfEPKpCBHR0xhUCAZhDo3C~RGkhld-6f9jcQAAwSdZRSird-PPc4o45DKucDruqaQ~8jYjI~GqDbvjLYwBqGH4F6tY8SfKqf0YcL3AFcoSVaKBsOw8IBzCK3dQLNxOLLhI-yGtlte3YoH7YlNQMeQsF~BZFmCo9ixJO0aDAdbu7ZUS~0Ndqyv6kOI6WsLJVJhNMEWqSZsRuw8JHgwaPY8bXy5Celln0GOjYkeE0ENHwQjIMVJbcFw__"} sx={registerPageStyles.iconButtonIcon} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <Stack direction={"row"} sx={registerPageStyles.smallDeviceStack}>
                <Box sx={registerPageStyles.mobileLeftContainer}>
                    <Box sx={registerPageStyles.mobileButtonsContainer}>
                        <Button sx={registerPageStyles.mobileLoginAccButton} onClick={loginBtnHandler}>Login Account</Button>
                        <Button sx={registerPageStyles.registerMobileBtn} onClick={registerBtnHandler}>Register</Button>
                    </Box>
                </Box>
                <Box sx={registerPageStyles.mobileRightContainer}>
                    <Box sx={registerPageStyles.formImageContainer}>
                        <Typography sx={registerPageStyles.registerText}>Register</Typography>
                        <Box component="form" sx={registerPageStyles.mobileFormContainer}>
                            <Box sx={registerPageStyles.mobileFormCardContainer}>
                                <TextField fullWidth sx={{ ...registerPageStyles.mobileTextFieldStyle, ...registerPageStyles.mobileNameTextFieldStyle }} placeholder="Name"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon sx={registerPageStyles.textFieldIcon} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField fullWidth sx={registerPageStyles.mobileTextFieldStyle}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" sx={registerPageStyles.inputAdornment}>
                                                <Box component={"img"} alt="indian-flag" src={indianFlagImage} sx={registerPageStyles.flagImageTextField} />
                                                <Typography>+91 <Box component={"span"}><ExpandMoreOutlinedIcon sx={registerPageStyles.dropIcon} /></Box></Typography>
                                                <Divider sx={registerPageStyles.divider} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField fullWidth sx={registerPageStyles.mobileTextFieldStyle} placeholder="Email Address"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon sx={registerPageStyles.textFieldIcon} />
                                            </InputAdornment>
                                        ),
                                    }} />
                                <TextField fullWidth type={isPasswordVisible ? "text" : "password"} sx={registerPageStyles.mobileTextFieldStyle} placeholder="Password"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon sx={registerPageStyles.textFieldIcon} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {isPasswordVisible ? <VisibilityIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={passwordToggleHandler} /> :
                                                    <VisibilityOffIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={passwordToggleHandler} />
                                                }
                                            </InputAdornment>
                                        ),
                                    }} />
                                <TextField fullWidth type={isConfirmPasswordVisible ? "text" : "password"} sx={registerPageStyles.mobileTextFieldStyle} placeholder="Confirm Password"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon sx={registerPageStyles.textFieldIcon} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {isConfirmPasswordVisible ? <VisibilityIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={confirmPasswordToggleHandler} /> :
                                                    <VisibilityOffIcon sx={{ ...registerPageStyles.textFieldIcon, ...registerPageStyles.passwordVisibleOrNotIcon }} onClick={confirmPasswordToggleHandler} />
                                                }
                                            </InputAdornment>
                                        ),
                                    }} />
                                <Box sx={registerPageStyles.selectIconContainer}>
                                    <Box component="img" alt="state-icon-image" src={stateImage} sx={registerPageStyles.stateImg} />
                                    <FormControl fullWidth sx={registerPageStyles.mobileStateSelectStyle}>
                                        {/* <InputLabel id="stateName">State</InputLabel> */}
                                        <Select
                                            labelId="stateName"
                                            id="stateName"
                                            value={stateName}
                                            onChange={handleStateChange}
                                            sx={registerPageStyles.mobileStateSelectStyle}
                                            placeholder="State"
                                        >
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"State"}>State</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"telangana"}>Telangana</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"andhra-pradesh"}>Andhra Pradesh</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"tamil-nadu"}>Tamil Nadu</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"maharashtra"}>Maharashtra</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"Kerala"}>Kerala</MenuItem>
                                            <MenuItem sx={registerPageStyles.stateMenuItem} value={"goa"}>Goa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box sx={registerPageStyles.checkboxAgreeTextContainer}>
                                <Box component="input" type="checkbox" sx={registerPageStyles.checkbox} />
                                <Typography sx={registerPageStyles.termsAndConditionsText}>Terms & Conditions</Typography>
                            </Box>
                            <Box sx={registerPageStyles.buttonsContainer}>
                                <Button disableTouchRipple disableFocusRipple disableRipple sx={registerPageStyles.registerNowBtn}>Register Now</Button>
                                <Typography sx={registerPageStyles.registerWithText}>Or Register With</Typography>
                                <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                                    <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.googleIconBtn }}>
                                        <Box component="img" alt="google-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/9d24/7445/2af0c41dee9e4e10cd77a441b11d7ce7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKZuuPIb3aXJxUkAIaI7sozhEZwh9g5w9gUOPhCMMkZP9HYzk1rGvjENzUKlzO7K90tCQCI9XVwNies8oLPNzAQth5Rzgkmw~gjPQOBkhWjtkHPY8iY9ZVTzea3NA9BMxPWndjCR9JYUwlMrmfFLTNfyK6evheHNz-wmrT7fNeU-f0PA8qmq8jYGs0r3eu70SFF-BGZTacSTsBuq7IAG6bwG-mXROFOnXDyd0D4del~5Hc9l~kxkZZAGkohySqMqXHYcXw~ozQiGBgsyOf8klFGA9v481Lg0ex5C~EoyPO~eKwTiKAGYZgI3Z23A9F05xdfdJrQq8vumJwuzhWGQLA__"} sx={registerPageStyles.iconButtonIcon} />
                                    </IconButton>
                                    <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.facebookIconBtn }}>
                                        <Box component="img" alt="facebook-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/5791/d568/1a0be17a955c8cd3756ad4589484532c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IETFHcz5HFdoHKxbzP5PFFMitU4FZF0B5SqxlaFYtR7SGBdwu8Gn89cU57L1diea8CAaWiTwkfX40FI3mdSiioyfBu6~fvFk6KEjg-CWzCoW9FmiDWsnEw4qUZ5svH9lj8MGJhtqWDKl2qxsTUH-YyWDcuqeAaYELNGQt7WuLKWw-92fTay5R2~Ey87rLwqAjOKqtmuz~6K-MwHLnhY-2gqfOx~pzgzkGx4zkxbVUcmU30RViG1Jkx1xDVU4r7D0cWS4157DdcC9yPdCZ--UnD4QWm0EqfhjIJLbdBU2VrhXBMrDHtMZCuv3fNiH9vUUxJQdT~LI9gd161mQPlPnKw__"} sx={registerPageStyles.iconButtonIcon} />
                                    </IconButton>
                                    <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.twitterIconBtn }}>
                                        <Box component="img" alt="twitter-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/19bf/2c98/45258389a30d3cb04c474688fcb32299?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8rtJ5xUGtIz36arV~3oRwruB5QRjJRvdsW0i4P3IHzUB4ZsJjEnXv0-UQJ3dTlQj6YYp5wOma9Z2FWLmkUle1ObbYg1DQr8xkg7znPdWIfP92~h70WuD0ynAhePa6z-T~5Dtm3kWjTiVekwP69Br7ndWTcfPosQ0gQhU0OM0bUjE1P1SZPOLeBpFvZ6uwDCaX2tNcITnzreb5SYAc4I~r3XHkKWEoLXXgQHeZtG8WlazKoJyxsHrtoMMkS~Mr0A7nEY5L9nQN4dt0CrlbV6CTWbHbNUvg2aYONa~o7ZSaIeXKxYQBVk43IDhoQD1NEl~XqGmuqQ0rADeWCgr760gw__"} sx={registerPageStyles.iconButtonIcon} />
                                    </IconButton>
                                    <IconButton disableTouchRipple disableFocusRipple disableRipple component="button" sx={{ ...registerPageStyles.iconButton, ...registerPageStyles.linkedinIconBtn }}>
                                        <Box component="img" alt="linkedin-icon-iamge" src={"https://s3-alpha-sig.figma.com/img/4a04/0fd0/6fb6acf5010c7d37cf10c8f5deb1fca4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qy~GPm~gGWyQWFJarda8cwx-nq4exCWL5Xak4BPTTME2dMhsM5GKcpjYQJ76kgdYymI4QiwLLyKTCNH9C9Khm7UINXzgoRAlxcfEPKpCBHR0xhUCAZhDo3C~RGkhld-6f9jcQAAwSdZRSird-PPc4o45DKucDruqaQ~8jYjI~GqDbvjLYwBqGH4F6tY8SfKqf0YcL3AFcoSVaKBsOw8IBzCK3dQLNxOLLhI-yGtlte3YoH7YlNQMeQsF~BZFmCo9ixJO0aDAdbu7ZUS~0Ndqyv6kOI6WsLJVJhNMEWqSZsRuw8JHgwaPY8bXy5Celln0GOjYkeE0ENHwQjIMVJbcFw__"} sx={registerPageStyles.iconButtonIcon} />
                                    </IconButton>
                                </Stack>
                            </Box>
                        </Box>
                        <Box sx={registerPageStyles.mobileBottomImageContainer}>
                            <Box component="img" alt="registerImage" sx={registerPageStyles.registerImage} src={registerImage} />
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}


export default RegisterPage