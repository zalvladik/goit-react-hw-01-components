import TitleContainer from './title/title'
import StatListContainer from './statList/statList'
import data from './data/data';

import {Exercise2card} from './exercise2Styled'

export const Exercise2 = () => {
    return(
      <Exercise2card>
       <TitleContainer 
       title="Upload stats"
       />
       <StatListContainer
       stats={data} 
       />
     </Exercise2card>
     
    )
};
