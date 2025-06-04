
import React, { useRef } from 'react';
import Resume from './components/Resume';
import ExportResume from './components/ExportResume';
import { Container, Box, Typography } from '@mui/material';

const App = () => {
  const resumeRef = useRef();

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Resume Preview
        </Typography>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <ExportResume resumeRef={resumeRef} />
      </Box>
    </Container>
  );
};

export default App;



// import React, { useRef } from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Footer from './components/Footer';
// import ExportResume from './components/ExportResume';

// function App() {
//   const resumeRef = useRef();

//   return (
//     <>
//       <ExportResume resumeRef={resumeRef} />

//       <div ref={resumeRef} style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', background: '#fff' }}>
//         <Header />
//         <About />
//         <Experience />
//         <Projects />
//         <Education />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
