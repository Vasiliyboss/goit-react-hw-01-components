import styled from "styled-components";
export const Container = styled.section`
background: white;
border: 1px solid black;
width: 400px;
height: auto;
margin-left: 20px;
`;

export const CommonTitle = styled.h2`
font-size: 25px;
text-align: center;
color: grey;
`;

export const StatisticList = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
text-align: center;
flex-basis: calc(100% / 5);
`;

export const StatisticPercentage = styled.span`
font-size: 25px;
font-weight: 400;
margin-top: 15px;

`;