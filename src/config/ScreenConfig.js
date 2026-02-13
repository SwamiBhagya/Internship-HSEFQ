export const screenConfig = {
  "/": {
    title: "Dashboard Overview",
    description: "Real-time operational status and metrics.",
    widgets: [
      { id: 1, type: "stat", label: "Total Incidents", value: "12" },
      { id: 2, type: "stat", label: "Open Actions", value: "5" },
      { id: 3, type: "text", content: "System is running normally." }
    ]
  },
  "/safety": {
    title: "Safety Management",
    description: "Guidelines, protocols, and safety standards.",
    widgets: [
      { id: 1, type: "card", title: "Fire Safety Protocol", content: "Standard Operating Procedure v2.1" },
      { id: 2, type: "card", title: "Emergency Contacts", content: "Police: 100, Fire: 101" }
    ]
  },
  "/report": {
    title: "Report Incident",
    description: "Submit a new HSE incident report.",
    widgets: [
      { id: 1, type: "text", content: "Form Placeholder: Incident Reporting Module will appear here." }
    ]
  },
  // Fallback for 404
  "not-found": {
    title: "Page Not Found",
    description: "The requested configuration does not exist.",
    widgets: []
  }
};