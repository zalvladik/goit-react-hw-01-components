import Tbody from './tbody/tbody';
import Thead from './thead/thead';
import transactions from './transactions/transactions';

import {Exercise4card} from './exercise4Styled'

export const Exercise4 = () => {
    return(
      <Exercise4card>
        <Thead/>
        <Tbody
        items={transactions} 
        />
     </Exercise4card>
     
    )
  };