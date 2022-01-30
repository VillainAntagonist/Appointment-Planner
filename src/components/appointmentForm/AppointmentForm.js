import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
                                    contacts,
                                    title,
                                    setTitle,
                                    setContact,
                                    date,
                                    setDate,
                                    time,
                                    setTime,
                                    handleSubmit,
                                    occupied
                                }) => {
    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='title'>
                <input name='title'
                       type='text'
                       id='title'
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       placeholder='Name your appointment'
                       required
                />
            </label>
            <label htmlFor='date'>
                <input name='date'
                       type='date'
                       id='date'
                       value={date}
                       onChange={(e) => setDate(e.target.value)}
                       min={getTodayString()}
                       required
                />
            </label>
            <label htmlFor='time'>
                <input name='time'
                       type='time'
                       id='time'
                       value={time}
                       onChange={(e) => setTime(e.target.value)}
                       required
                />
            </label>
            <ContactPicker
                onChange={(e) => {
                    setContact(e.value)
                }}
                contacts={contacts}
            />
            {occupied && <p>You already planned appointment at this time.</p>}
            <input type='submit' value='Add Appointment'/>
        </form>
    );
};
