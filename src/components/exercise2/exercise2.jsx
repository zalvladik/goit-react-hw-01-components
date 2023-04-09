import TitleContainer from './title/title'
import StatListContainer from './statList/statList'
import dataInfo from './dataInfo/data';

import {Exercise2card} from './exercise2Styled'

export const Exercise2 = () => {
    return(
      <Exercise2card>
       <TitleContainer
       />
       <StatListContainer
       label={dataInfo.label}
       percentage={dataInfo.percentage}
       />
     </Exercise2card>
     
    )
  };