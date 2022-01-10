export default function TimelineHeader({
  $barFill,
  scrollIntoView,
  arrayofthings,
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

          {arrayofthings.map((thing, index) => (
            <div
              key={index}
              className="point point--complete"
              onClick={(e) => scrollIntoView(e, thing.ref)}
            >
              <div className="bullet"></div>
              <label className="label">{thing.title}</label>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
