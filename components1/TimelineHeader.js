export default function TimelineHeader({
  activeIndex,
  setActiveIndex,
  arrayofthings,
}) {
  return (
    <>
      <div className="py-20 px-6 sm:p-24" style={{ backgroundColor: `white` }}>
        <div className="progress">
          <div className="bar">
            <div
              id="bar_fill"
              className="bar__fill transition-width duration-500 ease-in-out"
              style={{
                width: `${activeIndex * (100 / (arrayofthings.length - 1))}%`,
              }}
            ></div>
          </div>

          {arrayofthings.map((thing, index) => (
            <div
              id={`point${index}`}
              key={index}
              className={
                index < activeIndex
                  ? `point point--complete`
                  : index == activeIndex
                  ? `point point--active`
                  : `point`
              }
              onClick={(e) => setActiveIndex(index)}
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
