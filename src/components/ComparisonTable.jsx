const rows = [
  ["Secure AI chat", "Yes", "Yes"],
  ["Web-grounded answers", "Yes", "Yes"],
  ["File upload", "Yes, depending on availability and policy", "Yes"],
  ["Image generation", "Yes, depending on availability and policy", "Yes"],
  ["Copilot in Word, Excel, PowerPoint, Outlook, Teams", "No", "Yes"],
  [
    "Answers grounded in Microsoft Graph and organizational data",
    "Limited / depends on scenario",
    "Yes",
  ],
  [
    "Agent scenarios",
    "Possible, may require consumption review",
    "Possible, may require consumption review",
  ],
];

export default function ComparisonTable() {
  return (
    <section className="comparison" aria-labelledby="comparison-title">
      <div className="section-heading">
        <p className="eyebrow">Quick comparison</p>
        <h2 id="comparison-title">Copilot Chat vs Microsoft 365 Copilot</h2>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Microsoft 365 Copilot Chat</th>
              <th>Microsoft 365 Copilot</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([capability, chat, copilot]) => (
              <tr key={capability}>
                <th scope="row">{capability}</th>
                <td>{chat}</td>
                <td>{copilot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
