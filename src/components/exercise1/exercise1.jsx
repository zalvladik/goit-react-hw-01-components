import DescriptionContainer from './description/description';
import StatsContainer from './stats/stats';
import userInfo from './userInfo/user';

import {Exercise1card} from './exercise1Styled'

export const Exercise1 = () => {
    return(
      <Exercise1card>
        <DescriptionContainer 
     avatar={userInfo.avatar}
     username={userInfo.username}
     tag={userInfo.tag}
     location={userInfo.location}  />
     <StatsContainer 
     followers={userInfo.stats.followers}
     views={userInfo.stats.views}
     likes={userInfo.stats.likes}
     />
     
     </Exercise1card>
     
    )
  };