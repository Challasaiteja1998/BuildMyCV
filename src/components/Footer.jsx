import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box py={2} bgcolor="#f5f5f5" textAlign="center">
    <Typography variant="body2" component="div" display="inline-flex" flexWrap="wrap" justifyContent="center" gap={2}>
      <Box component="span" sx={{fontSize: 15, display: 'inline-flex', alignItems: 'center'}}>
        📧 <Link href="mailto:saitejachalla6289@gmail.com" underline="hover">saitejachalla6289@gmail.com</Link>
      </Box>
      <Box component="span" sx={{fontSize: 15, display: 'inline-flex', alignItems: 'center'}}>
        📞 <Link href="tel:+919398416300" underline="hover">+91-9398416300</Link>
      </Box>
      <Box component="span" sx={{fontSize: 15, display: 'inline-flex', alignItems: 'center'}}>
        🌐 <Link href="https://github.com/Challasaiteja1998/" target="_blank" rel="noopener noreferrer" underline="hover">GitHub</Link>
      </Box>
      <Box component="span" display="inline-flex" alignItems="center" sx={{fontSize: 15, display: 'inline-flex', alignItems: 'center'}}>
        <LinkedInIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
        <Link
          href="https://linkedin.com/in/challa-sai-teja"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          LinkedIn
        </Link>
      </Box>
    </Typography>
  </Box>
);

export default Footer;


