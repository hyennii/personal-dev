import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="main">
      <motion.div
        className="intro"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <img src="./images/tit.png"></img>
        <img className="mice" src="./images/mice.png"></img>
      </motion.div>

      <motion.div
        className="btn"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <a href="#;">
          <img src="./images/btn_howto.png"></img>
        </a>

        <a href="#;">
          <img src="./images/btn_start.png"></img>
        </a>
      </motion.div>

      <img class="subway" src="./images/subway.jpg"></img>
    </div>
  );
}

export default App;
