// IMPORTATION COMPOSANTES, FONTS, ETC.
import React from "react";

import {
	View,
	Text,
	Image,
	SafeAreaView,
	StyleSheet,
	Animated,
} from "react-native";
import {
	useFonts,
	DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import AppLoading from "expo-app-loading";
import CountryFlag from "react-native-country-flag";

// Écran premier de l'application
// Choix entre anglais et français et transfert du choix au prochain écran

const styles = StyleSheet.create({
	actionBtn: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		fontSize: 13,
		marginTop: 20,
		backgroundColor: "white",
		color: "black",
		textTransform: "capitalize",
		borderRadius: 15,
		textAlign: "center",
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
});

export default function Language({ navigation }) {
	var langImage = require("../assets/bio2.jpg");
	let [fontsLoaded] = useFonts({
		DancingScript_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Animated.View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#ffffffcc",
			}}
		>
			<SafeAreaView
				style={{ flex: 1, justifyContent: "center", alignItem: "center" }}
			>
				<View
					style={{
						width: 200,
						height: 200,
						marginBottom: 15,
					}}
				>
					<Image
						source={langImage}
						style={{
							resizeMode: "contain",
							width: "100%",
							height: "100%",
							borderRadius: 100,
						}}
					/>
				</View>
				<Text
					style={{
						fontFamily: "DancingScript_700Bold",
						fontSize: 30,
						color: "black",
						textAlign: "center",
					}}
				>
					Raphaël Jerusalmy
				</Text>
				<View>
					<View
						style={{
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
						}}
						onStartShouldSetResponder={() =>
							navigation.navigate("Home", {
								value: "fr",
							})
						}
					>
						<CountryFlag isoCode="fr" size={25} style={{ marginRight: 15 }} />
						<Text
							style={{
								color: "black",
								fontSize: 13,
								fontWeight: "500",
								textTransform: "capitalize",
								textAlign: "center",
							}}
							title=""
						>
							français
						</Text>
					</View>

					<View
						style={{
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
						}}
						onStartShouldSetResponder={() =>
							navigation.navigate("Home", {
								value: "en",
							})
						}
					>
						<CountryFlag isoCode="gb" size={25} style={{ marginRight: 15 }} />
						<Text
							style={{
								color: "black",
								fontSize: 13,
								textTransform: "capitalize",
								textAlign: "center",
								fontWeight: "500",
							}}
							title=""
						>
							Anglais
						</Text>
					</View>
				</View>
			</SafeAreaView>
		</Animated.View>
	);
}
