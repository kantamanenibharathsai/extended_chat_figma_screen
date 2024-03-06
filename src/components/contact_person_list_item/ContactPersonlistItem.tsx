import { Avatar, Box, Typography } from "@mui/material"
import contactPersonListItemStyles from "./ContactPersonListItem.Styles"
import { User } from "../../typescript/types"

interface props {
    eachPersonContact: User,
    onChangeParticipantIdFunc: (participantId: number) => void,
    selected: boolean
}



const ContactPersonListItem = ({ eachPersonContact, onChangeParticipantIdFunc, selected }: props) => {

    const onClickContactPerson = (participantId: number) => {
        onChangeParticipantIdFunc(participantId)
    }


    return (
        <Box component="li" sx={{
            ...contactPersonListItemStyles.listItemPersonContact,
            backgroundColor: selected ? "#E5ECF6" : "transparent",
            borderRadius: selected ? "0px 30px 30px 0px" : "0px",
            borderBottom: selected ? "0px" : "1px solid #9e896a"
        }} onClick={() => onClickContactPerson(eachPersonContact.userId)}>
            <Avatar sx={contactPersonListItemStyles.personContactProfilePic} alt="Cindy Baker" src={eachPersonContact.userProfileUrl} />
            <Box sx={contactPersonListItemStyles.personContentContainer}>
                <Box sx={contactPersonListItemStyles.personLeftContentContainer}>
                    <Typography sx={contactPersonListItemStyles.personLeftContentName}>{eachPersonContact.userName}</Typography>
                    <Typography sx={contactPersonListItemStyles.personLeftContentLastMsg}>{eachPersonContact.lastMessage}</Typography>
                </Box>
                <Box sx={contactPersonListItemStyles.personRightContentContainer}>
                    <Typography sx={contactPersonListItemStyles.lastMsgTime}>{eachPersonContact.lastMessageTime}</Typography>
                    <Typography sx={contactPersonListItemStyles.unseenMsgsNumber}>5</Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default ContactPersonListItem