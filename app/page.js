"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    // Temporary AI-style response
    setTimeout(() => {
      setReply(
        "Thanks for contacting us! We've received your message and will get back to you as soon as possible."
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "white",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          AI Customer Support
        </h1>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Get fast, professional responses to customer questions.
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a customer's message..."
            rows="6"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "16px",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "12px",
              background: "#111827",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Generating..." : "Generate Response"}
          </button>
        </form>

        {reply && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "12px",
            }}
          >
            <h3>Suggested Response</h3>
            <p>{reply}</p>
          </div>
        )}
      </div>
    </main>
  );
}

