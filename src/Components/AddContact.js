import React, { useState } from 'react'

const initialState = {name: '', phone: ''};

function AddContact({ contacts, setContacts }) {
    const [form, setForm] = useState(initialState);

    const submitForm = e => {
        e.preventDefault();
        
        if (form.name === '' || form.phone === '') {
            return false;
        }

        setContacts([...contacts, form]);
        setForm(initialState);
    };

    const onChangeInput = e => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="add-contact">
            <h1>ADD CONTACT</h1>
            <form onSubmit={submitForm}>
                <div className="contact-list-name">
                    <label name="name"> Name </label>
                    <input name="name" type="text" value={form.name} onChange={onChangeInput}/>
                </div>

                <div className="contact-list-phone">
                    <label name="phone"> Phone Number </label>
                    <input name="phone" type="text" value={form.phone} onChange={onChangeInput}/>
                </div>

                <input className="add-contact-btn" type="submit" value="Add Person"/>
            </form>
        </div>
    )
}

export default AddContact;