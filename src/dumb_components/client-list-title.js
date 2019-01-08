
import React from 'react'

function ClientListTitle(){
  return(
    <tbody>
      <tr>
        <th colSpan={8}>Client List</th>
      </tr>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Delete</th>
        <th>Edit</th>
        <th>Link</th>
      </tr>
    </tbody>
  )
}

export default ClientListTitle
