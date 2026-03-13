import React, { useEffect, useState } from "react";

const DisplayEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div>

      <h2>Registered Events</h2>

      <table border="1" cellPadding="10" cellSpacing="0">

        <thead>
          <tr>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Seating Capacity</th>
            <th>Organizer</th>
          </tr>
        </thead>

        <tbody>

          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.eventName}</td>
              <td>{event.location}</td>
              <td>{event.eventDate}</td>
              <td>{event.seatingCapacity}</td>
              <td>{event.organizer}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DisplayEvents;