import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const bulletIcon = (
  <ListItemIcon sx={{ minWidth: 20 }}>
    <CircleIcon sx={{ fontSize: 8 }} />
  </ListItemIcon>
);

const Projects = () => (
  <Box py={4}>
    <Typography variant="h5" gutterBottom fontWeight="bold">
      Projects & Experience
    </Typography>
    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold">
        🛒 Procurement Resource Management
      </Typography>
      <List dense sx={{ pt: 0, pb: 0 }}>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Led digitization of procurement with dashboards and ERP (SAP/Oracle) integration." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Achieved 10–15% cost savings and 20% faster cycles through automation." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Standardized workflows, ensured compliance, and trained procurement teams." /></ListItem>
      </List>
    </Box>
    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold">
        🕒 QMS – Queue Management System
      </Typography>
      <List dense sx={{ pt: 0, pb: 0 }}>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Built a real-time queue system using Node.js, React.js, PostgreSQL, and WebSockets." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Responsive UI deployed on Linux using AWS infrastructure (EC2, S3, RDS)." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Optimized for performance, mobile compatibility, and secure Git-based development." /></ListItem>
      </List>
    </Box>
    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold">
        📦 Amaze Deliver – Restaurant Delivery & POS System
      </Typography>
      <List dense sx={{ pt: 0, pb: 0 }}>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Developed a full-stack restaurant POS and delivery platform using React.js, Node.js, PostgreSQL, and WebSockets." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Integrated POS features like split billing, tax, tip, and role-based access." /></ListItem>
        <ListItem sx={{ py: 0.3 }}>{bulletIcon}<ListItemText primary="Deployed on AWS (EC2, S3, RDS) with CI/CD via GitHub Actions on Linux servers." /></ListItem>
      </List>
    </Box>
  </Box>
);

export default Projects;

