import React from "react";

export const ContactForm = ({
                                name,
                                setName,
                                phone,
                                setPhone,
                                email,
                                setEmail,
                                handleSubmit,
                                duplicated
                            }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='name'>Name
                <input name='name'
                       type='text'
                       id='name'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder='Contact Name'
                       required
                />
            </label>Phone
            <label htmlFor='phone'>
                <input name='phone'
                       type='text'
                       id='phone'
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       placeholder='Contact Phone'
                       pattern='^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$'
                       required
                />
            </label>
            <label htmlFor='email'>Email
                <input name='email'
                       type='email'
                       id='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder='Contact Email'
                       required
                />
            </label>
            {duplicated && <p>Contact is already exist.</p>}
            <input type='submit' value='Add Contact'/>
        </form>
    );
};
