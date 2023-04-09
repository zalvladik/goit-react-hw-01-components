import {Info,IMG,BigFont} from './descriptionStyled'
import PropTypes from 'prop-types';


 const DescriptionContainer = ({avatar,username,tag,location}) => {
  
    return(
        <Info>
        <IMG 
          src={avatar}
          alt="User avatar"
        />
        <BigFont  >{username}</BigFont>
        <p  >{tag}</p>
        <p  >{location}</p>
      </Info>
    )
}

DescriptionContainer.propTypes = {
  tag: PropTypes.string,
  lication:PropTypes.string,
  username:PropTypes.string,
}

export default DescriptionContainer;