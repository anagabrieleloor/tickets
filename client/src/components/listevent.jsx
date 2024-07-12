import React, { useState } from 'react';
import { createEvent } from "../api/events";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    description: '',
    venue: '',
    address: '',
    datetime: '',
    category: '',
    organizer: '',
    creator: '',
    available_tickets: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createEvent(formData);
      console.log('Event created', result);
      // Handle successful event creation, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error creating event', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Artist:
        <input type="text" name="artist" value={formData.artist} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Venue:
        <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <label>
        Date and Time:
        <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </label>
      <label>
        Organizer:
        <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} required />
      </label>
      <label>
        Creator:
        <input type="text" name="creator" value={formData.creator} onChange={handleChange} required />
      </label>
      <label>
        Available Tickets:
        <input type="number" name="available_tickets" value={formData.available_tickets} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
