import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({ text, path }) {

  return (
    <li>
      <Link to={path}>{text}</Link>
    </li>
  )
}
