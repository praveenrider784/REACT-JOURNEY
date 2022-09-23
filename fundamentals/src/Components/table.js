import React from 'react'
import Column from './column'

function table() {
  return (
    <React.Fragment>
        <table>
            <th>
                <tr>
                    <Column/>
                </tr>
            </th>
        </table>
    </React.Fragment>
  )
}

export default table