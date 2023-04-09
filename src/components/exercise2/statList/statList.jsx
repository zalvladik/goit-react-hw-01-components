import {StatListCard,LiItem,SpanLabel,SpanPercentage} from './statListStyled'
import PropTypes from 'prop-types';


const StatListContainer = ({label,percentage,key}) => {
  
    return(
        <StatListCard>
    <LiItem>
      <SpanLabel >{label}</SpanLabel>
      <SpanPercentage >{percentage}</SpanPercentage>
    </LiItem>
  </StatListCard>
    )
}


StatListContainer.propTypes = {
    label: PropTypes.string,
    percentage:PropTypes.number,
  }

export default StatListContainer;