# ai-context-template

## Windsurf Rules Configuration – Reference Guide

In Windsurf, there are **two levels of rules**:

1. **`global_rules.md`**  
   - These are **global rules** that apply universally, regardless of the workspace.  
   - Managed independently and typically shared across multiple projects.

2. **`.windsurfrules`**  
   - These are **workspace-specific rules**, applied **locally** to a specific project.  
   - They override or complement the global rules for localized needs.

3. **`.windsurf/` Directory**  
   - This folder contains the actual rule definitions, workflows, or metadata required by Windsurf.  
   - It is loaded after evaluating the global and local rules.

> **Tip**: Always define global logic in `global_rules.md`, and only place exceptions or project-specific configurations in `.windsurfrules`.



## Key Points of the Latest AI Project Rules Framework

## 1. Streamlined File Structure

- All project rules and context are managed with just two Markdown files in the `cursorkleosr/` directory:
  - **ARCHITECTURE.md**: Defines the project’s core goals, tech stack, critical patterns, conventions, and limitations. This serves as the stable foundation for the AI and rarely changes.
  - **TASK.md**: Serves as the AI’s dynamic workspace, recording the current state, step-by-step plans, workflow rules, and an activity log. This file evolves as the AI works through tasks.

## 2. Autonomous Workflow Loop

- The AI continuously reads from and writes to `TASK.md` to track status, follow workflow rules, execute actions (like editing code or running tests), and immediately update progress and next steps.
- This enables a self-sustaining loop of analyze, plan, act, and update.

## 3. Integration with OpenRouter and MCP Tools

- The system is model-agnostic and works with any reasoning-capable LLM (Claude, GPT-4, DeepSeek, etc.) through OpenRouter.
- Additional rules can be added to `TASK.md` to call external MCP tools at any workflow phase, enabling extended automation and custom workflows.

## 4. Strict, Readable Development Rules

- All important standards and conventions are defined in `ARCHITECTURE.md`.
- Every task follows a clear, step-by-step plan with explicit user confirmation before implementation.
- All code must be complete—no TODOs, placeholders, or unfinished segments.
- Readability and correctness are prioritized.

## 5. Flexible and Collaborative

- Rules within `TASK.md` can be extended to automate more tasks or connect with other services.
- The system is well-suited for both advanced solo developers and collaborative teams.

---

**Summary:**  
With only `ARCHITECTURE.md` and `TASK.md`, this system enables highly autonomous, transparent, and maintainable AI-driven project development—boosting productivity while reducing complexity.

## ARCHITECTURE & Task Management

### ARCHITECTURE.md

- Purpose: High-level vision, architecture, constraints, tech stack, tools, etc.
- Prompt to AI: “Use the structure and decisions outlined in ARCHITECTURE.md.”
- Have the LLM reference this file at the beginning of any new conversation.


### TASK.md

- Purpose: Tracks current tasks, backlog, and sub-tasks.
- Includes: Bullet list of active work, milestones, and anything discovered mid-process.
- Prompt to AI: “Update TASK.md to mark XYZ as done and add ABC as a new task.”
- Can prompt the LLM to automatically update and create tasks as well (through global rules).




---

## Windsurf attribute

### Rules

```md

## 針對 觸發時機：

---
trigger: always_on

or 

trigger: model_decision
---

## 針對 描述：

---
description: When developing Go integrated with MongoDB should follow this spec as minimum requirements and specs.
---

```

---

## Ref

- [The 3 MUST Have MCP Servers for Any AI Coding (and How to Use Them) ](https://www.youtube.com/watch?v=MBaTuJfICP4)
- [Guide Doc](/files/Full%20Process%20for%20Coding%20with%20AI%20Coding%20Assistants.pdf)｀
- [深入了解 .windsurfrules：如何为 Windsurf 配置全局和项目规则](https://www.ifb.me/zh/blog/ai/shen-ru-liao-jie-win)
- [GitHub - PatrickJS/awesome-cursorrules: :page_facing_up: A curated list of awesome .cursorrules files](https://github.com/PatrickJS/awesome-cursorrules)
- [[Guide] A Simpler, More Autonomous AI Workflow for Cursor [New Update]](https://forum.cursor.com/t/guide-a-simpler-more-autonomous-ai-workflow-for-cursor-new-update/70688)