import React, { useState } from "react";

const Registration = () => {

  const [eventData, setEventData] = useState({
    eventName: "",
    location: "",
    eventDate: "",
    seatingCapacity: "",
    organizer: ""
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEvents =
      JSON.parse(localStorage.getItem("events")) || [];

    const updatedEvents = [...existingEvents, eventData];

    localStorage.setItem("events", JSON.stringify(updatedEvents));

    alert("Event Registered Successfully!");

    setEventData({
      eventName: "",
      location: "",
      eventDate: "",
      seatingCapacity: "",
      organizer: ""
    });
  };

  return (
    <div>

      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={eventData.eventName}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="date"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="number"
            name="seatingCapacity"
            placeholder="Seating Capacity"
            value={eventData.seatingCapacity}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            name="organizer"
            placeholder="Organizer"
            value={eventData.organizer}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Register Event
        </button>

      </form>

    </div>
  );
};

export default Registration;