import React from 'react'
import './ProjectShow.css'

export default function ProjectShow({ item }) {
    return (
        <table>
            <thead>
                <tr>
                    <td id='first-table-cell'><h3>{item.head}</h3></td>
                    <td id='info-cell'>{item.info}</td>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                {item.using &&
                    <tr>
                        <td></td>
                        <td>using: {item.using}</td>
                    </tr>
                }
            </tbody>
        </table >
    )
}
