// IMPORTATION COMPOSANTES, FONTS, ETC.
import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import {
	useFonts,
	DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import AppLoading from "expo-app-loading";
import CountryFlag from "react-native-country-flag";

// Écran premier de l'application
// Choix entre anglais et français et transfert du choix au prochain écran

export default function Language({ navigation }) {
	var langImage = require("../assets/bio2.jpg");
	let [fontsLoaded] = useFonts({
		DancingScript_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.imgContain}>
				<Image source={langImage} style={styles.img} />
			</View>
			<Text style={styles.titleTxt}>Raphaël Jerusalmy</Text>
			<View>
				{/* Au clic envoie vers la page home avec la valeur en ou fr dépendamment du choix */}
				<View
					style={styles.btnContain}
					onStartShouldSetResponder={() =>
						navigation.navigate("Home", {
							value: "fr",
						})
					}
				>
					<CountryFlag isoCode="fr" size={25} style={{ marginRight: 15 }} />
					<Text style={styles.btnTxt}>français</Text>
				</View>

				<View
					style={styles.btnContain}
					onStartShouldSetResponder={() =>
						navigation.navigate("Home", {
							value: "en",
						})
					}
				>
					<CountryFlag isoCode="gb" size={25} style={{ marginRight: 15 }} />
					<Text style={styles.btnTxt}>Anglais</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

// STYLES CSS
const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imgContain: {
		width: 200,
		height: 200,
		marginBottom: 15,
	},
	img: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
		borderRadius: 100,
	},
	titleTxt: {
		fontFamily: "DancingScript_700Bold",
		fontSize: 30,
		color: "black",
		textAlign: "center",
	},
	btnContain: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginTop: 20,
		backgroundColor: "white",

		borderRadius: 15,

		marginHorizontal: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.95,
		shadowRadius: 5.84,
		elevation: 5,
	},
	btnTxt: {
		color: "black",
		fontSize: 13,
		fontWeight: "500",
		textTransform: "capitalize",
		textAlign: "center",
	},
});
