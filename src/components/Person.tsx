import React from 'react'
import { type PersonProps } from './Person.type'

// type PersonProps = {
//     name: {
//         first: string;
//         last: string;
//     }
// }

function Person(props: PersonProps) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person