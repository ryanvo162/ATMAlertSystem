import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import database from "../../database/RealTimeDatabase";
import { Machine } from "../model/machine";
import { machineApi } from "../service/machineApi";

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

export const fetchMachineById = createAsyncThunk(
  "machine/fetch",
  async (machine: any) => {
    let Imei = 4891426996146;
    const refMachine = ref(db, "machine/" + Imei);
    try {
      await onValue(refMachine, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          console.log("không có liệu");
          // navigation.replace("Error");
        } else {
          machine = data;
          // console.log("Dữ liệu máy:",machine);
        }
      });
    } catch (err) {
      console.log(err);
    }
    return machine;
  }
);

export const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("Hello");
      state.info.name = "hello";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMachineById.fulfilled, (state, action) => {
        console.log("Lấy dữ liệu thành công");
        state.info.name = action.payload.info.name;
        state.info.sim = String(action.payload.info.sim);
        state.info.status = action.payload.info.status;
        state.info.typeDevice = action.payload.info.typeDevice;
        state.info.address = action.payload.info.address;
        state.info.activationDate = action.payload.info.activationDate;
        state.info.powerConnection = action.payload.info.powerConnection;
        state.info.queryTime = action.payload.info.queryTime;
        state.sensorStatus.temperature =
          action.payload.sensorStatus.temperature;
        state.sensorStatus.vibration = action.payload.sensorStatus.vibration;
        state.sensorStatus.aboveDoor = action.payload.sensorStatus.aboveDoor;
        state.sensorStatus.outsideDoor =
          action.payload.sensorStatus.outsideDoor;
        state.sensorStatus.safeDoor = action.payload.sensorStatus.safeDoor;
        state.sensorStatus.backup = action.payload.sensorStatus.backup;
        state.sensorStatus.move = action.payload.sensorStatus.move;
        state.sensorStatus.leak = action.payload.sensorStatus.leak;
        state.sensorStatus.smoke = action.payload.sensorStatus.smoke;
        state.sensorStatus.battery = action.payload.sensorStatus.battery;
        state.sensorStatus.energy = action.payload.sensorStatus.energy;
        state.sensorStatus.warning = action.payload.sensorStatus.warning;
      })
      .addCase(fetchMachineById.rejected, (state, action) => {
        console.log("Không kết nối");
      });
  },
});

export const { increment } = machineSlice.actions;

export default machineSlice.reducer;
