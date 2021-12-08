import * as React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>

            <Image style={styles.qrScan} source={require('../assets/images/qrscan.png')} />

            <Text style={styles.scanText}>Di chuyển camera đến vùng chứa mã QR để quét</Text>
            <Text style={styles.orText}>Hoặc</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập IMEI / Seri number"
                placeholderTextColor='#a5b5c9'
                selectionColor="#595959"
            // onChangeText={onChangeText}
            // value={text}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor='#a5b5c9'
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Loại thiết bị"
                secureTextEntry={true}
                selectionColor="#595959"
            />

            <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.searchButtonText}>Tra cứu</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#edf3fe'
    },

    qrScan: {
        marginTop:33,
    },

    scanText: {
        width: '100%',
        textAlign: 'center',
        marginTop: 8,
        fontFamily: 'Mulish',
        fontSize: 14,
        color: '#7b899c'
    },

    orText: {
        width: '100%',
        textAlign: 'center',
        marginTop: 14,
        marginBottom: 8,
        fontFamily: 'Mulish',
        fontSize: 14,
        color: '#091f3a'
    },

    input: {
        fontFamily: 'Mulish',
        fontSize: 16,
        width: '85%',
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        color: '#595959'
    },

    searchButton: {
        width: '85%',
        marginTop: 24,
        borderRadius: 8,
        backgroundColor: '#2190CD',
        alignItems: 'center',
    },

    searchButtonText: {
        fontSize: 16,
        fontFamily: 'MulishExtraBold',
        color: 'white',
        padding: 12,
    }

});
