import { configureStore } from "@reduxjs/toolkit";
import machineSlice from "./machineSlice";

export const store = configureStore({
  reducer: {
    machine: machineSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
