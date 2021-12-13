import React from 'react'

export default function List({contacts}) {
    return (
        <div className="list-contacts">
            <ul className="contact-list">
                <h1>CONTACTS</h1>
                {
                    contacts.map((item, index) => <li className="contact-list-item" key={index}>{item.name}-----{item.phone}</li>)
                }
            </ul>
        </div>
    )
}
