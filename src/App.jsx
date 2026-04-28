// import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import WorkIcon from "@mui/icons-material/Work";
// import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import CloudIcon from "@mui/icons-material/Cloud"; // For Azure DevOps
import StorageIcon from "@mui/icons-material/Storage"; // For Docker
import MemoryIcon from "@mui/icons-material/Memory"; // For .NET
import develoloperimg from "./assets/developer-working-icon-free-vector.jpg";
import Resume from "./assets/FullStack Web Developer.pdf";

const copyToClipboard = (p) => {
  navigator.clipboard.writeText(p);
  alert("Copied to clipboard: " + p);
};

const downloadFile = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "Altaf_Ahmed_Resume.pdf";
  link.click();
};

const skills = [
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "TypeScript", icon: <CodeIcon color="#3178C6" /> },
  { name: "JavaScript", icon: <CodeIcon color="#F7DF1E" /> },
  { name: "Material UI", icon: <CodeIcon color="#007FFF" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
  { name: ".NET", icon: <MemoryIcon color="#512BD4" /> },
  { name: "HTML5", icon: <CodeIcon color="#E34F26" /> },
  { name: "CSS3", icon: <CodeIcon color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <CodeIcon color="#06B6D4" /> },
  { name: "SQL", icon: <CodeIcon color="#003B57" /> },
  { name: "Azure DevOps", icon: <CloudIcon color="#0078D7" /> },
  { name: "Docker", icon: <StorageIcon color="#2496ED" /> },
  { name: "Git & GitHub", icon: <FaGithub color="#181717" /> },
  { name: "REST API", icon: <CodeIcon color="#FF6B6B" /> },
  { name: "Framer Motion", icon: <CodeIcon color="#0055FF" /> },
];

export default function Portfolio() {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", py: 2 }}>
      {/* Hero Section */}
      <Container
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ py: 8 }}
      >
        <Box textAlign="center">
          <Avatar
            src={develoloperimg} // Add your image path
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              border: "4px solid #1976d2",
              mb: 3,
            }}
            loading="lazy"
          />
          <Typography
            variant="h3"
            fontWeight={700}
            color="text.primary"
            gutterBottom
            sx={{
              background: "linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Altaf Ahmed
          </Typography>
          <Typography
            variant="h5"
            fontWeight={500}
            color="text.secondary"
            mb={4}
          >
            Full Stack Developer | Software Engineer | React Specialist
          </Typography>
          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            gap={2}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              startIcon={<DownloadForOfflineIcon />}
              onClick={downloadFile}
              sx={{
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#1565c0" },
                px: 3,
                py: 1,
              }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<FaGithub />}
              href="https://github.com/AltafShahna"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ px: 3, py: 1 }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<FaLinkedin />}
              href="https://linkedin.com/in/altaf-ahmed-shahna"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ px: 3, py: 1 }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>

      {/* About Section */}
      <Container
        component={motion.div}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{ py: 6 }}
      >
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" fontWeight={700} color="text.primary" mb={3}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
          >
            I'm a passionate Full Stack Developer specializing in building
            modern, scalable web applications. With expertise in{" "}
            <strong>React.js</strong>, <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Node.js</strong> and{" "}
            <strong>.NET</strong>, I create seamless user experiences backed by
            robust architectures.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
          >
            My approach combines technical excellence with clean design
            principles. I'm particularly skilled at optimizing performance,
            implementing smooth animations with <strong>Framer Motion</strong>,
            and setting up efficient CI/CD pipelines with{" "}
            <strong>Azure DevOps</strong> and <strong>Docker</strong>.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
          >
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and mentoring aspiring
            developers.
          </Typography>
        </Paper>
      </Container>

      {/* Skills Section */}
      <Box
        bgcolor="#f0f4f8"
        py={6}
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            mb={4}
            textAlign="center"
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {skills.map((skill) => (
              <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box sx={{ fontSize: "2rem", mb: 1 }}>{skill.icon}</Box>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {skill.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Container
        component={motion.div}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{ py: 6 }}
      >
        <Typography variant="h4" fontWeight={700} color="text.primary" mb={4}>
          Professional Experience
        </Typography>
        {/* IWS Experience */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <WorkIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Software Developer
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Industrial Well Solution (IWS) | Sept 2025 – Present
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" paragraph>
            Developing a scalable full-stack enterprise portal with multiple
            operational modules.
          </Typography>

          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Built full-stack application using <strong>React.js</strong>,{" "}
                <strong>Node.js</strong>, and <strong>Express.js</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Designed RESTful APIs for <strong>User Management</strong>,{" "}
                <strong>Equipment Maintenance</strong>,{" "}
                <strong>Journey Management</strong>, and{" "}
                <strong>HSE modules</strong> (Observation, Stop Card, Incident
                Reporting)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Integrated <strong>MS SQL/MySQL</strong> with optimized queries
                for large-scale data
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Built responsive UI using <strong>MUI</strong> with reusable
                component architecture
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Implemented <strong>RBAC</strong> authentication and secure
                routes using <strong>JWT</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Developed Excel import/export functionality using{" "}
                <strong>xlsx</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Built email notification system using{" "}
                <strong>NodeMailer</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Applied strong validation, error handling, and API performance
                optimization
              </Typography>
            </li>
          </ul>

          <Box display="flex" gap={2} flexWrap="wrap">
            <Button
              variant="outlined"
              href="https://iws.com.sa"
              target="_blank"
              startIcon={<CodeIcon />}
              sx={{ mt: 2, "&:hover": { bgcolor: "#01579b" } }}
            >
              Company Website
            </Button>

            <Button
              variant="outlined"
              href="https://iws-portal.com"
              target="_blank"
              startIcon={<CodeIcon />}
              sx={{ mt: 2, "&:hover": { bgcolor: "#1b5e20" } }}
            >
              Portal
            </Button>
          </Box>
        </Paper>

        {/* Freelance E-Commerce */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <WorkIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Full-Stack Developer (Freelance) In-Progress
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Smile With Me E-Commerce | 2026 – Present
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" paragraph>
            Developing a scalable e-commerce platform with modern architecture
            and performance focus.
          </Typography>

          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Building full-stack app using <strong>React.js</strong>,{" "}
                <strong>Node.js</strong>, and <strong>Express.js</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Designing RESTful APIs for <strong>products</strong>,{" "}
                <strong>users</strong>, <strong>cart</strong>, and{" "}
                <strong>order management</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Implementing authentication and authorization using{" "}
                <strong>JWT</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Developing features like <strong>product listing</strong>,{" "}
                <strong>search/filter</strong>, and{" "}
                <strong>checkout flow</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Planning secure payment integration (Stripe or equivalent)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Optimizing performance and ensuring mobile responsiveness
              </Typography>
            </li>
          </ul>

          <Button
            variant="outlined"
            href="https://wts.iws-portal.com/"
            target="_blank"
            startIcon={<CodeIcon />}
            sx={{ mt: 2, "&:hover": { bgcolor: "#7b1fa2" } }}
          >
            View Project
          </Button>
        </Paper>

        {/* ProjeaSA Experience */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <WorkIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Web Application Developer (Contract)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Projea Al Saudi Company | 2025
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" paragraph>
            Developed the company website showcasing construction projects and
            services.
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Implemented with <strong>React.js</strong> and{" "}
                <strong>MUI</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Added interactive elements with <strong>Framer Motion</strong>{" "}
                to highlight company projects
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Designed modern UI with attention to construction industry
                aesthetics
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Create reusable animation components for directional entrances,
                staggered sequences, and scroll-triggered effects to maintain
                consistency throughout your portfolio.
              </Typography>
            </li>
          </ul>
          <Button
            variant="outlined"
            href="https://projeasa.com/"
            target="_blank"
            startIcon={<CodeIcon />}
            sx={{
              mt: 2,
              // bgcolor: "#2e7d32",
              "&:hover": { bgcolor: "#1b5e20" },
            }}
          >
            View ProjeaSA Project
          </Button>
        </Paper>

        {/* PureMinds Experience */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <WorkIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
            <Box>
              <Typography variant="h5" fontWeight={600}>
                FullStack Developer (Contract)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                PureMinds | 2025
              </Typography>
              <Typography>Team Project</Typography>
            </Box>
          </Box>
          <Typography variant="body1" paragraph>
            Developed the company's modern web applications platform with
            advanced animations and transitions.
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Built with <strong>TypeScript</strong>,{" "}
                <strong>React.js</strong>, and <strong>TailwindCSS </strong>
                for a polished, responsive design
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Implemented smooth animations using{" "}
                <strong>Framer Motion</strong> and <strong>GSAP</strong>
                for enhanced user engagement
              </Typography>
            </li>

            <li>
              <Typography variant="body1">
                Created reusable component library to maintain design
                consistency
              </Typography>
            </li>
          </ul>
          <Button
            variant="outlined"
            href="https://pureminds.pharmavac25.com/"
            target="_blank"
            startIcon={<CodeIcon />}
            sx={{
              mt: 2,
              // bgcolor: "#0288d1",
              "&:hover": { bgcolor: "#01579b" },
            }}
          >
            View PureMinds Project
          </Button>
        </Paper>

        {/* INube Experience */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <WorkIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Full Stack Developer
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                INube Software Solutions | 2022 - 2024
              </Typography>
              <Typography>Team Project</Typography>
            </Box>
          </Box>
          <Typography variant="body1" paragraph>
            Developed and maintained full-stack applications for insurance
            clients including Protective Micro, Star Micro, and Nepal Micro
            Insurance companies.
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Built responsive frontends with <strong>React.js</strong> and{" "}
                <strong>Material UI</strong>, achieving 30% faster load times
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Integrated with <strong>.NET</strong> backend systems and
                optimized <strong>SQL</strong> queries, reducing API response
                times by 40%
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Implemented CI/CD pipelines using <strong>Azure DevOps</strong>,
                automating deployment processes
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Developed comprehensive insurance modules including policy
                management, claims processing, and reporting dashboards
              </Typography>
            </li>
          </ul>
          <Box display="flex" flexDirection={"row"} gap={3}>
            <Button
              variant="contained"
              fullWidth
              href="http://uat.protectivemicro.com/pages/login-page"
              target="_blank"
              startIcon={<CodeIcon />}
              sx={{
                // bgcolor: "#9c27b0",
                "&:hover": { bgcolor: "#7b1fa2" },
              }}
            >
              B2B Project
            </Button>
            <Button
              variant="contained"
              fullWidth
              href="http://uat.protectivemicro.com/Nepal/B2CLogin"
              target="_blank"
              startIcon={<CodeIcon />}
              sx={{
                // bgcolor: "#ed6c02",
                "&:hover": { bgcolor: "#e65100" },
              }}
            >
              B2C Project
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Projects Section */}
      {/* <Box
        bgcolor="#f0f4f8"
        py={6}
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            mb={4}
            textAlign="center"
          >
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Projea Al Saudi
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Construction company website with modern design and animations
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="React.js" size="small" sx={{ mr: 1 }} />
                    <Chip label="TailwindCSS" size="small" sx={{ mr: 1 }} />
                    <Chip label="Framer Motion" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    href="https://projea-sa.vercel.app/"
                    target="_blank"
                    sx={{
                      bgcolor: "#2e7d32",
                      "&:hover": { bgcolor: "#1b5e20" },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  PureMinds Pharmaceuticals
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Elegant pharmaceutical platform with advanced animations
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="TypeScript" size="small" sx={{ mr: 1 }} />
                    <Chip label="React.js" size="small" sx={{ mr: 1 }} />
                    <Chip label="GSAP" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    href="https://pureminds.pharmavac25.com/"
                    target="_blank"
                    sx={{
                      bgcolor: "#0288d1",
                      "&:hover": { bgcolor: "#01579b" },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Micro Insurance B2C Portal
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Comprehensive insurance platform for end customers
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="React.js" size="small" sx={{ mr: 1 }} />
                    <Chip label=".NET" size="small" sx={{ mr: 1 }} />
                    <Chip label="Azure DevOps" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    href="http://uat.protectivemicro.com/pages/login-page"
                    target="_blank"
                    sx={{
                      bgcolor: "#9c27b0",
                      "&:hover": { bgcolor: "#7b1fa2" },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Micro Insurance B2B Portal
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Enterprise portal for insurance agents and partners
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="React.js" size="small" sx={{ mr: 1 }} />
                    <Chip label="Node.js" size="small" sx={{ mr: 1 }} />
                    <Chip label="Docker" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    href="http://uat.protectivemicro.com/Nepal/B2CLogin"
                    target="_blank"
                    sx={{
                      bgcolor: "#ed6c02",
                      "&:hover": { bgcolor: "#e65100" },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      {/* Contact Section */}
      <Container
        component={motion.div}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{ py: 8 }}
      >
        <Paper
          elevation={4}
          sx={{ p: 6, borderRadius: 2, textAlign: "center" }}
        >
          <Typography variant="h4" fontWeight={700} color="text.primary" mb={2}>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ maxWidth: "600px", margin: "0 auto" }}
          >
            I'm currently looking for new opportunities. Whether you have a
            project to discuss or just want to connect, feel free to reach out!
          </Typography>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:altafshahna@gmail.com"
              sx={{
                bgcolor: "#d32f2f",
                "&:hover": { bgcolor: "#b71c1c" },
                px: 4,
                py: 1.5,
              }}
            >
              Email Me
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => copyToClipboard("altafshahna@gmail.com")}
              sx={{ textTransform: "none" }}
            >
              altafshahna@gmail.com
            </Button>
            <Button
              variant="outlined"
              onClick={() => copyToClipboard("+966 501463850")}
              sx={{ textTransform: "none" }}
            >
              +966 501463850
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
