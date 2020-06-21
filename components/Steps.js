export default function ({ steps }) {
  return (
    <div className="steps">
      {steps.map((item, index) => (
        <div key={index} className={`step ${item.active ? 'active' : ''}`}>
          <div className="step_number">{item.id}</div>
          <div className="info_step">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
