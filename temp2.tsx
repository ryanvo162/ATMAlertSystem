import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "./src/app/hooks";
import { fetchMachineById } from "./src/app/machine";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAPI } from "./src/service/machineApi";
// import { useGetMachineQuery } from "./src/service/machineApi";

export default function App1() {
  // const { data, error, isLoading, isFetching, isSuccess } =
  //   useGetMachineQuery();

  const { info, sensorStatus } = useAppSelector((state) => state.machine);
   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMachineById)
    console.log(123)
  }, []);

  return (
    <View style={styles.container}>
      {/* {isLoading && <Text>..loading</Text>}
      {isFetching && <Text>..fetching</Text>}
      {error && <Text>Something wrong</Text>}
      {isSuccess && <Text>..success</Text>} */}
      <Text>{info.sim}</Text>
      <Text onPress={() => dispatch(fetchMachineById)}>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
