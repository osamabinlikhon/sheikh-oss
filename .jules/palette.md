## 2025-02-09 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are completely invisible to screen readers if they lack descriptive text. Using `aria-label` provides a textual description for users with visual impairments without affecting the visual design.
**Action:** Always add `aria-label` to buttons that only contain icons. Ensure the label describes the action (e.g., "Send message") rather than the icon (e.g., "Paperplane icon").
