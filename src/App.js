import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Link } from '@mui/material';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}.`);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Welcome to the Greeting App
        </Typography>
        <Link href="https://pptr.dev/" rel="noopener">
          Puppeteer Documentation
        </Link>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField
            name="name"
            label="What is your name?"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Say hello to me
          </Button>
        </Box>
        {greeting && (
          <Typography id="greeting" variant="h5" mt={3}>
            {greeting}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;

