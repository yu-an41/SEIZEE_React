import { React }from 'react'

const Option = ({ handleClick, content }) => {
  return <li onClick={handleClick}> {content} </li>
}

export default Option
