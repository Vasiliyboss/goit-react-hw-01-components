import styled from "styled-components";
export const Wrapper = styled.table`
width: 600px;
margin-top: 30px;
margin-right: auto;
margin-left: auto;
`;

export const TransactionTh = styled.th`
border: 1px solid blue;
height: 40px;
`;

export const TransactionTd = styled.th`
border: 1px solid blue;
height: 40px;
`;

export const TransactionTr = styled.tr`
:nth-child(even) {
    background-color: #7ea1b2;
}
`;

export const TransactionThead = styled.thead`
background-color: lightblue;
padding: 30px;
`;