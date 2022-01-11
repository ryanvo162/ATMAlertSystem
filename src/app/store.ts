import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
// import { machineApi } from "../service/machineApi";
// import { applyMiddleware, createStore } from "redux";
// import thunkMiddleware from "redux-thunk";
import machineSlice from "./machineSlice";
// import rootReducer from "./machineSlice";

// import { firebaseReducer } from "react-redux-firebase";

// const composedEnhancer = applyMiddleware(thunkMiddleware);

// const store = createStore(rootReducer, composedEnhancer);

export const store = configureStore({
  reducer: {
    machine: machineSlice,
    // firebase: firebaseReducer,
    // [machineApi.reducerPath]: machineApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(machineApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export default store
