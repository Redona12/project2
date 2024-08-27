import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Camera, CameraView } from "expo-camera";

const QRCode = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('QR code', `Barkodi me llojin ${type} dhe të dhënat ${data} është skanuar!`);
  };

  if (hasPermission === null) {
    return <Text>Duke kërkuar leje për kamerën</Text>;
  }
  if (hasPermission === false) {
    return <Text>Nuk ka qasje në kamera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Kliko për skanim prap"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
