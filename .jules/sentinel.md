## 2025-02-09 - Defensive Input Validation in AI Routes
**Learning:** AI SDK endpoints are susceptible to malformed input or oversized payloads which can lead to DoS or unexpected model behavior. Validating the `messages` array with a strict schema (limiting length and content size) is critical for production stability.
**Action:** Use Zod to validate all incoming requests to AI Route Handlers. Enforce maximum constraints on message count and character count per message.
