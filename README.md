<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Harrison's Cybersecurity Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Roboto&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
    body {
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      color: #fff;
      padding: 40px;
    }
    header {
      text-align: center;
      margin-bottom: 40px;
    }
    header h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 3rem;
      margin-bottom: 10px;
    }
    header p {
      font-size: 1.2rem;
      color: #ccc;
    }
    .section {
      margin-bottom: 40px;
    }
    .section h2 {
      border-left: 5px solid #00ffae;
      padding-left: 10px;
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
    ul {
      list-style-type: none;
      line-height: 2;
    }
    a {
      color: #00ffae;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    .gallery img {
      width: 300px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,255,174,0.3);
    }
    footer {
      text-align: center;
      margin-top: 60px;
      font-size: 0.9rem;
      color: #888;
    }
  </style>
</head>
<body>
  <header>
    <h1>🛡️ Harrison's Cybersecurity Portfolio</h1>
    <p>Hands-on labs, SOC training, and notes from the field</p>
  </header>

  <section class="section">
    <h2>📂 Featured Projects</h2>
    <ul>
      <li><strong>💻 Reverse Shell Malware Lab</strong> – Simulated a reverse shell attack in a secure internal network environment using Kali and Windows VMs. <a href="https://github.com/lurgioh/SOC-Analyst-HomeLab" target="_blank">View Project</a></li>
      <li><strong>🔎 Nmap Scanning Reports</strong> – Conducted advanced port scanning and OS fingerprinting with report writing. <a href="https://github.com/lurgioh/SOC-Analyst-HomeLab-nmap" target="_blank">View Project</a></li>
      <li><strong>🛠️ TryHackMe SOC Level 1</strong> – Documented training from the SOC Level 1 path on TryHackMe. <a href="https://github.com/lurgioh/TryHackMe-Level1-SOC" target="_blank">View Notes</a></li>
    </ul>
  </section>

  <section class="section">
    <h2>🧠 Skills & Tools</h2>
    <ul>
      <li>SIEM: Splunk, Microsoft Sentinel, ELK</li>
      <li>Network Monitoring: Wireshark, Zeek</li>
      <li>Threat Detection: Metasploit, Task Manager, netstat</li>
      <li>Incident Handling: Snapshot recovery, malware detonation in VMs</li>
      <li>Payload Development: msfvenom</li>
      <li>Scripting: Bash, Python (basic)</li>
    </ul>
  </section>

  <section class="section">
    <h2>🖼️ Project Gallery</h2>
    <div class="gallery">
      <img src="https://user-images.githubusercontent.com/placeholder1.png" alt="Malware Lab Screenshot">
      <img src="https://user-images.githubusercontent.com/placeholder2.png" alt="Nmap Report Screenshot">
      <img src="https://user-images.githubusercontent.com/placeholder3.png" alt="TryHackMe Training">
    </div>
  </section>

  <section class="section">
    <h2>🎓 Certifications</h2>
    <ul>
      <li>🛠️ Google Cybersecurity Certificate – In Progress</li>
      <li>🔐 CompTIA Security+ (SY0-701) – Studying</li>
    </ul>
  </section>

  <section class="section">
    <h2>📫 Contact</h2>
    <ul>
      <li>LinkedIn: <a href="https://linkedin.com/in/YOURNAME" target="_blank">linkedin.com/in/YOURNAME</a></li>
      <li>GitHub: <a href="https://github.com/lurgioh" target="_blank">github.com/lurgioh</a></li>
    </ul>
  </section>

  <footer>
    <p>⚠️ All labs were performed in isolated, safe environments for learning and documentation purposes.</p>
  </footer>
</body>
</html>
