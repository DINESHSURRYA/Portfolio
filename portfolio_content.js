/**
 * portfolio_content.js
 * Centralized content for the Pisces Portfolio.
 * Edit this file to update projects, skills, and timeline information.
 */

const PORTFOLIO_CONTENT = {
    // -------------------------------
    // SECTION TEMPLATES (For openCapsule)
    // -------------------------------
    sections: {
        profile: `
            <div class="intro-card" style="max-width: 100%;">
                <div class="persona-badge">The Architect</div>
                <h1>About Me</h1>
                <p>I’m a passionate Full Stack Developer and AI enthusiast who loves building futuristic, high-impact digital experiences.</p>
                <p>I enjoy working across the entire stack — from crafting immersive frontend interfaces to designing scalable backend systems. I’m especially interested in AI-driven applications, automation, and problem-solving through code.</p>
                <p>My journey started with curiosity and grew into a deep commitment to continuous learning, clean architecture, and performance-driven design. I believe technology is not just about building apps — it’s about building meaningful experiences.</p>
            </div>`,

        projects: `
            <div class="intro-card" style="max-width: 1400px; width: 95%;">
                <div class="persona-badge" id="projectCountBadge">Creations // Initializing...</div>
                <h1>Selected Works</h1>
                <p style="margin-top: 10px; color: #70d6ff; font-weight: 500; opacity: 0.9;">
                    Explore a curated collection of high-impact AI solutions, campus infrastructure, and specialized software engineering projects.
                </p>
                <div class="project-arsenal-grid" id="projectArsenalGrid"></div>
            </div>`,

        skills: `
            <div class="intro-card" style="max-width: 100%;">
                <div class="persona-badge">Arsenal</div>
                <h1>Technical Skills</h1>
                <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                    <div class="content-box">
                        <div class="box-tag">Languages</div>
                        <p>C, C++, Java, Python, JavaScript, TypeScript, SQL</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">Frontend</div>
                        <p>React (Vite), HTML, CSS, Tailwind, Bootstrap, Mantine</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">Backend</div>
                        <p>Spring Boot, FastAPI, Node.js, Express, Django, Flask</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">Databases</div>
                        <p>MongoDB, PostgreSQL, MySQL, SQLite</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">Core CS</div>
                        <p>DSA, REST APIs, Authentication, System Design</p>
                    </div>
                </div>
            </div>`,

        experience: `
            <div class="intro-card" style="max-width: 100%;">
                <div class="persona-badge">Timeline</div>
                <h1>The Journey</h1>
                <div class="timeline" style="margin-top: 30px;">
                    <div class="timeline-item">
                        <div class="time-mark">2023 – 2027</div>
                        <div class="time-content">
                            <h3>B.E. in Electronics & Communication</h3>
                            <p>Karpagam Institute of Technology, Coimbatore. CGPA: 7.9 / 10.0</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="time-mark">The Phases</div>
                        <div class="time-content">
                            <p><strong>2026:</strong> The Refinement Era (Present) // Polishing portfolio, Improved UI/UX.</p>
                            <p><strong>2025:</strong> AI & Advanced Engineering // Integrated LLMs & production SaaS.</p>
                            <p><strong>2024:</strong> System Builder Phase // Scalable applications like Mentor-Mentee Portal.</p>
                        </div>
                    </div>
                    <div class="timeline-item" style="opacity: 0.8;">
                        <div class="time-mark">Certifications</div>
                        <div class="time-content">
                            <p>• Python Programming (AlgoZenith)<br>• AI & ML (Novitech)<br>• AWS Cloud Computing (Certified)</p>
                        </div>
                    </div>
                </div>
            </div>`,

        achievements: `
            <div class="intro-card" style="max-width: 100%; text-align: center;">
                <div class="persona-badge">Performance</div>
                <h1>Achievements</h1>
                <p style="margin-top: 20px;">Consistency and excellence in technical competitive platforms and certifications.</p>
                <div class="dual-box-container" style="margin-top: 30px;">
                    <div class="content-box">
                        <div class="box-tag">TCS CodeVita</div>
                        <h3 style="color: #70d6ff; font-size: 1.5rem;">Rank 985</h3>
                        <p>Achieved a Global Rank of 985 in Season 12 of the world's largest coding contest.</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">NPTEL</div>
                        <h3 style="color: #70d6ff; font-size: 1.5rem;">Silver Elite</h3>
                        <p>DSA using Java (Silver Elite) and Industry 4.0 certification.</p>
                    </div>
                    <div class="content-box">
                        <div class="box-tag">LeetCode</div>
                        <h3 style="color: #70d6ff; font-size: 1.5rem;">365 Days Streak</h3>
                        <p>2025 Annual Badge recipient with a year-long consistent coding streak.</p>
                    </div>
                </div>
            </div>`,

        contact: `
            <div class="intro-card" style="max-width: 100%; text-align: center;">
                <div class="persona-badge">Link</div>
                <h1>Synchronize</h1>
                <p>Let’s connect and build something impactful.</p>
                <p>I’m always open to collaborations, internships, freelance opportunities, and tech discussions.</p>
                <div class="contact-links" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
                    <a href="https://github.com/DINESHSURRYA" target="_blank" class="contact-btn">GitHub</a>
                    <a href="https://www.linkedin.com/in/dinesh-surrya-a5a67a2ba" target="_blank" class="contact-btn">LinkedIn</a>
                    <a href="https://leetcode.com/u/ZyTkW0JhQV/" target="_blank" class="contact-btn">LeetCode</a>
                    <a href="https://codeforces.com/profile/Dinesh_Surrya" target="_blank" class="contact-btn">Codeforces</a>
                    <a href="https://www.geeksforgeeks.org/profile/dineshsurrya66" target="_blank" class="contact-btn">GeeksforGeeks</a>
                    <a href="mailto:dineshsurrya66@gmail.com" class="contact-btn">Email</a>
                </div>
                <p style="margin-top: 30px; opacity: 0.7; font-size: 0.9rem;">Feel free to reach out — I usually reply faster than a loading spinner ⚡</p>
            </div>`
    },

    // -------------------------------
    // PROJECT DATA (For openProjectDetail)
    // -------------------------------
    projectsData: {
        'smartcampus': {
            title: 'Smart Campus',
            tag: 'Academic Management System',
            desc: 'Built a centralized platform for timetables, course mapping, attendance, and placements. Implemented timetable-driven backend architecture as the single source of truth and designed secure role-based access for Students, Faculty, HOD, and Admin.'
        },
        'datagenius': {
            title: 'DataGuardian AI',
            tag: 'AI-Powered Data Quality SaaS',
            desc: 'Developed a full-stack SaaS to clean, validate, and deduplicate B2B datasets. Applied fuzzy matching and rule-based validation, and designed confidence-based quality scoring to auto-fix or flag unreliable records.'
        },
        'rag': {
            title: 'RAG-AI Chatbot',
            tag: 'Document Intelligence System',
            desc: 'Built a Retrieval-Augmented Generation system for querying unstructured PDF/DOCX files. Implemented vector-based semantic search with contextual AI responses for deep document intelligence.'
        },
        'mentormentee': {
            title: 'Mentor–Mentee AI Portal',
            tag: 'Meeting Management System',
            desc: 'Developed a role-based mentoring platform for meetings and progress tracking. Implemented AI-driven dynamic question chaining and automated email notifications for enhanced engagement.'
        },
        'riskguardian': {
            title: 'RiskGuardian AI',
            tag: 'Supply Chain AI',
            desc: 'AI-driven supply chain risk detection and prioritization platform with event-based risk scoring and dashboards.'
        },
        'ecomart': {
            title: 'EcoMart',
            tag: 'Smart Retail',
            desc: 'Smart retail inventory management system with eco-score gamification and analytics.'
        },
        'studenthub': {
            title: 'StudentHub',
            tag: 'Collaboration',
            desc: 'Centralized event and peer collaboration platform for students.'
        },
        'scraper': {
            title: 'Website Scraper',
            tag: 'Data Extraction',
            desc: 'Automated data extraction tool with structured output for downstream processing.'
        },
        'ytcaps': {
            title: 'YouTube Timestamp',
            tag: 'Chrome Extension',
            desc: 'Browser extension to capture and manage timestamps from YouTube videos.'
        }
    }
};
