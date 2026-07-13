# AGENTS.md — Safety rules for coding agents

## Project purpose

Build **Tái Lập – Dự án cộng đồng hỗ trợ phục hồi tài chính**, a free, privacy-first educational website that helps adults recognize debt distress, organize their obligations, stop taking new debt, and find official or professional support.

The project is **not** a law firm, financial adviser, medical provider, credit bureau, lender, debt collector, debt negotiator or complaint platform.

## Non-negotiable rules

1. Do not add server-side storage for debt, income, creditor, health or gambling-related data.
2. Do not add authentication, user accounts, social login or cloud sync in V1.
3. Do not add document upload, image upload, audio upload or free-text case intake.
4. Do not add an AI chatbot that answers legal, financial, medical or crisis questions.
5. Do not classify a user into an official CIC/debt group.
6. Do not predict lawsuits, criminal liability, write-off, debt reduction or collection outcomes.
7. Do not generate personalized complaints, petitions, legal letters or negotiation scripts from user data.
8. Do not add lender, loan app, credit-card, gambling, crypto or forex affiliate links.
9. Do not add ads, trackers, session replay, fingerprinting or behavioral profiling.
10. Do not add comments, forums, public stories, ratings or named accusations.
11. Do not add real bank workflows, confidential rules, internal screens, scoring logic or project code from any employer/client.
12. Do not use the terms “xóa nợ xấu”, “làm sạch CIC”, “bao giảm nợ”, “đàm phán hộ” or “cam kết cơ cấu” as product promises.
13. Do not add analytics, session replay, heatmaps, fingerprinting or behavioral tracking in V1.

## Allowed V1 capabilities

- Static educational articles with sources and review dates.
- A deterministic client-side health check using in-memory component state in the first vertical slice.
- Future client-side calculators only after a separate decision approves formulas, assumptions, rounding rules, test cases and disclaimers.
- Client-side debt inventory in a later slice, stored in IndexedDB only after explicit opt-in.
- Generic action plans based on broad, non-legal risk signals.
- Printable summaries generated through a browser print stylesheet in a future slice; no JSON/PDF generator is approved.
- Links to official sources and general referral guidance.
- A published correction/security email address may be considered after the first slice, with a warning not to send personal case information; no public email or feedback endpoint in the first slice.

## First vertical slice

Only these routes are in the first vertical slice:

- `/`
- `/bat-dau`
- `/ke-hoach-hanh-dong`
- `/ho-tro-khan-cap`
- `/quyen-rieng-tu`
- `/ve-du-an`

The first slice has no localStorage, IndexedDB, calculator, export, feedback form, backend API, database, authentication or analytics.
It also does not publish a project email address.

## Data architecture

Default architecture:

```text
Browser
├── static content
├── client-side rules
├── in-memory state for the first-slice health check
├── opt-in IndexedDB for a future debt-inventory slice
└── optional browser print in a future slice

Server
├── static hosting
├── no user financial database
└── minimal technical logs with short retention
```

Never put debt details in:

- URL/query parameters;
- analytics events;
- error messages sent to third parties;
- server logs;
- crash reports;
- email forms.

## Assessment wording

Allowed output labels:

- “Cần hành động sớm”
- “Có dấu hiệu vòng xoáy nợ”
- “Tiếp tục theo dõi và chuẩn bị”
- “Cần hỗ trợ khẩn cấp”

Health-check decision rules:

- HC-01 “Có hoặc tôi không chắc” stops the health check and shows urgent-help content.
- Only HC-02 = “Có” may produce “Có dấu hiệu vòng xoáy nợ”.
- HC-03 = “Không” produces “Cần hành động sớm”, prioritizing essential needs.
- HC-03 or HC-04 = “Tôi không chắc” produces “Cần hành động sớm”.
- Skipping HC-02, HC-03 or HC-04 does not raise the result by itself.
- Results render at `/bat-dau`; never put answers, results or state in URLs or browser persistence.

Forbidden output labels:

- “Bạn thuộc nợ nhóm 2/3/4/5”
- “Bạn bị nghiện cờ bạc”
- “Bạn sẽ bị kiện”
- “Bạn có thể được giảm X%”
- “Bên cho vay đang vi phạm pháp luật”

## Pull request checklist

Every PR must answer:

- Does this collect new personal data?
- Can the same outcome be achieved entirely in the browser?
- Could the output be mistaken for legal, medical or financial advice?
- Does it expose or imply confidential banking knowledge?
- Could a person in crisis misunderstand or be harmed by the wording?
- Does it introduce a third party that receives user behavior or content?

Any “yes” blocks merge until the scope is reviewed and documented in `decision-log.md`.
