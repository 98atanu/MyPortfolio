const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6002;

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://my-portfolio-three-omega-95.vercel.app"  
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use("/uploads", express.static("uploads"));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
