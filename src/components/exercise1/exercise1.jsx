import DescriptionContainer from './description/description';
import StatsContainer from './stats/stats';
import user from './user/user.json';

import {Exercise1card} from './exercise1Styled'

export const Exercise1 = () => {
    return(
      <Exercise1card>
        <DescriptionContainer 
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}  />
     <StatsContainer 
     stats={user.stats}
     />
     
     </Exercise1card>
     
    )
  };