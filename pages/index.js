export default function Home() {
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>Willkommen im Tumbler Shop</h1>
      <p>Hier findest du unsere beliebtesten Produkte.</p>

      {/* Produktkarte */}
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <img 
          src="https://via.placeholder.com/300" 
          alt="Tumbler Midnight" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <h2>Tumbler Midnight</h2>
        <p>Doppelt isolierter Edelstahl-Tumbler für heiße und kalte Getränke. Perfekt für unterwegs.</p>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>19,90 €</p>

        {/* Kaufen Button (Test-Button) */}
        <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#FF4500", color: "white", border: "none", borderRadius: "5px" }}>
          Jetzt Kaufen
        </button>
      </div>
    </main>
  );
}
