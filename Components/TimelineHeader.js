export default function TimelineHeader({
  $barFill,
  $gay1,
  $gay2,
  $gay3,
  $gay4,
  scrollIntoView,
}) {
  return (
    <>
      <div className="py-20 px-6 sm:p-24" style={{ backgroundColor: `white` }}>
        <div className="progress">
          <div className="bar">
            <div
              ref={$barFill}
              className="bar__fill transition-width duration-500 ease-in-out"
            ></div>
          </div>
          <div
            className="point point--complete"
            onClick={(e) => scrollIntoView(e, $gay1)}
          >
            <div className="bullet"></div>
            <label className="label">Childhood</label>
          </div>
          <div
            className="point point--active"
            onClick={(e) => scrollIntoView(e, $gay2)}
          >
            <div className="bullet"></div>
            <label className="label">Teenager</label>
          </div>
          <div className="point" onClick={(e) => scrollIntoView(e, $gay3)}>
            <div className="bullet"></div>
            <label className="label">Adulthood</label>
          </div>
          <div className="point" onClick={(e) => scrollIntoView(e, $gay4)}>
            <div className="bullet"></div>
            <label className="label">Marriage</label>
          </div>
        </div>
      </div>
    </>
  );
}
