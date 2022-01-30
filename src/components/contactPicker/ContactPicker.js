import React from "react";
import Select from "react-select";

export const ContactPicker = ({contacts, onChange}) => {
    const options = contacts.map((contact)=>{
        return (
            {
                value: contact.name,
                label: contact.name
            }
        )
    })


    return (
        <Select
            onChange={selected=>onChange(selected)}
            placeholder={'Choose a contact'}
            options={options}/>
    );
};
