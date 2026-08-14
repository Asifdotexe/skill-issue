---
name: journal-writer
description: Summarizes the agent's actions and writes them to a journal.md file in the project directory in a highly humanized format.
---

# sb-journal-writer

When this skill is invoked, follow these steps strictly:

1. **Summarize Actions**: Analyze everything that has been done in the current session. Identify the main **Goal** and the specific actions taken (what was done and why it was done).
2. **Humanize**: You must use the `humanizer` skill instructions to ensure the language of the summary is very natural, conversational, and human. Avoid robotic or overly technical phrasing.
3. **Format**: Format the summary using the exact markdown structure below:
   
   ## DATE: [Insert current date/time]
   ### Goal: [Insert goal here]
   - [What we did and why we did it]
   - [What we did and why we did it]

4. **Save to File**: Check if `journal.md` exists in the root of the current project directory. 
   - If it exists, append this new entry to the bottom of the file.
   - If it doesn't exist, create `journal.md` and write this entry.
   
Use your file editing tools (`write_to_file` or `replace_file_content`) to actually save this to `journal.md`. Do not just output the text to the chat.
