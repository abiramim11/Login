import React, { useState } from 'react';
// import './DateTimeInputForm.css'; // Import CSS file for styling

const DateTimeInputForm = () => {
  const [fromDate, setFromDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toDate, setToDate] = useState('');
  const [toTime, setToTime] = useState('');

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleFromTimeChange = (e) => {
    setFromTime(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleToTimeChange = (e) => {
    setToTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input data, like sending it to a backend server
    console.log('From Date:', fromDate);
    console.log('From Time:', fromTime);
    console.log('To Date:', toDate);
    console.log('To Time:', toTime);
  };

  return (
    <center><div className="container">
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="fromTime">From Time:</label>
          <input
            type="time"
            id="fromTime"
            value={fromTime}
            onChange={handleFromTimeChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="toTime">To Time:</label>
          <input
            type="time"
            id="toTime"
            value={toTime}
            onChange={handleToTimeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></center>
  );
};

export default DateTimeInputForm;

