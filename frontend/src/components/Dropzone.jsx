// src/components/Dropzone.jsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const Dropzone = ({ onDrop }) => {
  const onDropAccepted = useCallback((acceptedFiles) => {
    if (onDrop) {
      onDrop(acceptedFiles);
    }
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropAccepted,
    accept: 'image/*', // Accept only image files
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed grey',
        borderRadius: 1,
        p: 2,
        textAlign: 'center',
        cursor: 'pointer',
        bgcolor: isDragActive ? 'black.300' : 'black.100',
        transition: 'background-color 0.3s',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="body1">Drop the files here ...</Typography>
      ) : (
        <Typography variant="body1">Add Image</Typography>
      )}
    </Box>
  );
};

export default Dropzone;
