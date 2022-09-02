import PropTypes from "prop-types";
import { Container, CommonTitle, StatisticList, Item, StatisticPercentage} from "./statistics.styled";
const colors = ['#00fff0', '#ff00a1', '#6e0f37', '#00ff00', '#d99d2e'];
export const Statistics = ({ title, stats }) => {
    return (
        <Container>
        {title && <CommonTitle>{title}</CommonTitle>}
            <StatisticList>
                {stats.map(({id, label, percentage}, index) => (
                    <Item key={id} style={{ background: colors[index] }}>
                                                
                            <span>{label}</span>
                            <StatisticPercentage>{percentage + '%'}</StatisticPercentage>
                        
                    </Item>))}
            
        </StatisticList>
        </Container>
    )

  }
      Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};