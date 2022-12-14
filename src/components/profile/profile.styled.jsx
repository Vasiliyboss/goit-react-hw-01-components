import styled from "styled-components";
export const Wrapper = styled.div`
padding: 50px;
border: 1px solid black;
border-radius: 10px;
background: white;
width: 400px;
font-size: 15px;
height: 70vh;
margin-top: 30px;
margin-right: auto;
margin-left: auto;

`;

export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Image = styled.img`
height: 150px;
width: 150px;
border-radius: 50%;
border: 2px solid #797979;
`;

export const Name = styled.p`
font-size: 25px;
font-weight: 500;
margin-top: 50px;
`;

export const TagSocailNetwork = styled.p`
color: grey;
margin: 0;
`;

export const Location = styled.p`
color: grey;
margin-bottom: 70px;
`;

export const Stats = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;
justify-content: center;
list-style: none;
margin-top: 5px;
margin-left: -50px;
margin-right: -50px;
height: 70px;
gap: 20px;
border-top: 1px solid rgb(146, 146, 146);
background-color: #DCDCDC;
padding: 15px;

`;

export const StatsLi = styled.li`
display: flex;
// justify-content: center;
align-items: center;
flex-direction:column;
`;