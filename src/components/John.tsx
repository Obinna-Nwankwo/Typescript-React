import React, { ReactNode } from 'react'

type JohnProps = {
    children: React.ReactNode;
}
function John(props: JohnProps) {
  return (
    <div>{props.children}</div>
  )
}

export default John