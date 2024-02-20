const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const excelToJson = require('convert-excel-to-json');

// Firebase setup
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyAPmI2GrAGRim5IRKJbnbzkh_vkss8d2tk",
  authDomain: "xenesis-ff41b.firebaseapp.com",
  projectId: "xenesis-ff41b",
  storageBucket: "xenesis-ff41b.appspot.com",
  messagingSenderId: "817731298821",
  appId: "1:817731298821:web:bde1873ed1e25a093e5e6c",
  measurementId: "G-2NC81SKZDN",
  databaseURL:"https://xenesis-ff41b-default-rtdb.firebaseio.com",
};
const firebaseApp = initializeApp(firebaseConfig);
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = getStorage(firebaseApp);

router.post('/upload-file-operation', async (req, res) => {
  try {
    console.log('Starting file upload process...');
    
    // Extract file information from the request body
    const { fileName, fileType, filePreview, operation } = req.body;

    // Log the received file information
    console.log('Received file information:');
    console.log('File Name:', fileName);
    console.log('File Type:', fileType);
    // Optionally log the file preview (for debugging purposes)
    // console.log('File Preview:', filePreview);
    console.log('Operation:', operation);

    // Ensure that the required fields are present
    if (!fileName || !fileType || !filePreview || !operation) {
      console.error('Missing file information:', req.body);
      return res.status(400).json({ error: 'Missing file information.' });
    }

    // Convert base64 string to buffer
    console.log('Converting base64 string to buffer...');
    const fileData = Buffer.from(filePreview.split(';base64,').pop(), 'base64');

    // Upload file to Firebase Storage
    console.log('Uploading file to Firebase Storage...');
    const storageRef = ref(storage, `uploads/${fileName}`);
    await uploadBytes(storageRef, fileData);

    // Get download URL
    console.log('Retrieving download URL...');
    const downloadURL = await getDownloadURL(storageRef);

    // Send download URL back to the frontend
    console.log('Sending download URL to frontend...');
    res.status(200).json({ downloadURL });
    
    console.log('File upload process completed successfully.');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'An error occurred while uploading the file.' });
  }
});

// In your server file (e.g., app.js or routes file)
// In your server file (e.g., app.js or routes file)
router.post('/process-download-url', async (req, res) => {
  try {
    const { downloadURL } = req.body;

    // Run the descriptive.py script using the download URL as an argument
    const pythonProcess = spawn('python', ['descriptive.py', downloadURL, 'output.csv', 'column_stats.csv']);

    pythonProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully.');
        res.status(200).json({ message: 'Python script executed successfully.' });
      } else {
        console.error(`Python script exited with code ${code}`);
        res.status(500).json({ error: 'An error occurred while executing the Python script.' });
      }
    });
  } catch (error) {
    console.error('Error processing download URL:', error);
    res.status(500).json({ error: 'An error occurred while processing the download URL.' });
  }
});



module.exports = router;