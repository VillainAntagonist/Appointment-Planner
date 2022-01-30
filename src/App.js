import React, {useState} from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";

import {AppointmentsPage} from "./containers/appointmentsPage/AppointmentsPage";
import {ContactsPage} from "./containers/contactsPage/ContactsPage";

function App() {

    const [contacts, setContact] = useState([]);
    const [appointmentsData, setAppointmentsData] = useState([]);
    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };


    const addContact=(name,phone,email)=>{
        setContact(oldContacts=>{
            return [...oldContacts,{
                name,
                phone,
                email
            }]
        })
    }

    const addAppointmentsData = (title, contact, date, time) => {
        setAppointmentsData(data=>{
            return [...data, {
                title, contact, date, time
            }]
        })
    }

    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS}/>
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        <ContactsPage
                            addContact={addContact}
                            contacts={contacts}/>
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        <AppointmentsPage
                                addAppointment={addAppointmentsData}
                                appointments={appointmentsData}
                                contacts={contacts}
                        />
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
