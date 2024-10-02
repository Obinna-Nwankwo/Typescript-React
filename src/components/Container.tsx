import React from 'react'


type ContainerProps = {
    style: React.CSSProperties;
}
function Container(props: ContainerProps) {
  return (
    <div style={props.style}>
        This is a react style 
    </div>
  )
}

export default Container