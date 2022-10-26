import React from "react";
import { createRoot } from "react-dom/client";

import { Select } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/global.css";

const container = document.querySelector("#root");
const root = createRoot(container!);

const options = [
  {
    label: "Red",
    value: "Red",
  },
  {
    label: "Green",
    value: "Green",
  },
  {
    label: "Yellow",
    value: "Yellow",
  },
];

root.render(
  <div style={{ padding: "40px" }}>
    <Select options={options} />
  </div>
);
