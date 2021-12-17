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

// import database from "../database/RealTimeDatabase";
import { useAppSelector } from "../src/app/hooks";

export default function EditScreen({ navigation }: { navigation: any }) {
  const { info, sensorStatus } = useAppSelector((state) => state.machine);
  const [isFocused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
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
        </View>

        <Text style={styles.titleText}>Cài đặt số điện thoại</Text>
        <View style={styles.infoATMView}>
          <View style={styles.infoPhoneATMView}>
            <Text style={styles.titleInfoPhoneATMText}>
              Số điện thoại khẩn cấp
            </Text>
            <Text style={styles.infoPhoneATMText}>{info.sim}</Text>
          </View>
        </View>
        <View style={styles.infoATMView}>
          <View style={styles.infoPhoneATMView}>
            <Text style={styles.titleInfoPhoneATMText}>
              Số điện thoại nhận cuộc gọi
            </Text>
            <Text style={styles.infoPhoneATMText}>{info.sim}</Text>
          </View>
        </View>
        <View style={styles.infoATMView}>
          <View style={styles.infoPhoneATMView}>
            <Text style={styles.titleInfoPhoneATMText}>
              Số điện thoại nhận cuộc gọi
            </Text>
            <Text style={styles.infoPhoneATMText}>{info.sim}</Text>
          </View>
        </View>

        <Text style={styles.titleText}>Cài đặt ngưỡng cảnh báo</Text>
        <View style={styles.infoWarningATMView}>
          <View style={styles.infoWarningATMItemView}>
            <Text style={styles.titleInfoWarningATMText}>
              Ngưỡng cảnh báo rung:
            </Text>
            <TextInput
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={[
                styles.input,
                isFocused && { borderWidth: 1, borderColor: "#347AFF" },
              ]}
              placeholder="Nhập IMEI / Seri number"
              placeholderTextColor="#a5b5c9"
              selectionColor="#595959"
              keyboardType="number-pad"
              // onChangeText={onChangeText}
              value={sensorStatus.move}
            />
          </View>
          <View style={styles.infoWarningATMItemView}>
            <Text style={styles.titleInfoWarningATMText}>
              Ngưỡng cảnh báo rò điện (dòng):
            </Text>
            <TextInput
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={[
                styles.input,
                isFocused && { borderWidth: 1, borderColor: "#347AFF" },
              ]}
              placeholder="Nhập IMEI / Seri number"
              placeholderTextColor="#a5b5c9"
              selectionColor="#595959"
              keyboardType="number-pad"
              // onChangeText={onChangeText}
              value={sensorStatus.move}
            />
          </View>
          <View style={styles.infoWarningATMItemView}>
            <Text style={styles.titleInfoWarningATMText}>
              Ngưỡng cảnh báo khói (mật độ):
            </Text>
            <TextInput
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={[
                styles.input,
                isFocused && { borderWidth: 1, borderColor: "#347AFF" },
              ]}
              placeholder="Nhập IMEI / Seri number"
              placeholderTextColor="#a5b5c9"
              selectionColor="#595959"
              keyboardType="number-pad"
              // onChangeText={onChangeText}
              value={sensorStatus.move}
            />
          </View>
          <View style={styles.infoWarningATMItemView}>
            <Text style={styles.titleInfoWarningATMText}>
              Ngưỡng cảnh báo nhiệt độ (độ C):
            </Text>
            <TextInput
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={[
                styles.input,
                isFocused && { borderWidth: 1, borderColor: "#347AFF" },
              ]}
              placeholder="Nhập IMEI / Seri number"
              placeholderTextColor="#a5b5c9"
              selectionColor="#595959"
              keyboardType="number-pad"
              // onChangeText={onChangeText}
              value={sensorStatus.move}
            />
          </View>
          <View style={styles.infoWarningATMItemView}>
            <Text style={styles.titleInfoWarningATMText}>
              Cảnh báo PIN (%):
            </Text>
            <TextInput
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              style={[
                styles.input,
                isFocused && { borderWidth: 1, borderColor: "#347AFF" },
              ]}
              placeholder="Nhập IMEI / Seri number"
              placeholderTextColor="#a5b5c9"
              selectionColor="#595959"
              keyboardType="number-pad"
              // onChangeText={onChangeText}
              value={sensorStatus.move}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  goToEdit: {
    color: "#2190CD",
    fontFamily: "MulishBold",
    fontSize: 16,
    paddingHorizontal: 15.5,
    paddingVertical: 12,
  },

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
    marginTop: 16,
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

  infoPhoneATMView: {
    marginBottom: 16,
    // backgroundColor: "red",
    alignItems: "center",
    flex: 1,
  },

  titleInfoPhoneATMText: {
    width: "100%",
    fontFamily: "MulishBold",
    textAlignVertical: "center",
    fontSize: 14,
    color: "#416e87",
    // backgroundColor: "green",
  },

  infoPhoneATMText: {
    width: "100%",
    fontFamily: "Mulish",
    marginTop: 16,
    textAlignVertical: "center",
    fontSize: 16,
    color: "#848f9d",
  },

  infoWarningATMView: {
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
  },

  infoWarningATMItemView: {
    marginBottom: 16,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },

  titleInfoWarningATMText: {
    width: "100%",
    fontFamily: "Mulish",
    textAlignVertical: "center",
    fontSize: 14,
    color: "#416e87",
    flex: 1,
  },

  input: {
    // marginTop: 8,
    fontFamily: "Mulish",
    fontSize: 14,
    textAlign: "right",
    textAlignVertical: "center",
    height: 44,
    backgroundColor: "white",
    borderRadius: 8,
    paddingRight: 16,
    color: "#091F3A",
    flex: 0.4,
  },
});
