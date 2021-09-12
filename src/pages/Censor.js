export default function Censor({ width, height }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        backdropFilter: 'blur(30px)',
        zIndex: 3,
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          fontSize: 10,
        }}
      >
        Censored
      </div>
    </div>
  );
}
