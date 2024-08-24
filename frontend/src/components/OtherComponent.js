// src/OtherComponent.js
import React from 'react';
import axios from 'axios';

function OtherComponent() {
    return (
        <div>
            <h2>Other Component</h2>
            <p>This is another component in your application.</p>
        </div>
    );
}
// In EyeTracker.js or another component


const sendGazeData = (data) => {
  axios.post('/api/save_gaze_data/', data)
    .then(response => {
      console.log('Data saved successfully');
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
};

// Call sendGazeData(data) inside the gaze listener

export default OtherComponent;
