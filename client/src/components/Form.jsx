  // StyledForm.jsx

  import React, { useState } from 'react';


  const StyledForm = () => {
      const operations = [
          { type: 'text', title: 'Sentiment Analysis', description: 'Determine the overall sentiment (positive, negative, neutral) of text content.' },
          { type: 'text', title: 'Topic Modelling', description: 'Uncover hidden themes and topics within a collection of text documents (Not Sure to Implement or not but consider for now).' },
          { type: 'text', title: 'Text Classification', description: 'Categorize text into predefined categories (e.g., spam detection, news topic classification).' },
          { type: 'text', title: 'Keyword Extraction', description: 'Identify the most important keywords or phrases in a text document.' },
          { type: 'text', title: 'Text Summarization', description: 'Generate concise summaries of longer text documents.' },
          { type: 'text', title: 'Text Generation', description: 'Create new text content based on patterns learned from existing data.' },
          { type: 'image', title: 'Object Detection', description: 'Identify and locate objects within images (e.g., faces, vehicles, animals).' },
          { type: 'image', title: 'Image Classification', description: 'Categorize images into predefined categories (e.g., animal species, clothing types).' },
          { type: 'image', title: 'Image Similarity Search', description: 'Find visually similar images within a dataset.' },
          { type: 'image', title: 'Image Segmentation', description: 'Partition images into meaningful regions (e.g., separating foreground objects from backgrounds).' },
          { type: 'audio', title: 'Speech-to-Text Transcription', description: 'Convert spoken audio to text format.' },
          { type: 'audio', title: 'Audio Classification', description: 'Assign audio clips to predefined categories (e.g., music genres, environmental sounds).' },
          { type: 'audio', title: 'Audio Anomaly Detection', description: 'Detect unusual or abnormal sounds in audio recordings.' },
          { type: 'tabular', title: 'Descriptive Statistics', description: 'Calculate measures like mean, median, mode, standard deviation, quartiles, and range for numerical columns.' },
          { type: 'tabular', title: 'Data Visualization', description: 'Create visualizations like histograms, scatter plots, box plots, and bar charts to explore distributions and relationships.' },
          { type: 'tabular', title: 'Correlation Analysis', description: 'Measure the strength and direction of relationships between variables using correlation coefficients.' },
          { type: 'tabular', title: 'Data Cleaning', description: 'Handle missing values, outliers, and inconsistencies to improve data quality.' },
          { type: 'tabular', title: 'Data Formatting', description: 'Reshape and transform data (e.g., pivoting, merging, filtering) for specific analysis needs.' },
          { type: 'tabular', title: 'Aggregation', description: 'Summarize data by groups using functions like sum, count, mean, and standard deviation.' },
          { type: 'tabular', title: 'Filtering and Sorting', description: 'Subset and arrange data based on specific criteria.' },
          { type: 'tabular', title: 'Feature Engineering', description: 'Create new features from existing data to enhance machine learning models.' },
          { type: 'video', title: 'Video Summary Generation', description: 'Create concise summaries of longer video footage.' },
          { type: 'video', title: 'Action Recognition', description: 'Identify human actions occurring in video clips.' },
          { type: 'video', title: 'Video Anomaly Detection', description: 'Detect unusual or abnormal events in video footage.' },
          { type: 'video', title: 'Object Tracking', description: 'Track the movement of objects across video frames.' }
        ];

    const [fileType, setFileType] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [selectedOperation, setSelectedOperation] = useState(null);
    const [updatedFileData, setUpdatedFileData] = useState(null); // Define state variable to store updated file data


    const handleOperationSelect = (operation) => {
      setSelectedOperation(operation);
      if (operation.type === 'tabular') {
        // Show parameter form only for tabular files
      } else {
        // Hide parameter form for other file types
      }
      
      console.log("Selected Operation",{
        
          fileName,
          fileType,
          filePreview,
          // selectedOperation: operation"
      });
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        setFileType(fileExtension);
    
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreview(e.target.result);
          setFileName(file.name);
        };
        reader.readAsDataURL(file);
      }
    };
    // Modify handleContinueClick function
    const handleContinueClick = async () => {
      if (!fileName || !fileType || !filePreview || !selectedOperation) {
        console.error("Please select a file and operation before continuing.");
        return;
      }
    
      const formData = {
        fileName: fileName,
        fileType: fileType,
        filePreview: filePreview,
        operation: selectedOperation.title, // Send only the title of the selected operation
      };
      
      try {
        const response = await fetch('/upload-file-operation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        if (!response.ok) {
          throw new Error('Failed to upload file and store operation information.');
        }
    
        // Parse response JSON to get the download URL
        const data = await response.json();
        const { downloadURL } = data;
    
        // Send the download URL to the server for further processing
        await fetch('/process-download-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ downloadURL })
        });
    
        // Handle the download URL as needed (e.g., display it to the user)
        console.log('Download URL:', downloadURL);
      } catch (error) {
        console.error('Error uploading file and storing operation information:', error);
        // Handle errors here
      }
    };
    
// After receiving the download URL
const handleDownloadURL = async (downloadURL) => {
  try {
    const response = await fetch('/process-download-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ downloadURL })
    });

    if (!response.ok) {
      throw new Error('Failed to process download URL on the server.');
    }

    // Handle success response from the server
    console.log('Download URL processed successfully on the server.');
  } catch (error) {
    console.error('Error processing download URL on the server:', error);
    // Handle error
  }
};

    const handleEndClick = () => {
      // Handle logic for ending (e.g., navigate to the next step or finish the process)
      // You can perform additional actions or navigate to another page here
    };

    return (
      <>
    
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>File Upload</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Upload File</label>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <input
                type="file"
                style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
                onChange={handleFileChange}
              />
            </div>
          </div>

          {fileName && (
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '2rem', color: '#333' }}>File Name: {fileName}</p>
              <p style={{ fontSize: '2rem', color: '#333' }}>File Type: {fileType}</p>
            </div>
          )}

      
        </div>
        
      </div>
        {/* Display the list of operations based on the file type */}
        {fileType && (
          <div>
            {operations
              .filter((op) => {
  if (['png', 'jpg', 'jpeg'].includes(fileType)) {
    return op.type === 'image';
  } else if (['txt', 'doc', 'docx'].includes(fileType)) {
    return op.type === 'text';
  } else if (['xls', 'csv', 'xlsx'].includes(fileType)) {
    return op.type === 'tabular';
  } else if (['mp4'].includes(fileType)) {
    return op.type === 'audio';
  } else if (['mp3'].includes(fileType)) {
    return op.type === 'video';
  }
  return false;
})

              .map((operation, index) => (
                <div
                  key={index}
                  style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '10px', cursor: 'pointer', margin:"30px" }}
                  onClick={() => handleOperationSelect(operation)}
                >
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>{operation.title}</h3>
                  <p style={{ fontSize: '1.5rem', color: '#666' }}>{operation.description}</p>
                </div>
              ))}
          </div>
        )}
        
                {/* Display the selected operation or an empty div */}
                {selectedOperation && (
                  <div style={{ marginTop: '20px', margin:"30px" }}>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Selected Operation:</h1>
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                      <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>{selectedOperation.title}</h3>
                      <p style={{ fontSize: '1.5rem', color: '#666' }}>{selectedOperation.description}</p>
                    </div>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }} onClick={handleContinueClick}>Continue</button>
          <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }} onClick={handleEndClick}>End</button>
        </div>
                </>
    );
  };

  export default StyledForm;
