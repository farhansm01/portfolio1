"use client";

import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import {
  HiArrowRightOnRectangle,
  HiArrowTopRightOnSquare,
  HiCheck,
  HiCloudArrowUp,
  HiExclamationTriangle,
  HiPencilSquare,
  HiPlus,
  HiTrash,
  HiXMark,
} from "react-icons/hi2";

const emptyForm = {
  slug: "",
  name: "",
  color: "#8b5cf6",
  image: "/projects/",
  live: "",
  github: "",
  stack: "",
  en: {
    tagline: "",
    description: "",
    purpose: "",
    challenges: "",
    future: "",
  },
  de: {
    tagline: "",
    description: "",
    purpose: "",
    challenges: "",
    future: "",
  },
};

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState(null);
  const [activeLangTab, setActiveLangTab] = useState("en");
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const body = new FormData();
    body.append("image", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setFormData((prev) => ({ ...prev, image: data.url }));
        showToast("Image uploaded to ImgBB successfully!");
      } else {
        showToast(data.error || "Image upload failed", "error");
      }
    } catch {
      showToast("An error occurred during upload", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Check Auth
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/check");
        const data = await res.json();
        if (data.authenticated) {
          setAuthenticated(true);
          fetchProjects();
        } else {
          window.location.href = "/admin/login";
        }
      } catch {
        window.location.href = "/admin/login";
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, []);

  const fetchProjects = async () => {
    setLoadingProjects(true);
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to fetch projects", "error");
    } finally {
      setLoadingProjects(false);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  const openCreateModal = () => {
    setEditingSlug(null);
    setFormData(emptyForm);
    setActiveLangTab("en");
    setModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingSlug(project.slug);
    setFormData({
      slug: project.slug,
      name: project.name,
      color: project.color || "#8b5cf6",
      image: project.image || "/projects/",
      live: project.live || "",
      github: project.github || "",
      stack: Array.isArray(project.stack) ? project.stack.join(", ") : "",
      en: {
        tagline: project.en?.tagline || project.tagline || "",
        description: project.en?.description || project.description || "",
        purpose: project.en?.purpose || project.purpose || "",
        challenges: Array.isArray(project.en?.challenges)
          ? project.en.challenges.join("\n")
          : Array.isArray(project.challenges)
          ? project.challenges.join("\n")
          : "",
        future: Array.isArray(project.en?.future)
          ? project.en.future.join("\n")
          : Array.isArray(project.future)
          ? project.future.join("\n")
          : "",
      },
      de: {
        tagline: project.de?.tagline || "",
        description: project.de?.description || "",
        purpose: project.de?.purpose || "",
        challenges: Array.isArray(project.de?.challenges)
          ? project.de.challenges.join("\n")
          : "",
        future: Array.isArray(project.de?.future)
          ? project.de.future.join("\n")
          : "",
      },
    });
    setActiveLangTab("en");
    setModalOpen(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      slug: formData.slug.trim(),
      name: formData.name.trim(),
      color: formData.color,
      image: formData.image.trim(),
      live: formData.live.trim(),
      github: formData.github.trim(),
      stack: formData.stack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      en: {
        tagline: formData.en.tagline.trim(),
        description: formData.en.description.trim(),
        purpose: formData.en.purpose.trim(),
        challenges: formData.en.challenges
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        future: formData.en.future
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      },
      de: {
        tagline: formData.de.tagline.trim(),
        description: formData.de.description.trim(),
        purpose: formData.de.purpose.trim(),
        challenges: formData.de.challenges
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        future: formData.de.future
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      },
      // Top-level fallbacks for older code compatibility
      tagline: formData.en.tagline.trim(),
      description: formData.en.description.trim(),
      purpose: formData.en.purpose.trim(),
      challenges: formData.en.challenges
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      future: formData.en.future
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    try {
      const isEdit = Boolean(editingSlug);
      const url = isEdit ? `/api/projects/${editingSlug}` : "/api/projects";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        showToast(
          isEdit ? "Project updated successfully!" : "Project created successfully!"
        );
        setModalOpen(false);
        fetchProjects();
      } else {
        showToast(data.error || "Failed to save project", "error");
      }
    } catch {
      showToast("An error occurred while saving", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProject = async (slug) => {
    try {
      const res = await fetch(`/api/projects/${slug}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Project deleted successfully");
        setDeleteConfirmSlug(null);
        fetchProjects();
      } else {
        const data = await res.json();
        showToast(data.error || "Failed to delete project", "error");
      }
    } catch {
      showToast("An error occurred while deleting", "error");
    }
  };

  if (checkingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-page)",
          color: "var(--text-muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Authenticating session...
      </div>
    );
  }

  if (!authenticated) return null;

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    background: "var(--input-bg)",
    border: "1px solid var(--glass-border)",
    color: "var(--text-base)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 20px 80px",
        background: "var(--bg-page)",
      }}
    >
      <Navbar />

      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
        {/* Toast Alert */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: "fixed",
                top: "90px",
                right: "24px",
                zIndex: 99,
                padding: "12px 20px",
                borderRadius: "12px",
                background:
                  toast.type === "error"
                    ? "rgba(239, 68, 68, 0.9)"
                    : "rgba(34, 197, 94, 0.9)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: "600",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {toast.type === "error" ? <HiExclamationTriangle /> : <HiCheck />}
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dashboard Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#8b5cf6",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                marginBottom: "8px",
              }}
            >
              ADMIN DASHBOARD
            </div>
            <h1
              className="font-bold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.25rem",
                color: "var(--text-base)",
              }}
            >
              Project Management
            </h1>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={openCreateModal}
              className="shine-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                color: "white",
                border: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(139,92,246,0.3)",
              }}
            >
              <HiPlus style={{ fontSize: "1.1rem" }} /> Add New Project
            </button>

            <button
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-subtle)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <HiArrowRightOnRectangle /> Logout
            </button>
          </div>
        </div>

        {/* Projects List */}
        {loadingProjects ? (
          <div
            style={{
              padding: "60px 0",
              textAlign: "center",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Loading projects...
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {projects.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card"
                style={{
                  borderRadius: "20px",
                  padding: "24px",
                  border: `1px solid ${p.color || "#8b5cf6"}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1, minWidth: "280px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "90px",
                      height: "56px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={p.image || "/projects/nestly.png"}
                      alt={p.name}
                      fill
                      sizes="90px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: p.color || "#8b5cf6",
                          fontWeight: "700",
                        }}
                      >
                        {p.number || `0${idx + 1}`}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                          color: "var(--text-base)",
                          margin: 0,
                        }}
                      >
                        {p.name}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {p.en?.tagline || p.tagline}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}>
                      {Array.isArray(p.stack) &&
                        p.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              padding: "2px 8px",
                              borderRadius: "9999px",
                              background: `${p.color || "#8b5cf6"}15`,
                              border: `1px solid ${p.color || "#8b5cf6"}30`,
                              color: p.color || "#8b5cf6",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      borderRadius: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-subtle)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <HiArrowTopRightOnSquare /> Demo
                  </a>

                  <button
                    onClick={() => openEditModal(p)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "10px",
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.4)",
                      color: "#a78bfa",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <HiPencilSquare /> Edit
                  </button>

                  <button
                    onClick={() => setDeleteConfirmSlug(p.slug)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "10px",
                      background: "rgba(239, 68, 68, 0.12)",
                      border: "1px solid rgba(239, 68, 68, 0.35)",
                      color: "#f87171",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <HiTrash /> Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal Form for Create / Edit */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                style={{
                  maxWidth: "720px",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  background: "var(--card-bg, #0b0b1a)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "24px",
                  padding: "32px",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-base)", margin: 0 }}>
                    {editingSlug ? `Edit Project: ${formData.name}` : "Create New Project"}
                  </h2>
                  <button
                    onClick={() => setModalOpen(false)}
                    style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: "1.5rem", cursor: "pointer" }}
                  >
                    <HiXMark />
                  </button>
                </div>

                <form onSubmit={handleSaveProject} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* Basic Metadata Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={labelStyle}>Slug (Unique Identifier)</label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="e.g. my-awesome-app"
                        required
                        disabled={Boolean(editingSlug)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Project Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nestly"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={labelStyle}>Accent Color</label>
                      <input
                        type="color"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        style={{ ...inputStyle, height: "42px", padding: "4px" }}
                      />
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <label style={{ ...labelStyle, marginBottom: 0 }}>Image URL / Path</label>
                        <label
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: "#38bdf8",
                            cursor: uploadingImage ? "not-allowed" : "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontWeight: "600",
                          }}
                        >
                          <HiCloudArrowUp style={{ fontSize: "0.95rem" }} />
                          {uploadingImage ? "Uploading..." : "Upload File to ImgBB"}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            disabled={uploadingImage}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/projects/nestly.png or https://i.ibb.co/..."
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={labelStyle}>Live Demo URL</label>
                      <input
                        type="url"
                        value={formData.live}
                        onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                        placeholder="https://my-app.vercel.app"
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>GitHub Repo URL</label>
                      <input
                        type="url"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        placeholder="https://github.com/username/repo"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Tech Stack (Comma Separated)</label>
                    <input
                      type="text"
                      value={formData.stack}
                      onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                      placeholder="Next.js 16, BetterAuth, Google Gemini, MongoDB"
                      required
                      style={inputStyle}
                    />
                  </div>

                  {/* Language Tab Switcher */}
                  <div style={{ marginTop: "10px" }}>
                    <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--glass-border)", paddingBottom: "10px", marginBottom: "16px" }}>
                      <button
                        type="button"
                        onClick={() => setActiveLangTab("en")}
                        style={{
                          padding: "6px 16px",
                          borderRadius: "8px",
                          background: activeLangTab === "en" ? "rgba(139,92,246,0.2)" : "transparent",
                          border: activeLangTab === "en" ? "1px solid #8b5cf6" : "1px solid transparent",
                          color: activeLangTab === "en" ? "white" : "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        🇬🇧 English Content
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveLangTab("de")}
                        style={{
                          padding: "6px 16px",
                          borderRadius: "8px",
                          background: activeLangTab === "de" ? "rgba(139,92,246,0.2)" : "transparent",
                          border: activeLangTab === "de" ? "1px solid #8b5cf6" : "1px solid transparent",
                          color: activeLangTab === "de" ? "white" : "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        🇩🇪 German Content
                      </button>
                    </div>

                    {activeLangTab === "en" ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <div>
                          <label style={labelStyle}>Tagline (EN)</label>
                          <input
                            type="text"
                            value={formData.en.tagline}
                            onChange={(e) => setFormData({ ...formData, en: { ...formData.en, tagline: e.target.value } })}
                            placeholder="AI-Powered Real Estate Platform"
                            required
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Description (EN)</label>
                          <textarea
                            rows={3}
                            value={formData.en.description}
                            onChange={(e) => setFormData({ ...formData, en: { ...formData.en, description: e.target.value } })}
                            placeholder="Full project description in English..."
                            required
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Purpose / Problem Solved (EN)</label>
                          <textarea
                            rows={2}
                            value={formData.en.purpose}
                            onChange={(e) => setFormData({ ...formData, en: { ...formData.en, purpose: e.target.value } })}
                            placeholder="Why this project was built..."
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Challenges Faced (EN) — 1 challenge per line</label>
                          <textarea
                            rows={3}
                            value={formData.en.challenges}
                            onChange={(e) => setFormData({ ...formData, en: { ...formData.en, challenges: e.target.value } })}
                            placeholder="Challenge 1&#10;Challenge 2&#10;Challenge 3"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Future Plans (EN) — 1 plan per line</label>
                          <textarea
                            rows={3}
                            value={formData.en.future}
                            onChange={(e) => setFormData({ ...formData, en: { ...formData.en, future: e.target.value } })}
                            placeholder="Future feature 1&#10;Future feature 2"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <div>
                          <label style={labelStyle}>Tagline (DE)</label>
                          <input
                            type="text"
                            value={formData.de.tagline}
                            onChange={(e) => setFormData({ ...formData, de: { ...formData.de, tagline: e.target.value } })}
                            placeholder="KI-gestützte Immobilienplattform"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Description (DE)</label>
                          <textarea
                            rows={3}
                            value={formData.de.description}
                            onChange={(e) => setFormData({ ...formData, de: { ...formData.de, description: e.target.value } })}
                            placeholder="Beschreibung auf Deutsch..."
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Purpose / Problem Solved (DE)</label>
                          <textarea
                            rows={2}
                            value={formData.de.purpose}
                            onChange={(e) => setFormData({ ...formData, de: { ...formData.de, purpose: e.target.value } })}
                            placeholder="Zweck des Projekts auf Deutsch..."
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Challenges Faced (DE) — 1 per line</label>
                          <textarea
                            rows={3}
                            value={formData.de.challenges}
                            onChange={(e) => setFormData({ ...formData, de: { ...formData.de, challenges: e.target.value } })}
                            placeholder="Herausforderung 1&#10;Herausforderung 2"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Future Plans (DE) — 1 per line</label>
                          <textarea
                            rows={3}
                            value={formData.de.future}
                            onChange={(e) => setFormData({ ...formData, de: { ...formData.de, future: e.target.value } })}
                            placeholder="Zukunftspläne auf Deutsch..."
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "10px",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-subtle)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="shine-button"
                      style={{
                        padding: "10px 24px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                        border: "none",
                        color: "white",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: submitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {submitting ? "Saving..." : editingSlug ? "Save Changes" : "Create Project"}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteConfirmSlug && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 110,
                background: "rgba(0,0,0,0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  padding: "28px",
                  borderRadius: "20px",
                  background: "var(--card-bg, #0b0b1a)",
                  border: "1px solid rgba(239,68,68,0.4)",
                  textAlign: "center",
                }}
              >
                <HiTrash style={{ color: "#ef4444", fontSize: "2.5rem", marginBottom: "12px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--text-base)", marginBottom: "8px" }}>
                  Delete Project?
                </h3>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                  Are you sure you want to delete <strong style={{ color: "var(--text-base)" }}>{deleteConfirmSlug}</strong>? This action cannot be undone.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                  <button
                    onClick={() => setDeleteConfirmSlug(null)}
                    style={{
                      padding: "8px 20px",
                      borderRadius: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-subtle)",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteProject(deleteConfirmSlug)}
                    style={{
                      padding: "8px 20px",
                      borderRadius: "10px",
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Confirm Delete
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
