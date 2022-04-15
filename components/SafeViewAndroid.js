import { StyleSheet, Platform, StatusBar } from "react-native";

export default function SafeViewAndroid() {
	StyleSheet.create({
		AndroidSafeArea: {
			flex: 1,
			backgroundColor: "white",
			paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		},
	});
	return <Image source={image} style={{ width: "100%", height: 180 }} />;
}
