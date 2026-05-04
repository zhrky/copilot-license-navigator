export const START_QUESTION_ID = "q1";

export const decisionTree = {
  q1: {
    step: 1,
    question: "Will the user sign in with a work or school account?",
    options: [
      { label: "Yes", next: "q2" },
      { label: "No", result: "notM365Scenario" },
    ],
  },
  q2: {
    step: 2,
    question: "Does the user have an eligible Microsoft 365 subscription?",
    options: [
      { label: "Yes", next: "q3" },
      { label: "No", result: "needsEligibleM365" },
    ],
  },
  q3: {
    step: 3,
    question:
      "Is the scenario limited to web-grounded chat, research, file upload, or image generation?",
    options: [
      { label: "Yes", result: "copilotChatEnough" },
      { label: "No", next: "q4" },
    ],
  },
  q4: {
    step: 4,
    question:
      "Does the user need Copilot inside Word, Excel, PowerPoint, Outlook, Teams, or OneNote?",
    options: [
      { label: "Yes", result: "m365CopilotRequired" },
      { label: "No", next: "q5" },
    ],
  },
  q5: {
    step: 5,
    question:
      "Does the user need answers grounded in organizational data such as emails, files, meetings, chats, or SharePoint content?",
    options: [
      { label: "Yes", result: "m365CopilotRequired" },
      { label: "No", next: "q6" },
    ],
  },
  q6: {
    step: 6,
    question: "Will the scenario use agents?",
    options: [
      { label: "No", result: "copilotChatEnough" },
      { label: "Yes", next: "q7" },
    ],
  },
  q7: {
    step: 7,
    question:
      "Will the agent use tenant work data, Microsoft Graph, SharePoint, Teams, Outlook, or business data?",
    options: [
      { label: "Yes", result: "agentReviewRequired" },
      { label: "No", result: "copilotChatEnough" },
    ],
  },
};

export const totalQuestions = Object.keys(decisionTree).length;
