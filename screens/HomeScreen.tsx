import * as React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.titleText}>
                    Thông tin ATM
                </Text>
                <View style={styles.infoATMView}>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            IMEI:
                        </Text>
                        <Text style={styles.infoATMText}>
                            4891426996145
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            SIM:
                        </Text>
                        <Text style={styles.infoATMText}>
                            Unknown
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Tình trạng thiết bị:
                        </Text>
                        <Text style={styles.infoATMText}>
                            Bình thường
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Loại thiết bị:
                        </Text>
                        <Text style={styles.infoATMText}>
                            Thiết bị cảnh báo dành cho máy ATM
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Tên thiết bị:
                        </Text>
                        <Text style={styles.infoATMText}>
                            ATM - 1208323582
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Địa chỉ lắp đặt:
                        </Text>
                        <Text style={styles.infoATMText}>
                            86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP.HCM
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Ngày kích hoạt:
                        </Text>
                        <Text style={styles.infoATMText}>
                            12/06/2021 16:00:00
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={styles.titleInfoATMText}>
                            Kết nối nguồn:
                        </Text>
                        <Text style={styles.infoATMText}>
                            PIN dự phòng
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Text style={[styles.titleInfoATMText,styles.enable]}>
                            Thời gian truy vấn:
                        </Text>
                        <Text style={[styles.infoATMText, styles.enable]}>
                            16:20:00 22/06/2021
                        </Text>
                    </View>
                </View>

                <Text style={styles.titleText}>
                    Trạng thái cảm biến
                </Text>
                <View style={styles.infoATMView}>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/temperatureIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Nhiệt ({'>'}36.5):
                        </Text>
                        <Text style={styles.statusATMText}>
                            Cao
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/vibrateIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Rung ({'>'}1700):
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bình thường
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/aboveDoorIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Cửa trên máy ATM:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bật
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/outsideDoorIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Cửa ngoài máy ATM:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bật
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/safeDoorIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Cửa két máy ATM:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bật
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/backupIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Dự phòng:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Tắt
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/moveIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Dịch chuyển:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Tắt
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/leakIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Rò điện:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Tắt
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/smokeIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Khói:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bật
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/batteryIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Pin dự phòng:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Bật
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/energyIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Điện áp nguồn AC:
                        </Text>
                        <Text style={styles.statusATMText}>
                            90 – 265 ± 5% VAC/50/60hz
                        </Text>
                    </View>
                    <View style={styles.infoATMItemView}>
                        <Image style={styles.iconStatus} source={require('../assets/images/warningIcon.png')} />
                        <Text style={styles.titleInfoATMText}>
                            Báo hiệu:
                        </Text>
                        <Text style={styles.statusATMText}>
                            Còi hụ
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonsView}>
                    <Pressable style={styles.turnOffNotifButton} onPress={() => navigation.replace('Login')}>
                        <Text style={styles.turnOffNotifButtonText}>Tắt cảnh báo</Text>
                    </Pressable>
                    <Pressable style={styles.updateButton} onPress={() => navigation.replace('Login')}>
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
        // alignItems: 'center',
        backgroundColor: '#edf3fe'
    },

    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 26,
    },

    scrollView: {
        backgroundColor: '#edf3fe',
        // flex: 1,
    },

    titleText: {
        width: '100%',
        // textAlign: 'center',
        marginTop: 24,
        fontFamily: 'MulishBold',
        fontSize: 16,
        color: '#374a60'
    },

    infoATMView: {
        width: '100%',
        marginTop: 12,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderRadius: 8,
        backgroundColor: 'white',
    },

    infoATMItemView: {
        marginBottom: 16,
        // backgroundColor: 'red',
        alignItems: 'center',
        flex: 1,
        flexDirection: "row",
    },

    titleInfoATMText: {
        width: '100%',
        fontFamily: 'MulishBold',
        textAlignVertical: 'center',
        fontSize: 16,
        color: '#416e87',
        flex: 1,
        // backgroundColor: 'green'
    },

    infoATMText: {
        width: '100%',
        fontFamily: 'Mulish',
        textAlignVertical: 'center',
        fontSize: 16,
        color: '#848f9d',
        flex: 1.22,
        // backgroundColor: 'black'
    },

    enable: { color:'#347AFF'},

    iconStatus: {
        marginRight: 12,
    },

    statusATMText: {
        width: '100%',
        fontFamily: 'Mulish',
        textAlignVertical: 'center',
        textAlign: 'right',
        fontSize: 16,
        color: '#848f9d',
        flex: 0.7,
        // backgroundColor: 'black'
    },

    buttonsView: {
        marginTop: 25,
        marginBottom: 47,
        // backgroundColor: 'red',
        alignItems: 'center',
        flex: 1,
        flexDirection: "row",
    },

    turnOffNotifButton: {
        width: '100%',
        borderRadius: 8,
        flex: 1,
        marginRight: 22,
        borderColor: '#FF5B5B',
        borderWidth: 1,
        alignItems: 'center',
    },

    updateButton: {
        width: '100%',
        borderRadius: 8,
        flex: 1,
        // marginRight: 10,
        backgroundColor: '#2190CD',
        alignItems: 'center',
    },

    turnOffNotifButtonText: {
        fontSize: 16,
        fontFamily: 'MulishExtraBold',
        color: '#FF5B5B',
        padding: 12,
    },

    updateButtonText: {
        fontSize: 16,
        fontFamily: 'MulishExtraBold',
        color: 'white',
        padding: 12,
    },

});
