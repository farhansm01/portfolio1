"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiEye, HiEyeSlash, HiLockClosed } from "react-icons/hi2";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid admin password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 60px",
        background: "var(--bg-page)",
      }}
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-card"
        style={{
          maxWidth: "420px",
          width: "100%",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid var(--glass-border)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent Top Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #8b5cf6, #22d3ee, #f472b6)",
          }}
        />

        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(139, 92, 246, 0.15)",
              border: "1px solid rgba(139, 92, 246, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.25)",
            }}
          >
            <HiLockClosed style={{ color: "#8b5cf6", fontSize: "1.6rem" }} />
          </div>
          <h1
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              color: "var(--text-base)",
              marginBottom: "6px",
            }}
          >
            Admin Portal
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
            }}
          >
            Enter your admin password to access the dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Password Only
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                required
                style={{
                  width: "100%",
                  padding: "14px 44px 14px 16px",
                  borderRadius: "12px",
                  background: "var(--input-bg)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--text-base)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "all 0.2s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(139,92,246,0.7)";
                  e.target.style.boxShadow = "0 0 20px rgba(139,92,246,0.25)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--glass-border)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? <HiEyeSlash /> : <HiEye />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                color: "#f87171",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                textAlign: "center",
                margin: 0,
              }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="shine-button"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              border: "none",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Authenticating..." : "Unlock Dashboard"}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
