import { onValue, ref } from "firebase/database";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import database from "../database/RealTimeDatabase";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import { getInfo } from "../src/app/machineSlice";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { info, sensorStatus } = useAppSelector((state) => state.machine);
  const dispatch = useAppDispatch();

  // dispatch(getInfo())

  const [modalVisible, setModalVisible] = useState(false);

  const db = database;

  const refMachine = ref(db, "machine");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="setting"
          size={22}
          color="#2190CD"
          onPress={() => navigation.navigate("Setting")}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.infoATMViewModal}>
                <View style={styles.infoATMItemViewModal}>
                  <Text style={styles.titleInfoATMText}>IMEI:</Text>
                  <Text style={styles.infoATMText}>{info.imei}</Text>
                </View>
                <View style={styles.infoATMItemViewModal}>
                  <Text style={styles.titleInfoATMText}>Loại thiết bị:</Text>
                  <Text style={styles.infoATMText}>{info.typeDevice}</Text>
                </View>
                <View style={styles.infoATMItemViewModal}>
                  <Text style={styles.titleInfoATMText}>Ngày kích hoạt:</Text>
                  <Text style={styles.infoATMText}>{info.activationDate}</Text>
                </View>
              </View>
              <Text style={[styles.titleText, styles.marginTop16]}>
                Tên thiết bị:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập Tên thiết bị"
                placeholderTextColor="#a5b5c9"
                selectionColor="#595959"
                // onChangeText={onChangeText}
                value={info.name}
              />
              <Text style={[styles.titleText, styles.marginTop16]}>SIM:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập IMEI / Seri number"
                placeholderTextColor="#a5b5c9"
                selectionColor="#595959"
                // onChangeText={onChangeText}
                value={info.sim}
              />
              <Text style={[styles.titleText, styles.marginTop16]}>
                Địa chỉ lắp đặt:
              </Text>
              <TextInput
                style={[styles.input, styles.inputAddress]}
                placeholder="Nhập IMEI / Seri number"
                multiline
                placeholderTextColor="#a5b5c9"
                selectionColor="#595959"
                // onChangeText={onChangeText}
                value={info.address}
              />
              <View style={styles.buttonsViewModal}>
                <Pressable
                  style={[styles.turnOffNotifButton, styles.blueButtonOutline]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={[
                      styles.turnOffNotifButtonText,
                      styles.blueButtonOutlineText,
                    ]}
                  >
                    Hủy
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.updateButton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.updateButtonText}>Lưu</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.titleText}>Thông tin ATM</Text>
        <View style={styles.infoATMView}>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>IMEI:</Text>
            <Text style={styles.infoATMText}>{info.imei}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>SIM:</Text>
            <Text style={styles.infoATMText}>{info.sim}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Tình trạng thiết bị:</Text>
            <Text style={styles.infoATMText}>{info.status}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Loại thiết bị:</Text>
            <Text style={styles.infoATMText}>{info.typeDevice}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Tên thiết bị:</Text>
            <Text style={styles.infoATMText}>{info.name}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Địa chỉ lắp đặt:</Text>
            <Text style={styles.infoATMText}>{info.address}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Ngày kích hoạt:</Text>
            <Text style={styles.infoATMText}>{info.activationDate}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={styles.titleInfoATMText}>Kết nối nguồn:</Text>
            <Text style={styles.infoATMText}>{info.powerConnection}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Text style={[styles.titleInfoATMText, styles.enable]}>
              Thời gian truy vấn:
            </Text>
            <Text style={[styles.infoATMText, styles.enable]}>
              {info.queryTime}
            </Text>
          </View>
        </View>

        <Text style={styles.titleText}>Trạng thái cảm biến</Text>
        <View style={styles.infoATMView}>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/temperatureIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Nhiệt ({">"}36.5):</Text>
            <Text style={styles.statusATMText}>{sensorStatus.temperature}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/vibrateIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Rung ({">"}1700):</Text>
            <Text style={styles.statusATMText}>{sensorStatus.vibration}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/aboveDoorIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Cửa trên máy ATM:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.aboveDoor}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/outsideDoorIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Cửa ngoài máy ATM:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.outsideDoor}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/safeDoorIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Cửa két máy ATM:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.safeDoor}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/backupIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Dự phòng:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.backup}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/moveIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Dịch chuyển:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.move}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/leakIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Rò điện:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.leak}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/smokeIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Khói:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.smoke}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/batteryIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Pin dự phòng:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.battery}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/energyIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Điện áp nguồn AC:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.energy}</Text>
          </View>
          <View style={styles.infoATMItemView}>
            <Image
              style={styles.iconStatus}
              source={require("../assets/images/warningIcon.png")}
            />
            <Text style={styles.titleInfoATMText}>Báo hiệu:</Text>
            <Text style={styles.statusATMText}>{sensorStatus.warning}</Text>
          </View>
        </View>

        <View style={styles.buttonsView}>
          <Pressable
            style={styles.turnOffNotifButton}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.turnOffNotifButtonText}>Tắt cảnh báo</Text>
          </Pressable>
          <Pressable
            style={styles.updateButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.updateButtonText}>Cập nhật</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf3fe",
  },

  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 26,
  },

  scrollView: {
    backgroundColor: "#edf3fe",
    // flex: 1,
  },

  titleText: {
    width: "100%",
    // textAlign: 'center',
    marginTop: 24,
    fontFamily: "MulishBold",
    fontSize: 16,
    color: "#374a60",
  },

  infoATMView: {
    width: "100%",
    marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 8,
    backgroundColor: "white",
  },

  infoATMItemView: {
    marginBottom: 16,
    // backgroundColor: "red",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },

  titleInfoATMText: {
    width: "100%",
    fontFamily: "MulishBold",
    textAlignVertical: "center",
    fontSize: 16,
    color: "#416e87",
    flex: 1,
    // backgroundColor: "green",
  },

  infoATMText: {
    width: "100%",
    fontFamily: "Mulish",
    textAlignVertical: "center",
    fontSize: 16,
    color: "#848f9d",
    flex: 1.22,
    // backgroundColor: 'black'
  },

  enable: { color: "#347AFF" },

  iconStatus: {
    marginRight: 12,
  },

  statusATMText: {
    width: "100%",
    fontFamily: "Mulish",
    textAlignVertical: "center",
    textAlign: "right",
    fontSize: 16,
    color: "#848f9d",
    flex: 0.7,
    // backgroundColor: 'black'
  },

  buttonsView: {
    marginTop: 25,
    marginBottom: 47,
    // backgroundColor: 'red',
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },

  turnOffNotifButton: {
    width: "100%",
    borderRadius: 8,
    flex: 1,
    marginRight: 22,
    borderColor: "#FF5B5B",
    borderWidth: 1,
    alignItems: "center",
  },

  updateButton: {
    width: "100%",
    borderRadius: 8,
    flex: 1,
    // marginRight: 10,
    backgroundColor: "#2190CD",
    alignItems: "center",
  },

  turnOffNotifButtonText: {
    fontSize: 16,
    fontFamily: "MulishExtraBold",
    color: "#FF5B5B",
    padding: 12,
  },

  updateButtonText: {
    fontSize: 16,
    fontFamily: "MulishExtraBold",
    color: "white",
    padding: 12,
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 26,
  },

  infoATMViewModal: {
    width: "100%",
    // marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 8,
    backgroundColor: "#EAF5FA",
    alignItems: "center",
    borderColor: "#ACD5EC",
    borderWidth: 1,
  },
  infoATMItemViewModal: {
    marginBottom: 16,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonsViewModal: {
    marginTop: 25,
    marginBottom: 24,
    alignItems: "center",
    // flex: 1,
    flexDirection: "row",
  },

  blueButtonOutline: {
    borderColor: "#2190CD",
  },
  blueButtonOutlineText: {
    color: "#2190CD",
  },
  marginTop16: {
    marginTop: 16,
  },
  input: {
    marginTop: 8,
    fontFamily: "Mulish",
    fontSize: 16,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    color: "#091F3A",
    borderColor: "#ACBCD1",
    borderWidth: 1,
  },
  inputAddress: {
    height: 120,
    textAlignVertical: "top",
    lineHeight: 24,
  },
});
