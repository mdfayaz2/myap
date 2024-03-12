import React from 'react'

export default function App20() {
    const GREET=process.env.REACT_APP_GREET
  return (
    <div>
      {GREET}
    </div>
  )
}
