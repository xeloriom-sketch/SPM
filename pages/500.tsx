export default function Custom500() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Une erreur est survenue
        </h1>
        <p style={{ color: "#666", margin: 0 }}>
          Merci de réessayer dans quelques instants.
        </p>
      </div>
    </main>
  );
}
