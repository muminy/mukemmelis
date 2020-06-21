export default function ({ steps, ileri, geri, onayla }) {
  return (
      <div className="footer_content">
        <div className="sol_sag">
          {steps[steps.length - 1].active ? (
            <React.Fragment>
              <button
                disabled={steps[0].active}
                onClick={geri}
              >
                Geri
              </button>
              <button
                onClick={onayla}
                className="OnaylaBtn"
              >
                Onayla
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button
                disabled={steps[0].active}
                onClick={geri}
              >
                Geri
              </button>
              <button
                disabled={steps[steps.length - 1].active}
                onClick={ileri}
              >
                İleri
              </button>
            </React.Fragment>
          )}
      </div>
    </div>
  );
}
