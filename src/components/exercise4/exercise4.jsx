import Tbody from './tbody/tbody';
import Thead from './thead/thead';
import tranasction from './transactionInfo/transactions';

import {Exercise4card} from './exercise4Styled'

export const Exercise4 = () => {
    return(
      <Exercise4card>
        <Thead/>
        <Tbody
        events={tranasction}
        />
     </Exercise4card>
     
    )
  };