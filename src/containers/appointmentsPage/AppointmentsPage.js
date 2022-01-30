import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {


    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [occupied, setOccupied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!appointments.find(appointment=> appointment.date===date)
        && !appointments.find(appointment=>appointment.time===time )){
            setOccupied(false);
            addAppointment(title, contact, date,time);
            setTitle('');
            setContact('');
            setDate('');
            setTime('');
        } else {
            setOccupied(true);
        }

    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                title={title}
                contact={contact}
                date={date}
                time={time}
                occupied={occupied}
                handleSubmit={handleSubmit}
                setTitle={setTitle}
                setContact={setContact}
                setDate={setDate}
                setTime={setTime}
                contacts={contacts}
                />
            </section>
            <hr/>
            <section>
                <h2>Appointments</h2>
                <TileList data={appointments} />
            </section>
        </div>
    );
};
