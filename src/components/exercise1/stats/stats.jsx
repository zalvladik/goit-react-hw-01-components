import {QuantityContainer,Quantity} from './statsStyled'
import PropTypes from 'prop-types';


const StatsContainer = ({followers,views,likes}) => {
    return(
        <QuantityContainer>
    <Quantity>
      <span >Followers</span>
      <span >{followers}</span>
    </Quantity>
    <Quantity>
      <span >Views</span>
      <span >{views}</span>
    </Quantity>
    <Quantity>
      <span >Likes</span>
      <span  >{likes}</span>
    </Quantity>
  </QuantityContainer>
    )
}

StatsContainer.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,

}

export default StatsContainer;