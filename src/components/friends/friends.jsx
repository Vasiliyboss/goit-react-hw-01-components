import PropTypes from "prop-types";
import { ContainerFriends, ImgFriends, ListFriends, FriendsItem, NameFriend, Avatar } from "./friends.styled";
export const FriendList = ({ friends }) => { 
    return (
        <ContainerFriends>
            <ListFriends>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendsItem key={id}>
                        <Avatar isOnline={isOnline}>{isOnline}</Avatar>
                        <ImgFriends src={avatar} alt={name} width="48"/>
                        <NameFriend>{name}</NameFriend>
                    </FriendsItem>
                ))}
            </ListFriends>
        </ContainerFriends>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.any,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};