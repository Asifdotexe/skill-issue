# skill-issue
Repository containing all the custom skill files made by me.

## Available Skills
- `sb-knowledge-note.md`: Knowledge note-taking skill.
- `sb-journal-writer.md`: Summarizes agent actions into a humanized journal.md.

## How to Install

**Method 1: NPM (Recommended)**
Install globally via NPM. The postinstall script automatically places the skill in your Antigravity skills folder.

```bash
npm install -g agy-skill-issue
```

**Method 2: Manual Copy**
Clone this repo and copy `skills/sb-knowledge-note.md` into your `~/.gemini/antigravity-cli/skills/` directory.

**Method 3: Download Single Skill**
If you don't want to download the whole repository or use NPM, you can grab a single skill directly:
1. Go to the skill file on GitHub.
2. Click the **Raw** button.
3. Save the file directly into your `~/.gemini/antigravity-cli/skills/` directory.

## How to Use
Once installed, use the skill in Antigravity by calling it in your prompt or using:
```text
/skill sb-knowledge-note
```
