import FriendListItem from './friendListItem/FriendListItem';
import friendInfo from './friendInfo/friends';

import {Exercise3card} from './exercise3Styled'

export const Exercise3 = () => {
    return(
      <Exercise3card>
        <FriendListItem
        events={friendInfo}/>
     </Exercise3card>
     
    )
  };