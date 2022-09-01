import styled from "styled-components";
export const Wrapper = styled.table`
width: 600px;
padding-top: 400px;
padding-left: 20px;
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