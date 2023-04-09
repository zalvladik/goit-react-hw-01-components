import {TbodyContainer,TbodyTr,TbodyTd} from './tbodyStyled'
import PropTypes from 'prop-types'

const Tbody = ({events}) => {
  
    return(
      <TbodyContainer>
  
    {events.map(event => (
      <TbodyTr key={event.id}>
      <TbodyTd>{event.type}</TbodyTd>
      <TbodyTd>{event.amount}</TbodyTd>
      <TbodyTd>{event.currency}</TbodyTd>
    </TbodyTr>
    ))}
    </TbodyContainer>
    )
}

Tbody.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}


export default Tbody;



