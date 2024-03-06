import { Avatar, Box, IconButton, InputAdornment, TextField, Typography, } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import SearchIcon from '@mui/icons-material/Search';
import ContactPersonListItem from "../../components/contact_person_list_item/ContactPersonlistItem";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { loggedInUserContactList, participantChats } from "../../typescript/data";
import { useEffect, useRef, useState } from "react";
import { Message } from "../../typescript/types";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import CloseIcon from '@mui/icons-material/Close';
import extendedLogo from "../../assets/extendedLogo.png"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { CiSearch } from "react-icons/ci";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css"

interface IState {
    participantId: number,
    userEnteredMsg: string,
    messagesList: Message[],
    isPickerVisible: boolean,
    isChatMobileContainerDisplayed: boolean,
    imageFile: string
}

type EmojiEvent = {
    id: string;
    name: string;
    native: string;
    unified: string;
    keywords: string[];
    emoticons: string[];
    shortcodes: string[];
};


const LandingPage = () => {
    const [isPickerVisible, setIsPickerVisible] = useState<IState["isPickerVisible"]>(false)
    const [participantId, setParticipantId] = useState<IState["participantId"]>(2);
    const [userEnteredMsg, setUserEnteredMsg] = useState<IState["userEnteredMsg"]>("");
    const [isChatMobileContainerDisplayed, setIsChatMobileContainerDisplayed] = useState<IState["isChatMobileContainerDisplayed"]>(false)
    const requiredChat = participantChats.filter(eachChat => eachChat.participants[1] === participantId);
    const [messagesList, setMessagesList] = useState<IState["messagesList"]>(requiredChat[0].messages);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [imageFile, setImageFile] = useState<IState["imageFile"]>("")
    const [lastMessageId, setLastMessageId] = useState(messagesList.length);

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messagesList]);

    const onChangeMsgInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEnteredMsg(event.target.value)
    }

    const onChangeParticipantIdFunc = (participantId: number) => {
        setParticipantId(participantId)
        setIsChatMobileContainerDisplayed(true)
    }

    const participantProfile = loggedInUserContactList.find(eachContact => eachContact.userId === requiredChat[0].participants[1])

    const onClickEmojiIconButtonHandler = () => {
        setIsPickerVisible(!isPickerVisible)
    }

    const onEmojiSelectEventHandler = (event: EmojiEvent) => {
        setUserEnteredMsg(event.native)
        setIsPickerVisible(!isPickerVisible);
    }

    const onClickSendIconButtonHandler = () => {
        console.log(lastMessageId, messagesList.length, messagesList)
        const newMessageObj = {
            messageId: lastMessageId + 1,
            messageSenderId: 1,
            content: userEnteredMsg,
            timestamp: new Date(),
        }

        requiredChat[0].messages.push(newMessageObj);
        setMessagesList((prevMsgs) => [...prevMsgs, newMessageObj]);
        setUserEnteredMsg("");
        setLastMessageId(prevLastMessageId => prevLastMessageId + 1);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result as string);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    const onClickImageIconButtonHandler = () => {
        document.getElementById("fileInput")?.click()
    }

    const onClickUploadImageContainer = () => {
        setImageFile("")
    }

    const onClickSendIconImageButtonHandler = () => {
        console.log(messagesList.length, messagesList)
        const newMessageObj = {
            messageId: lastMessageId + 1,
            messageSenderId: 1,
            content: userEnteredMsg,
            timestamp: new Date(),
            imagePath: imageFile
        }

        requiredChat[0].messages.push(newMessageObj);
        setMessagesList((prevMsgs) => [...prevMsgs, newMessageObj]);
        setUserEnteredMsg("")
        setImageFile("");
        setLastMessageId(prevLastMessageId => prevLastMessageId + 1);
    }

    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Box sx={landingPageStyles.childContainer}>
                <Navbar />
                <Box sx={landingPageStyles.leftContainer}>
                    <Box sx={landingPageStyles.leftChildContainer}>
                        <Box component="img" alt="extended-logo" sx={landingPageStyles.extendedLogo} src={extendedLogo} />
                        <Box sx={landingPageStyles.profileContentContainer}>
                            <Avatar sx={landingPageStyles.userProfileImage} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Typography sx={landingPageStyles.userNameText}>Bharath Sai</Typography>
                            <Typography sx={landingPageStyles.sellerText}>kantamanenibharath21@gmail.com</Typography>
                        </Box>
                        <Box component="ul" sx={landingPageStyles.unorderedList}>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <HomeOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Home</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <GridViewOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Category</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <Inventory2OutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Product</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <ShoppingCartOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Cart</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <AccountCircleOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>About Us</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <HelpOutlineOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Support</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <SettingsOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Settings</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={landingPageStyles.rightContainer}>
                    <Box sx={landingPageStyles.rightChildContainer}>
                        <Box sx={landingPageStyles.rightNavContainer}>
                            <Box sx={landingPageStyles.profileIconContainer}>
                                <ListOutlinedIcon sx={landingPageStyles.profileIcon} />
                                <Typography sx={landingPageStyles.chatText}>Chat</Typography>
                            </Box>
                            <Box sx={landingPageStyles.searchInputNotificationContainer}>
                                <Box sx={landingPageStyles.searchInputContainer}>
                                    <CiSearch className="search-icon" />
                                    <Box component="input" sx={landingPageStyles.inputElement} placeholder="Search" />
                                </Box>
                                <NotificationsOutlinedIcon sx={landingPageStyles.notificationIcon} />
                            </Box>
                        </Box>
                        <Box sx={landingPageStyles.rightBodyContainer}>
                            <Box sx={{ ...landingPageStyles.leftSearchContactsContainer, display: isChatMobileContainerDisplayed ? { xs: "none", lg: "flex" } : { xs: 'flex', lg: 'flex' } }}>
                                <TextField placeholder="search" sx={landingPageStyles.textFieldStyle} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={landingPageStyles.searchIcon} />
                                        </InputAdornment>
                                    ),
                                }} />
                                <Box component="ul" sx={landingPageStyles.contactsPersonsListContainer}>
                                    {loggedInUserContactList.map(eachPersonContact => <ContactPersonListItem onChangeParticipantIdFunc={onChangeParticipantIdFunc} key={eachPersonContact.userId} eachPersonContact={eachPersonContact} selected={eachPersonContact.userId === participantId} />)}
                                </Box>
                            </Box>
                            <Box sx={{ ...landingPageStyles.rightChartParentContainer, display: isChatMobileContainerDisplayed ? { xs: "flex", } : { xs: 'none', lg: 'flex' } }}>
                                <Box sx={landingPageStyles.loggedInUserContainer}>
                                    <Box sx={landingPageStyles.loggedInUserProfileContentContainer}>
                                        <Avatar sx={landingPageStyles.personContactProfilePic} alt={`${participantProfile?.userName}`} src={participantProfile?.userProfileUrl} />
                                        <Box sx={landingPageStyles.personContentContainer}>
                                            <Typography sx={landingPageStyles.personContentName}>{participantProfile?.userName}</Typography>
                                            <Typography sx={landingPageStyles.personContentLastMsg}>{participantProfile?.userName}21@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                    <IconButton disableFocusRipple disableRipple disableTouchRipple color="primary">
                                        <MoreHorizIcon sx={landingPageStyles.moreHorizIcon} />
                                    </IconButton>
                                </Box>
                                {isPickerVisible && (
                                    <Box sx={landingPageStyles.pickerContainer}>
                                        <Picker style={{ width: '100%' }} theme="light" data={data} previewPosition="none" onEmojiSelect={onEmojiSelectEventHandler} />
                                    </Box>
                                )}
                                <Box sx={landingPageStyles.chartBodyContainer}>
                                    <Box component="ul" ref={chatContainerRef} sx={{ ...landingPageStyles.chartContainer, height: imageFile ? { xs: "400px", lg: "300px", xl: "300px" } : { xs: "500px", lg: "300px", xl: "200px" } }}>
                                        {requiredChat[0].messages.map(eachMessage => (
                                            <Box key={eachMessage.messageId} component="li" sx={1 === eachMessage.messageId % 2 ? (eachMessage.imagePath ? { ...landingPageStyles.chartMsgSendListItem, ...landingPageStyles.chartMsgSendListItemImage } : landingPageStyles.chartMsgSendListItem) : eachMessage.imagePath ? { ...landingPageStyles.chartMsgRecieveListItem, ...landingPageStyles.chartMsgRecieveListItemImage } : landingPageStyles.chartMsgRecieveListItem}>
                                                {!eachMessage.imagePath && (<Typography sx={1 === eachMessage.messageId % 2 ? landingPageStyles.sendMessage : landingPageStyles.receiveMessage}>
                                                    {eachMessage.content}
                                                </Typography>)}
                                                {eachMessage.imagePath && (
                                                    <Box component="img" src={eachMessage.imagePath} alt={`image-err${eachMessage.messageId}`} sx={landingPageStyles.uploadImage} />
                                                )}
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box sx={landingPageStyles.textFieldImageContainer}>
                                        <TextField fullWidth sx={landingPageStyles.rightBottomMsgInputContainer} placeholder="Type message"
                                            onChange={onChangeMsgInputElement}
                                            value={userEnteredMsg}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={onClickImageIconButtonHandler}>
                                                            <Box component='input' type="file" display={"none"} id="fileInput" onChange={handleImageChange} />
                                                            <ImageOutlinedIcon sx={{ ...landingPageStyles.searchIcon, ...landingPageStyles.ImageOutlinedIcon }} />
                                                        </IconButton>
                                                        <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={onClickEmojiIconButtonHandler}>
                                                            <SentimentSatisfiedAltOutlinedIcon sx={landingPageStyles.searchIcon} />
                                                        </IconButton>

                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {!imageFile && (<IconButton disableFocusRipple disableRipple disableTouchRipple onClick={onClickSendIconButtonHandler} disabled={userEnteredMsg === ""} sx={landingPageStyles.sendIconButton}>
                                                            <SendOutlinedIcon sx={landingPageStyles.searchIcon} />
                                                        </IconButton>)}
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {imageFile && (<Box sx={landingPageStyles.uploadImageContainer} onClick={onClickUploadImageContainer}>
                                            <Box component={'img'} src={imageFile} sx={landingPageStyles.uploadImage} />
                                            <Box sx={landingPageStyles.circleWhite}>
                                                <CloseIcon />
                                            </Box>
                                        </Box>)}
                                    </Box>
                                    {imageFile && (
                                        <Box sx={landingPageStyles.circleWhiteSend}>
                                            <IconButton sx={landingPageStyles.sendIconButton} disableFocusRipple disableRipple disableTouchRipple onClick={onClickSendIconImageButtonHandler} disabled= {imageFile === ""}>
                                                <SendOutlinedIcon sx={landingPageStyles.searchIcon} />
                                            </IconButton>
                                        </Box>)}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}





export default LandingPage