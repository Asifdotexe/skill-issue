const fs = require('fs');
const path = require('path');
const os = require('os');

// Locate the Antigravity skills directory on the user's machine
const skillDir = path.join(os.homedir(), '.gemini', 'antigravity-cli', 'skills');

// Create the directory if it doesn't exist yet
if (!fs.existsSync(skillDir)) {
  fs.mkdirSync(skillDir, { recursive: true });
}

// Define the list of skill files to copy
// -> To add new skills later, just add their filenames to this array!
const skillsToInstall = [
  'sb-knowledge-note.md'
];

// Loop through the array and copy each skill to the user's skills folder
skillsToInstall.forEach(skillFileName => {
  const source = path.join(__dirname, 'skills', skillFileName);
  const dest = path.join(skillDir, skillFileName);

  try {
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
      console.log(`Skill ${skillFileName} installed to ${dest}`);
    } else {
      console.error(`Source skill file not found: ${source}`);
    }
  } catch (err) {
    console.error(`Failed to install ${skillFileName}:`, err.message);
  }
});
