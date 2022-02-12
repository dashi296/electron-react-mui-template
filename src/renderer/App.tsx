import { Box, Button, ButtonBase, Link, Typography } from '@mui/material';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <Box>
      <Box className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>electron-react-boilerplate</Typography>
      <Box className="Hello">
        <Link
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </Button>
        </Link>
        <Link
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
