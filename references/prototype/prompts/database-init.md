# AI Database Directory Generation Workflow

This document (`database/TASKS.md`) tracks the progress and execution details for setting up the project database directory using AI automation or MCP flows. After each step, update the checklist and log any issues, changes, or decisions here. This ensures clear handoff and precise resume for future runs.

---

## Workflow Steps

⬜ **1. Reference Baseline Template**
   - Locate and list all files and directories under `templates/database/` as the baseline template.
   - Log:
     - [ ] Was the baseline template found?
     - [ ] List of all baseline files/structure

⬜ **2. Initialize Project Database Directory**
   - Generate the following structure (if files or folders exist, skip or compare contents):
     ```
     database/
     ├── docker-compose.db.yml
     ├── docker-compose.yml
     ├── mongo/
     │   ├── dockerfile
     │   ├── init-data/
     │   │   ├── 00_initindex.js
     │   │   └── 01_initdata.js
     │   ├── migrations/
     │   │   └── 00_initindex.js
     │   ├── mongo-init-setup.sh
     │   └── setup.js
     ├── schema.md
     ├── start.sh
     └── stop.sh
     ```
   - Log:
     - [ ] Status of each file/folder creation or overwrite
     - [ ] Any conflicts or exceptions encountered (with details)

⬜ **3. Project Customization**
   - [ ] Set the correct database name in all applicable config files
   - [ ] Set the exposed port in `docker-compose.yml` as required by the project
   - [ ] Generate a `schema.md` that matches the actual business logic and database design (may include ERD, diagrams, or notes)
   - [ ] Log all settings, reasons, and any key design considerations

⬜ **4. Compare With Baseline**
   - [ ] Compare the generated `database/` directory to the baseline template
   - [ ] Log missing, extra, or changed files
   - [ ] Highlight any required fixes or updates

⬜ **5. Output & Auto-fix**
   - [ ] Print summary of generation and comparison results
   - [ ] If any files are missing or extra, auto-fix and re-compare until the structure matches or document clear exceptions
   - [ ] Log all changes and reasoning in this TASKS.md

⬜ **6. Final Review & Handover**
   - [ ] Summarize the setup results (success, issues, manual actions needed)
   - [ ] Add notes for future maintenance or handover
   - [ ] Ensure the final state is fully recorded here for seamless future resumes

---

## Update Log

- yyyy-mm-dd HH:MM   Initial creation, workflow started
- yyyy-mm-dd HH:MM   ... (continue updating with each progress/event)