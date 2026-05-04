export const results = {
  copilotChatEnough: {
    tone: "success",
    eyebrow: "Likely fit",
    title: "Microsoft 365 Copilot Chat may be enough",
    recommendation:
      "You likely do not need a Microsoft 365 Copilot add-on license for this scenario.",
    explanation:
      "Your scenario appears to focus on secure AI chat, web-grounded answers, general research, file upload, image generation, or basic productivity support.",
    nextSteps: [
      "Validate that the user has an eligible Microsoft 365 subscription.",
      "Confirm that the scenario does not require Microsoft 365 app integration.",
      "Confirm that the scenario does not require organizational data grounding.",
    ],
  },
  m365CopilotRequired: {
    tone: "info",
    eyebrow: "License likely required",
    title: "Microsoft 365 Copilot license is likely required",
    recommendation:
      "You likely need a Microsoft 365 Copilot license for this scenario.",
    explanation:
      "Your scenario requires Copilot inside Microsoft 365 apps and/or access to organizational data through Microsoft Graph, such as emails, files, meetings, chats, or SharePoint content.",
    nextSteps: [
      "Review Microsoft 365 Copilot licensing requirements.",
      "Confirm user eligibility.",
      "Validate app, data, and security requirements with the licensing or IT admin team.",
    ],
  },
  agentReviewRequired: {
    tone: "warning",
    eyebrow: "Review required",
    title: "Additional agent licensing or consumption review is required",
    recommendation:
      "You may need Microsoft 365 Copilot plus agent-related consumption, depending on how the agent is grounded and used.",
    explanation:
      "Agent scenarios can vary depending on whether the agent uses web grounding, tenant work data, Microsoft Graph, SharePoint, Teams, Outlook, or custom business data.",
    nextSteps: [
      "Identify the agent grounding source.",
      "Check whether the agent uses tenant work data.",
      "Review Copilot Studio, agent consumption, and Microsoft 365 Copilot licensing requirements.",
    ],
  },
  needsEligibleM365: {
    tone: "neutral",
    eyebrow: "Eligibility needed",
    title: "Eligible Microsoft 365 subscription is required",
    recommendation:
      "The user likely needs an eligible Microsoft 365 subscription before using Microsoft 365 Copilot Chat in a commercial work context.",
    explanation:
      "Microsoft 365 Copilot Chat is intended for eligible Microsoft 365 commercial users signed in with a work or school account.",
    nextSteps: [
      "Check the user's Microsoft 365 plan.",
      "Confirm commercial tenant eligibility.",
      "Review official Microsoft licensing documentation.",
    ],
  },
  notM365Scenario: {
    tone: "neutral",
    eyebrow: "Not applicable",
    title: "This does not look like a Microsoft 365 work scenario",
    recommendation:
      "This decision tree is designed for Microsoft 365 commercial work or school account scenarios.",
    explanation:
      "If the user is not signing in with a work or school account, this app cannot reliably determine Microsoft 365 Copilot Chat or Microsoft 365 Copilot licensing needs.",
    nextSteps: [
      "Confirm the account type.",
      "Confirm whether the scenario belongs to a Microsoft 365 commercial tenant.",
      "Review the relevant Copilot product for personal or non-commercial use.",
    ],
  },
};
