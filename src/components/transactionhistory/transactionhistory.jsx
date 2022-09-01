import PropTypes from "prop-types";
import { Wrapper, TransactionThead, TransactionTh, TransactionTd, TransactionTr } from "./transactionhistory.styled";
export const TransactionHistory = ({ items }) => {
    return (
        <Wrapper>
            <TransactionThead>
                <TransactionTr>
                    <TransactionTh>Type</TransactionTh>
                    <TransactionTh>Amount</TransactionTh>
                    <TransactionTh>Currency</TransactionTh>
                </TransactionTr>
            </TransactionThead>
            
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
            
                    <TransactionTr key={id}>
                        <TransactionTd>{type}</TransactionTd>
                        <TransactionTd>{amount}</TransactionTd>
                        <TransactionTd>{currency}</TransactionTd>
                    </TransactionTr>
                ))}
            </tbody>
        </Wrapper>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};