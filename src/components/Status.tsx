import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

function Status(props: StatusProps) {

  let message;

  if (props.status === 'loading')
    message = 'Loading Data'

  else if (props.status === 'success')
    message = 'Data loaded successfully'

  else if (props.status === 'error')
    message = 'Error loading data'

  return (
    <div>
        {message}
    </div>
  )
}

export default Status