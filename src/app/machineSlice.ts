import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import database from "../../database/RealTimeDatabase";
// import { machineApi } from "../service/machineApi";

// let Imei = 4891426996145;

// const db = database;

// const refMachine = ref(db, "machine/" +Imei);

// (async () => {
//   try {
//     await onValue(refMachine, (snapshot) => {
//       const data = snapshot.val();
//       if (data === null) {
//         console.log("không có liệu");
//         // navigation.replace("Error");
//       } else {
//         console.log(data.info)
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// })();

// const fetchMachineById = createAsyncThunk(
//   "machine/fetchMachineById",
//   async (machineId, thunkAPI) => {
//     const response = await machineApi();
//     return response;
//   }
// );

// export const machineSlice = createSlice({
//   name: "machine",
//   initialState: {
//     data: "hahaha",
//     id: "0",

//     // info: {
//     //   imei: "4891426996145",
//     //   sim: "0904025252",
//     //   status: "Bình thường",
//     //   name: "ATM - 1208323582",
//     //   typeDevice: "Thiết bị cảnh báo dành cho máy ATM",
//     //   address: "86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP.HCM",
//     //   activationDate: "12/06/2021 16:00:00",
//     //   powerConnection: "PIN dự phòng",
//     //   queryTime: "16:20:00 22/06/2021",
//     // },
//     // sensorStatus: {
//     //   temperature: "Cao",
//     //   vibration: "Bình thường",
//     //   aboveDoor: "Bật",
//     //   outsideDoor: "Bật",
//     //   safeDoor: "Bật",
//     //   backup: "Tắt",
//     //   move: "Tắt",
//     //   leak: "Tắt",
//     //   smoke: "Bật",
//     //   battery: "Bật",
//     //   energy: "90 - 265 ± 5% VAC/50/60hz",
//     //   warning: "Còi hụ",
//     // },
//   },
//   reducers: {
//     // getInfo: (state, action) => {
//     //   return {
//     //     ...state,
//     //     data: {
//     //       payload: action.payload,
//     //     },
//     //   };
//     // },
//   },
//   // reducers: {
//   //   getInfo: (state, action: PayloadAction<number>) => {
//   //       state.data += action.payload;
//   //   },
//   // },
// });

export const machineSlice = createSlice({
  name: "machine",
  initialState: {
    data: {},
    id: "0",
    // noodleAvailable: [],
  },
  reducers: {
    getInfo: (state, action) => {
      return {
        ...state,
        data: {
          payload: action.payload,
        },
      };
    },
    // saveID: (state, action) => {
    //   return {
    //     ...state,
    //     id: action.payload,
    //   };
    // },
    // saveNoodle: (state, action) => {
    //   return {
    //     ...state,
    //     noodleAvailable: action.payload,
    //   };
    // },
  },
});

// export const { getInfo } = machineSlice.actions;

export default machineSlice.reducer;
