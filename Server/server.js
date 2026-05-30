const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

/* =========================================
   ROUTES
========================================= */

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

/* =========================================
   HEALTH CHECK
========================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running 🚀",
  });
});

/* =========================================
   FRONTEND
========================================= */

const clientDistPath = path.join(__dirname, "../client/dist");

app.use(express.static(clientDistPath));

app.use((req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

/* =========================================
   SERVER
========================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
