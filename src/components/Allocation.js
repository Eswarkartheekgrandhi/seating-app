import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, InputLabel } from "@mui/material";
import "../styles/classroomsPage.css";
import "../styles/Allocation.css";

const Allocation = () => {
  const [selectedBranches, setSelectedBranches] = useState([]);

  const handleBranchChange = (event) => {
    const { value } = event.target;
    setSelectedBranches(value);
  };

  const examHalls = [
    { name: "Hall A", capacity: 50 },
    { name: "Hall B", capacity: 70 },
    { name: "Hall C", capacity: 70 },
    { name: "Hall D", capacity: 70 },
    // Add more exam halls here
  ];

  const [selectedHalls, setSelectedHalls] = useState([]);

  const handleHallSelection = (hallName) => {
    if (selectedHalls.includes(hallName)) {
      setSelectedHalls(selectedHalls.filter((hall) => hall !== hallName));
    } else {
      setSelectedHalls([...selectedHalls, hallName]);
    }
  };

  console.log("Selected Halls:", selectedHalls);
  return (
    <div className="classrooms">
      <h2>Seat Allocation Page</h2>
      <div className="fields">
        <div className="f1">
          <InputLabel htmlFor="select-date">Select Date</InputLabel>
          <TextField id="select-date" type="date" />
        </div>
        <div className="f1">
          <InputLabel htmlFor="select-time">Time</InputLabel>
          <TextField id="select-time" type="time" />
        </div>
        <div className="f1">
          <InputLabel htmlFor="select-branch">Select Branches</InputLabel>
          <Select
            id="select-branch"
            multiple
            value={selectedBranches}
            onChange={handleBranchChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="branch1">Branch 1</MenuItem>
            <MenuItem value="branch2">Branch 2</MenuItem>
          </Select>
        </div>
      </div>
      <div>
        <h2>Select Exam Halls:</h2>
        <div className="hall-list">
          {examHalls.map((hall, index) => (
            <div key={index} className="hall-box">
              <label>
                <input
                  type="checkbox"
                  value={hall.name}
                  checked={selectedHalls.includes(hall.name)}
                  onChange={() => handleHallSelection(hall.name)}
                />
                <div className="hall-info">
                  <div className="hall-name">{hall.name}</div>
                  <div className="hall-capacity">Capacity: {hall.capacity}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="below">
        <div className="total-seats-section"></div>

        <div className="action-buttons">
          <Button variant="outlined" color="secondary">
            Arrange
          </Button>
          <Button variant="contained" color="primary">
            Receive Mail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Allocation;
