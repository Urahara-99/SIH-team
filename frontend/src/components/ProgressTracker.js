import './ProgressTracker.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressTracker = () => {
    const [progress, setProgress] = useState({
        progress_percentage: 0,
        tasks_completed: 0
    });

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get('/api/progress/');
                setProgress(response.data);
            } catch (error) {
                console.error('Error fetching progress:', error);
            }
        };

        fetchProgress();
    }, []);

    const handleCompleteTask = async (taskId) => {
        try {
            const response = await axios.post('/api/progress/', { tasks_completed: progress.tasks_completed + 1 });
            setProgress(response.data);
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    return (
        <div>
            <h1>Progress Tracker</h1>
            <div className="progress-bar">
                <span style={{ width: `${progress.progress_percentage}%` }}>
                    {progress.progress_percentage}%
                </span>
            </div>
            <p>Tasks Completed: {progress.tasks_completed} out of 4</p>
            <button onClick={() => handleCompleteTask(1)}>Complete Task 1</button>
            <button onClick={() => handleCompleteTask(2)}>Complete Task 2</button>
            <button onClick={() => handleCompleteTask(3)}>Complete Task 3</button>
            <button onClick={() => handleCompleteTask(4)}>Complete Task 4</button>
        </div>
    );
};

export default ProgressTracker;
