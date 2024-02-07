const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FileOperation = mongoose.model("FileOperation");


router.post('/upload-file-operation', async (req, res) => {
  try {
    console.log("Connected");

    // Extract file and operation information from the request body
    const { fileName, fileType, filePreview, operation } = req.body;

    // Log the received data
    console.log('Received Data:', {
      fileName,
      fileType,
      filePreview,
      operation,
    });

    // Ensure that the required fields in the "operation" object are present
    if (!operation || !operation.title || !operation.description || !operation.type) {
      return res.status(400).json({ error: 'Missing required fields in the operation object.' });
    }

    // Create a new file operation document
    const newFileOperation = new FileOperation({
      fileName,
      fileType,
      filePreview,
      operation: {
        title: operation.title,
        description: operation.description,
        type: operation.type,
      }
    });

    // Save the new file operation to the database
    await newFileOperation.save();

    // Respond with success message
    res.status(201).json({ message: 'File uploaded and operation information stored successfully.' });
  } catch (error) {
    console.error('Error uploading file and storing operation information:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});


router.get('/file-operation/:fileOperationId', async (req, res) => {
  try {
    const fileOperationId = req.params.fileOperationId;
    const fileOperation = await FileOperation.findById(fileOperationId);

    if (!fileOperation) {
      return res.status(404).json({ message: 'File operation not found' });
    }

    return res.status(200).json(fileOperation);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
