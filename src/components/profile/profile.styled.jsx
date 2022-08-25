import styled from "styled-components";
export const Wrapper = styled.div`
padding: 50px;
border: 1px solid black;
border-radius: 10px;
background: white;
width: 400px;
font-size: 15px;
height: 70vh;
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
margin-top: auto;
height: 70px;
gap: 20px;
border-top: 1px solid rgb(146, 146, 146);
background-color: #DCDCDC;
padding: 0;
`;

export const StatsLi = styled.li`
display: flex;
// justify-content: center;
align-items: center;
flex-direction:column;
`;