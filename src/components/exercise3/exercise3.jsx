import FriendListItem from './friendListItem/FriendListItem';
import friends from './friends/friends.json';

import {Exercise3card} from './exercise3Styled'

export const Exercise3 = () => {
    return(
      <Exercise3card>
        <FriendListItem
        friends={friends} />
     </Exercise3card>
     
    )
  };