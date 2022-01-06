import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import database from "../../database/RealTimeDatabase";

export interface MachineState {
  imei: number;
  info: {
    sim: string;
    status: string;
    name: string;
    typeDevice: string;
    address: string;
    activationDate: string;
    powerConnection: string;
    queryTime: string;
  };
  sensorStatus: {
    temperature: string;
    vibration: string;
    aboveDoor: boolean;
    outsideDoor: boolean;
    safeDoor: boolean;
    backup: boolean;
    move: boolean;
    leak: boolean;
    smoke: boolean;
    battery: boolean;
    energy: string;
    warning: string;
  };
}

const initialState: MachineState = {
  imei: 4891426996145,
  info: {
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
    aboveDoor: true,
    outsideDoor: true,
    safeDoor: true,
    backup: false,
    move: false,
    leak: false,
    smoke: true,
    battery: true,
    energy: "90 - 265 ± 5% VAC/50/60hz",
    warning: "Còi hụ",
  },
};

const db = database;
let Imei = 4891426996145;
const refMachine = ref(db, "machine/" + Imei);

export const fetchMachineById = createAsyncThunk("machine/fetch", async () => {
  console.log("vô đây rồi nè");
  try {
    await onValue(refMachine, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        console.log("Không có dữ liệu");
        // navigation.replace("Error");
      } else {
        console.log(data);
      }
      return data;
    });
  } catch (err) {
    console.log(err);
  }
});

export const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMachineById.fulfilled, (state, action) => {
        console.log("Kết nối thành công");
        // state.info.sim = action.payload.sim;
        // state.email = action.payload.email;
        // state.authenticated = true;
      })
      .addCase(fetchMachineById.rejected, (state, action) => {
        console.log("Không kết nối");
      });
  },
});

export default machineSlice.reducer;
