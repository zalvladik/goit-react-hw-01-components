import {FriendCard,FriendLi,FriendName,SpanOnline} from './FriendListItemStyled'
import PropTypes from 'prop-types'

const FriendListItem = ({events}) => {
  
    return(
      <FriendCard>
    {events.map(event => (
      <FriendLi key={event.id} >
      <SpanOnline isOnline={event.isOnline}></SpanOnline>
      <img src={event.avatar} alt="User avatar" width="48" />
      <FriendName >{event.name}</FriendName>
    </FriendLi>
    ))}
</FriendCard>
    )
}

FriendListItem.propTypes = {
   id: PropTypes.number,
   isOnline: PropTypes.bool,
   avatar: PropTypes.object,
   name: PropTypes.string,
}


export default FriendListItem;



