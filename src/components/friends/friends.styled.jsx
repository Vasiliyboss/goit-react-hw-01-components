import styled from "styled-components";
export const ContainerFriends = styled.div`
border: 1px solid blue;
background-color: white;
margin-left: 20px;
width: 300px;
`;

export const ListFriends = styled.ul`
padding: 0;
margin: 0;

`;

export const ImgFriends = styled.img`
padding: 5px;
`;

export const FriendsItem = styled.li`
display: flex;
border 1px solid grey;
border-radius: 10px;
gap: 20px;
:not(:last-child) {
   margin-bottom: 15px;
}
padding: 10px;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const NameFriend = styled.p`
font-size: 20px;
font-weight: 50px;
`;

export const Avatar = styled.span`
display: flex;
align-items: center;
margin-top: auto;
margin-bottom: auto;
width: 20px;
height: 20px;
background-color: ${p => (p.isOnline ? 'green' : 'red')};
border-radius: 50%;
`;