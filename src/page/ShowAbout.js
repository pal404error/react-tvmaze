import React from 'react'
import Shows from "./Shows"

export const ShowAbout = (props) => {
    console.log(props.data)
  return (
    <div>
        <h2>{props.data}</h2>
    </div>
  )
}
