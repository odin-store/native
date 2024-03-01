import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/root";
// ...

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
