import styled from '@emotion/styled'

export const FriendCard = styled.ul`
flex-direction:column;
padding:20px 50px;
list-style-type: none;
text-decoration: none;
font-size:20px;
`
export const FriendLi = styled.li`
display:flex;
margin-bottom:20px;
`

export const FriendName = styled.p`
margin-left:15px;
`

export const SpanOnline = styled.span`
width:10px;
height:10px;
background-color: ${props =>{
     switch(props.isOnline){
        case true:
                return 'green';
            case false:
                return 'red';
            default:
                 return 'black';
}
     }
}
        
}}
`
