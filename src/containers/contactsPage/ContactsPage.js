import React, {useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duplicated, setDuplicated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!contacts.find(contact=>contact.name===name)) {
            setDuplicated(false)
            addContact(name, phone, email);
            setName('');
            setPhone('');
            setEmail('')
        }
        else {
            setDuplicated(true)
        }
    };



    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    name={name}
                    phone={phone}
                    email={email}
                    handleSubmit={handleSubmit}
                    duplicated={duplicated}
                />
            </section>
            <hr/>
            <section>
                <h2>Contacts</h2>
                <TileList data={contacts} />
            </section>
        </div>
    );
};
