import React from "react";
import { Routes, Route } from "react-router";
import MedicationDetails from "./MedicationDetails";
import Medication from "./Medication";

const MedicationRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Medication />} />
      <Route path="/detail" element={<MedicationDetails />} />
    </Routes>
  );
};

export default MedicationRouting;
