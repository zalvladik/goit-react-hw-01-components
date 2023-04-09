import {StatListCard,LiItem,SpanLabel,SpanPercentage} from './statListStyled'
import PropTypes from 'prop-types';


const StatListContainer = ({events}) => {
  
    return(
        <StatListCard>
    
    {events.map(event => (
      <LiItem key={event.id}>
      <SpanLabel>{event.label}</SpanLabel>
      <SpanPercentage>{event.percentage}%</SpanPercentage>
      </LiItem>
    ))}
      
      </StatListCard>

  
    )
}

StatListContainer.propTypes = {
  label: PropTypes.string,
  percentage:PropTypes.number,
}

export default StatListContainer;



