import { configureStore } from "@reduxjs/toolkit";

import ContactSlices from "./ContactSlices";

export const store = configureStore({
    reducer: {
        contacts: ContactSlices,
       },
});