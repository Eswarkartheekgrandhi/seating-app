import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../styles/examsPage.css";

function SchedulePage() {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedBranches, setSelectedBranches] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [examSchedules, setExamSchedules] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles.length > 0) {
      const fileName = selectedFiles[0].name;
      setSelectedFileName(fileName);
    } else {
      setSelectedFileName("");
    }
  };

  const handleAddButtonClick = () => {
    if (
      selectedSemester &&
      selectedFileName &&
      selectedBranches &&
      selectedSubject
    ) {
      const newSchedule = {
        semester: selectedSemester,
        fileName: selectedFileName,
        branch: selectedBranches,
        subject: selectedSubject,
        date: document.getElementById("select-date").value,
        time: document.getElementById("select-time").value,
      };

      setExamSchedules([...examSchedules, newSchedule]);

      setSelectedSemester("");
      setSelectedFileName("");
      setSelectedBranches("");
      setSelectedSubject("");
    } else {
      console.error("Please fill in all fields");
    }
  };

  return (
    <div className="classrooms">
      <div className="top">
        <div className="f1">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <InputLabel htmlFor="select-semester">Select semester</InputLabel>
            <Select
              id="select-semester"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <MenuItem value="sem1">1</MenuItem>
              <MenuItem value="sem2">2</MenuItem>
              <MenuItem value="sem3">3</MenuItem>
              <MenuItem value="sem4">4</MenuItem>
              <MenuItem value="sem5">5</MenuItem>
              <MenuItem value="sem6">6</MenuItem>
            </Select>
          </div>
        </div>

        <div>
          <InputLabel htmlFor="file-upload">Student Details</InputLabel>
          <input
            accept=".csv"
            style={{ display: "none" }}
            id="file-upload"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          {selectedFileName && (
            <div style={{ marginTop: "8px" }}>
              Uploaded File: {selectedFileName}
            </div>
          )}
        </div>
        <label htmlFor="file-upload">
          <Button
            style={{ backgroundColor: "#9f9894", color: "white" }}
            component="span"
          >
            Upload File
          </Button>
        </label>
      </div>

      <h2>ADD SLOTS</h2>
      <div className="fields">
        <div className="f1">
          <InputLabel htmlFor="select-date">Date</InputLabel>
          <TextField id="select-date" type="date" />
        </div>
        <div className="f1">
          <InputLabel htmlFor="select-time">Time</InputLabel>
          <TextField id="select-time" type="time" />
        </div>
        <div className="f1">
          <InputLabel htmlFor="select-branch">Select Branch</InputLabel>
          <Select
            id="select-branch"
            value={selectedBranches}
            onChange={(e) => setSelectedBranches(e.target.value)}
          >
            <MenuItem value="branch1">Branch 1</MenuItem>
            <MenuItem value="branch2">Branch 2</MenuItem>
          </Select>
        </div>
        <div className="f1">
          <InputLabel htmlFor="select-subject"> Subject</InputLabel>
          <TextField
            id="select-subject"
            type="text"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          />
        </div>
        <div className="f1">
          <Button
            onClick={handleAddButtonClick}
            style={{ backgroundColor: "#9f9894", color: "white" }}
          >
            ADD
          </Button>
        </div>
      </div>
      <div>
        <h2>Exam Schedules</h2>
        <TableContainer component={Paper} className="TableContainer">
          <Table className="Table">
            <TableHead className="TableHead">
              <TableRow>
                <TableCell className="TableHeadCell">Date</TableCell>
                <TableCell className="TableHeadCell">Time</TableCell>
                <TableCell className="TableHeadCell">Semester</TableCell>
                <TableCell className="TableHeadCell">Branch</TableCell>
                <TableCell className="TableHeadCell">Subject</TableCell>
                <TableCell className="TableHeadCell">File Uploaded</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {examSchedules.map((schedule, index) => (
                <TableRow key={index}>
                  <TableCell>{schedule.date}</TableCell>
                  <TableCell>{schedule.time}</TableCell>
                  <TableCell>{schedule.semester}</TableCell>
                  <TableCell>{schedule.branch}</TableCell>
                  <TableCell>{schedule.subject}</TableCell>
                  <TableCell>{schedule.fileName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="below">
        <div className="total-seats-section">
          <p>Total Exams Scheduled: {examSchedules.length}</p>
        </div>

        <div className="action-buttons">
          <Button variant="outlined" color="secondary">
            Clear All
          </Button>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
