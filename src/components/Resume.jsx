import React from 'react';

const Resume = () => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <div
            style={{
                backgroundColor: '#b0c4de',
                color: '#0d1b2a',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   
                justifyContent: 'center' 
            }}
        >
            <h1 style={{ margin: 0 }}>Challa Saiteja</h1>
            <p style={{ margin: 0 }}>Full Stack Developer | Node.js | React | AWS</p>
        </div>


        <div style={{ padding: '10px' }}>
            <h2 style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '16px' }}>👤 Profile Summary</h2>
            <p style={{ marginTop: '4px', marginBottom: '16px' }}>
                Full Stack Developer with <strong>3 years of experience</strong> in building scalable, efficient web applications. Skilled in backend development using <strong>Node.js</strong>,<strong>JavaScript</strong>, <strong>PostgreSQL</strong> and <strong>Redis</strong>, with strong proficiency in frontend technologies like <strong>React.js</strong>, <strong>Redux</strong>, <strong>HTML</strong>, <strong>Boostrap</strong> and <strong>CSS</strong> for creating responsive UIs. Experienced in deploying applications on <strong>Linux servers</strong> and leveraging <strong>AWS services (EC2, S3, SNS, SQS)</strong> for cloud-based solutions. Adept at version control with <strong>Git</strong> and integrating <strong>real-time features</strong> to enhance user experience. A collaborative team player committed to delivering secure, high-quality, and maintainable software.
            </p>
            <h2 style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '8px' }}>💼Experience</h2>
            <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '4px', marginTop: '10px' }}>🏥KIMS Hospitals <strong style={{ color: '#6c757d', marginTop: 0, marginBottom: '8px' }}>(Jan 2024 – Present)</strong></h3>
                <ul style={{ paddingLeft: '24px', marginTop: 0 }}>
                    <li>Developed and maintained healthcare apps using <strong>Node.js</strong>, <strong>React.js</strong>, <strong>PostgreSQL</strong></li>
                    <li>Deployed scalable solutions on <strong>AWS</strong> (S3, SNS, SQS) and <strong>Linux servers</strong></li>
                    <li>Used <strong>Git</strong> for version control, focused on security and performance</li>
                </ul>
            </div>

            <hr style={{ borderColor: '#ddd',marginBottom:'8px' }} />
            <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '4px', marginTop: '12px' }}>🏢TreoSoft IT Solutions Pvt Ltd <strong style={{ color: '#6c757d', marginTop: 0, marginBottom: '8px' }}>(Jul 2022 – Dec 2023)</strong></h3>
                <ul style={{ paddingLeft: '24px', marginTop: 0 }}>
                    <li>Built backend services and REST APIs using <strong>Node.js</strong></li>
                    <li>Integrated <strong>PostgreSQL</strong>, collaborated with <strong>React.js</strong> frontend</li>
                    <li>Used <strong>AWS</strong> (S3), <strong>Git</strong>, and Linux deployments</li>
                </ul>
            </div>
            <h2 style={{ fontWeight: 'bold', marginBottom: 5, }}>🚀Projects & Experience</h2>

            <div style={{ marginBottom: 5 }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: 5 }}>🛒 Procurement Resource Management</h3>
                <ul style={{ paddingLeft: 24, marginTop: 0, marginBottom: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Led digitization of procurement with dashboards and ERP (SAP/Oracle) integration.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Achieved 10–15% cost savings and 20% faster cycles through automation.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Standardized workflows, ensured compliance, and trained procurement teams.</span>
                    </li>
                </ul>
            </div>

            <div style={{ marginBottom: 5 }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: 5 }}>🕒 QMS – Queue Management System</h3>
                <ul style={{ paddingLeft: 24, marginTop: 0, marginBottom: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Built a real-time queue system using Node.js, React.js, PostgreSQL, and WebSockets.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Responsive UI deployed on Linux using AWS infrastructure (EC2, S3, RDS).</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Optimized for performance, mobile compatibility, and secure Git-based development.</span>
                    </li>
                </ul>
            </div>

            <div style={{ marginBottom: 5 }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: 5 }}>📦 Amaze Deliver – Restaurant Delivery & POS System</h3>
                <ul style={{ paddingLeft: 24, marginTop: 0, marginBottom: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Developed a full-stack restaurant POS and delivery platform using React.js, Node.js, PostgreSQL, and WebSockets.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Integrated POS features like split billing, tax, tip, and role-based access.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold', marginRight: 8 }}>•</span>
                        <span>Deployed on AWS (EC2, S3, RDS) with CI/CD via GitHub Actions on Linux servers.</span>
                    </li>
                </ul>
            </div>

            <h2 style={{marginBottom:5}}>🎓Education</h2>
            <p style={{ marginTop: '4px', marginBottom: '10px'}}>
                <strong>🏫Annamacharya Institute of Technology and Sciences, Tirupati</strong> — B.Tech, 2021
            </p>

        </div>

        <div style={{ backgroundColor: '#b0c4de', color: '#0d1b2a', padding: '10px', textAlign: 'center',marginTop: '0px' }}>
            📧 saitejachalla6289@gmail.com &nbsp; | &nbsp;
            📞 +91-9398416300 &nbsp; | &nbsp;
            🌐 <a href="https://github.com/Challasaiteja1998" style={{ color: '#0d1b2a' }}>🐙GitHub</a> &nbsp; | &nbsp;
            🔗 <a href="https://linkedin.com/in/challa-sai-teja" style={{ color: '#0d1b2a' }}>LinkedIn</a>
        </div>
    </div>
);

export default Resume;
