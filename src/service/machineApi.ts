import database from "../../database/RealTimeDatabase";
import { onValue, ref } from "firebase/database";

const db = database;



// interface returnTypeFromDB{
//     data:'',
//     id:string,
// }
// type dispatchType = (value:{type:string, payload?:{}}) => void;
// type getStateType = () => returnTypeFromDB;

// export const fetchAPI = async (dispatch: dispatchType, getState: getStateType) => {
//   const payload = getState();
//   try {
//     // const docRef = doc(db, "users", payload.id);

//     let Imei = 4891426996145;
//     const refMachine = ref(db, "machine/" + Imei);

//     // const noodleSnapshot = await getDoc(docRef);

//     const machineSnapshot = await onValue(refMachine, (snapshot) => {
//       const data = snapshot.val();
//       if (data === null) {
//         console.log("không có liệu");
//       } else {
//         console.log(data.info);
//       }
//     });
//     dispatch({
//       type: "machine/getInfo",
//       payload: machineSnapshot,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export function machineApi(/*amount = 1*/) {
  let Imei = 4891426996145;
  const refMachine = ref(db, "machine/" + Imei);
  return async () => {
    try {
      await onValue(refMachine, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          console.log("không có liệu");
          // navigation.replace("Error");
        } else {
          console.log(data.info);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Machine } from "../model/machine";

// const machineApi = {
//   getIt: () => {
//     return new Promise((resolve, reject) => {});
//   },
// };

// export const machineApi = createApi({
//   reducerPath: "machineApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl:
//       "https://atmalertsystem-altamedia-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   }),
//   endpoints: (builder) => ({
//     getMachine: builder.query<Machine[], void>({
//       query: () => "machine",
//     }),
//   }),
// });

// export const {useGetMachineQuery} = machineApi;
