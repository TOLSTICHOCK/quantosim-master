import React, { useState } from "react";
import GlobalStyles from "../src/GlobalStyles";
import SidebarMenu from "../src/components/Sidebar";
import Header from "../src/components/Header";
//import QSim from "./pages/circuit/QSim";
import Circuit from "./pages/circuit/Circuit";
import Home from "./pages/home/Home";
import LectureQuantumBit from "./pages/theory/LectureQuantumBit";
import LectureQuantumSystem from "./pages/theory/LectureQuantumSystem";
import LectureMeasurementInQuantumSystem from "./pages/theory/LectureMeasurementInQuantumSystem";
import LectureHadamardGate from "./pages/theory/LectureHadamardGate";
import LectureXGate from "./pages/theory/LectureXGate";
import LectureZGate from "./pages/theory/LectureZGate";
import LectureYGate from "./pages/theory/LectureYGate";
import LectureSGate from "./pages/theory/LectureSGate";
import LectureTGate from "./pages/theory/LectureTGate";
import LectureRxRyRzGate from "./pages/theory/LectureRxRyRzGate";
import LectureUGates from "./pages/theory/LectureUGates";
import LectureTableGates from "./pages/theory/LectureTableGates";
import LectureBellState from "./pages/theory/LectureBellState";
import LectureSuperdenseCoding from "./pages/theory/LectureSuperdenseCoding";
import LectureQuantumTeleportation from "./pages/theory/LectureQuantumTeleportation";
import LectureDeutschJozsaAlgorithm from "./pages/theory/LectureDeutschJozsaAlgorithm";
import LectureGroversAlgorithm from "./pages/theory/LectureGroversAlgorithm";
import LectureQuantumFourierTransform from "./pages/theory/LectureQuantumFourierTransform";
import LectureShorsAlgorithm from "./pages/theory/LectureShorsAlgorithm";
import LectureControlledGates from "./pages/theory/LectureControlledGates";
import Practice2 from "./pages/theory/Practice2";
import Practice3 from "./pages/theory/Practice3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/circuit"
            target="_blank"
            element={
              <>
                <SidebarMenu />
                <Circuit />
              </>
            }
          />
          <Route
            path="/lectures/quantum_bit"
            element={
              <>
                <SidebarMenu />
                <LectureQuantumBit />
              </>
            }
          />
          <Route
            path="/lectures/quantum_system"
            element={
              <>
                <SidebarMenu />
                <LectureQuantumSystem />
              </>
            }
          />
          <Route
            path="/lectures/measurement_in_quantum_system"
            element={
              <>
                <SidebarMenu />
                <LectureMeasurementInQuantumSystem />
              </>
            }
          />
          <Route
            path="/lectures/hadamard_gate"
            element={
              <>
                <SidebarMenu />
                <LectureHadamardGate />
              </>
            }
          />
          <Route
            path="/lectures/X_gate"
            element={
              <>
                <SidebarMenu />
                <LectureXGate />
              </>
            }
          />
          <Route
            path="/lectures/Z_gate"
            element={
              <>
                <SidebarMenu />
                <LectureZGate />
              </>
            }
          />
          <Route
            path="/lectures/Y_gate"
            element={
              <>
                <SidebarMenu />
                <LectureYGate />
              </>
            }
          />
          <Route
            path="/lectures/S_gate"
            element={
              <>
                <SidebarMenu />
                <LectureSGate />
              </>
            }
          />
          <Route
            path="/lectures/T_gate"
            element={
              <>
                <SidebarMenu />
                <LectureTGate />
              </>
            }
          />
          <Route
            path="/lectures/RxRyRz_gate"
            element={
              <>
                <SidebarMenu />
                <LectureRxRyRzGate />
              </>
            }
          />
          <Route
            path="/lectures/U_gates"
            element={
              <>
                <SidebarMenu />
                <LectureUGates />
              </>
            }
          />
          <Route
            path="/lectures/table_gates"
            element={
              <>
                <SidebarMenu />
                <LectureTableGates />
              </>
            }
          />
          <Route
            path="/lectures/controlled_gates"
            element={
              <>
                <SidebarMenu />
                <LectureControlledGates />
              </>
            }
          />

          <Route
            path="/lectures/Bell_state"
            element={
              <>
                <SidebarMenu />
                <LectureBellState />
              </>
            }
          />
          <Route
            path="/lectures/superdense_coding"
            element={
              <>
                <SidebarMenu />
                <LectureSuperdenseCoding />
              </>
            }
          />
          <Route
            path="/lectures/quantum_teleportation"
            element={
              <>
                <SidebarMenu />
                <LectureQuantumTeleportation />
              </>
            }
          />
          <Route
            path="/lectures/Deutsch–Jozsa_algorithm"
            element={
              <>
                <SidebarMenu />
                <LectureDeutschJozsaAlgorithm />
              </>
            }
          />
          <Route
            path="/lectures/Grover's_algorithm"
            element={
              <>
                <SidebarMenu />
                <LectureGroversAlgorithm />
              </>
            }
          />
          <Route
            path="/lectures/quantum_fourier_transform"
            element={
              <>
                <SidebarMenu />
                <LectureQuantumFourierTransform />
              </>
            }
          />
          <Route
            path="/lectures/Shor's_algorithm"
            element={
              <>
                <SidebarMenu />
                <LectureShorsAlgorithm />
              </>
            }
          />
          <Route
            path="/practice/practice1"
            element={
              <>
                <SidebarMenu />
                <LectureShorsAlgorithm />
              </>
            }
          />
          <Route
            path="/practice/practice2"
            element={
              <>
                <SidebarMenu />
                <Practice2 />
              </>
            }
          />
          <Route
            path="/practice/practice3"
            element={
              <>
                <SidebarMenu />
                <Practice3 />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
