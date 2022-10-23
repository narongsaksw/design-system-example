import React from "react";
import { createRoot } from "react-dom/client";

import { Text, Margin } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/global.css";

const container = document.querySelector("#root");
const root = createRoot(container!);

root.render(<div>
    <Margin left top space="sm">
        <Text size="xs">this is text</Text>
    </Margin>
</div>);
