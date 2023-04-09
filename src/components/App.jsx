import {Exercise1} from './exercise1/exercise1'
import {Exercise2} from './exercise2/exercise2'
import {Exercise3} from './exercise3/exercise3'
import {Exercise4} from './exercise4/exercise4'
import {AppCard} from './appStyled'

export default function App() {
    return(
      <AppCard>
       <Exercise1 />
       <Exercise2 />
       <Exercise3 />
       <Exercise4 />
     </AppCard>
    )
  };