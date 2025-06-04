import { Box, Typography, Divider } from '@mui/material';

const Experience = () => (
  <Box py={4}>
    <Typography variant="h5" gutterBottom fontWeight="bold">
      Experience
    </Typography>

    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold">
        KIMS Hospitals
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Jan 2024 – Present
      </Typography>
      <Typography variant="body1" mt={1}>
        Working as a Full Stack Developer at KIMS Hospital, responsible for developing and maintaining healthcare applications using <strong>Node.js</strong>, <strong>React.js</strong>, and <strong>PostgreSQL</strong>. Deployed scalable solutions on <strong>AWS</strong> (S3, SNS, SQS) and managed deployments on <strong>Linux servers</strong>. Used <strong>Git</strong> for version control and collaborated on secure, efficient medical systems.
      </Typography>
    </Box>

    <Divider sx={{ my: 2 }} />

    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold">
        TreoSoft IT Solutions Pvt Ltd
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Jul 2022 – Dec 2023
      </Typography>
      <Typography variant="body1" mt={1}>
        Worked as a <strong>Node.js Developer</strong>, building scalable backend services and RESTful APIs. Collaborated with frontend teams using <strong>React.js</strong> and integrated <strong>PostgreSQL</strong> databases. Deployed applications on <strong>Linux servers</strong> and utilized <strong>AWS (S3)</strong> for cloud operations. Followed <strong>Agile</strong> practices, version control with <strong>Git</strong>, and ensured performance, security, and reliability.
      </Typography>
    </Box>
  </Box>
);

export default Experience;
