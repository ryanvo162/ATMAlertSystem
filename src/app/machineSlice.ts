import { createSlice } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import database from "../../database/RealTimeDatabase";

let Imei = 4891426996145;

const db = database;

const refMachine = ref(db, "machine/" +Imei);

(async () => {
  try {
    await onValue(refMachine, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        console.log("không có liệu");
        // navigation.replace("Error");
      } else {
        console.log(data.info)
      }
    });
  } catch (err) {
    console.log(err);
  }
})();

export const machineSlice = createSlice({
  name: "machine",
  initialState: {
    info: {
      imei: "4891426996145",
      sim: "0904025252",
      status: "Bình thường",
      name: "ATM - 1208323582",
      typeDevice: "Thiết bị cảnh báo dành cho máy ATM",
      address: "86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP.HCM",
      activationDate: "12/06/2021 16:00:00",
      powerConnection: "PIN dự phòng",
      queryTime: "16:20:00 22/06/2021",
    },
    sensorStatus: {
      temperature: "Cao",
      vibration: "Bình thường",
      aboveDoor: "Bật",
      outsideDoor: "Bật",
      safeDoor: "Bật",
      backup: "Tắt",
      move: "Tắt",
      leak: "Tắt",
      smoke: "Bật",
      battery: "Bật",
      energy: "90 - 265 ± 5% VAC/50/60hz",
      warning: "Còi hụ",
    },
  },
  reducers: {
    increment: (state) => {
      // state.imei += 1;
    },
    // decrement: (state) => {
    //     state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    // },
  },
});

export const { increment } = machineSlice.actions;

export default machineSlice.reducer;
