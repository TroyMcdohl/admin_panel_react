import { Link } from "react-router-dom";
import "./blankUI.css";
import { motion } from "framer-motion";

const BlankUI = () => {
  return (
    <motion.div className="blank_container">
      <motion.div className="blank_wrapper">
        <motion.h4
          className="blank_title"
          initial={{ scale: 0, x: "-100vw" }}
          animate={{ scale: 1, x: "0vw" }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
        >
          Welcom Admin
        </motion.h4>
        <motion.button
          className="blank_btn"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/chart">
            Go to AdminDashBoad
          </Link>
        </motion.button>
        <motion.button
          className="blank_btn_responsive"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/panel">
            Go to AdminDashBoad
          </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BlankUI;
