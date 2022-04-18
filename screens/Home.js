import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Linking,
} from "react-native";
import "../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";

// Page d'accueil
// Affichage texte, image et bouton vers pdf

const styles = StyleSheet.create({
	actionBtn: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		fontSize: 13,
		marginTop: 20,
		backgroundColor: "blue",
		color: "#fff",
		textTransform: "uppercase",
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
		marginBottom: 20,
	},
});

export default function Home({ navigation, route }) {
	var homeImage = require("../assets/home.png");
	var manuelImage = require("../assets/bleu.png");
	const { t, i18n } = useTranslation();
	// Applique la langue voulue dépendamment de choix fait au premier écran
	React.useEffect(() => {
		changeLanguage(route.params.value);
	}, []);
	// Variable d'état pour la langue
	const [currentLanguage, setLanguage] = useState("en");
	// Fonction pour changer la langue (celle dans le useEffect)
	const changeLanguage = (value) => {
		i18n
			.changeLanguage(value)
			.then(() => setLanguage(value))
			.catch((err) => console.log(err));
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: 25,
			}}
		>
			<ScrollView style={{ padding: 0 }}>
				<HeaderImage image={homeImage} />

				<HeaderText title="Raphaël Jerusalmy" subtitle={t("romancier")} />
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Text
						style={{
							paddingHorizontal: 30,
							fontSize: 18,
							lineHeight: 35,
							marginBottom: 0,
						}}
					>
						{t("topHomeText")}
					</Text>
					<Image
						source={manuelImage}
						style={{
							resizeMode: "contain",
							borderRadius: 5,
							marginVertical: 15,
							width: 200,
							height: 300,
						}}
					/>
					<Text
						style={{
							fontWeight: "bold",
							textAlign: "justify",
							paddingHorizontal: 30,
							fontSize: 18,
							lineHeight: 35,
						}}
					>
						{t("botHomeText")}
					</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						paddingHorizontal: 30,
						paddingVertical: 10,
					}}
				>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
							flex: 1,
						}}
					>
						<Text
							style={styles.actionBtn}
							title=""
							onPress={() =>
								currentLanguage == "en"
									? Linking.openURL(
											"https://drive.google.com/file/d/1tNVY6HE4ID1_U0SxJ4fLvXrQ1YpI92oQ/view?usp=sharing"
									  ).catch((err) => console.error("An error occurred", err))
									: Linking.openURL(
											"https://drive.google.com/file/d/1_CY4_-iDRYaDP0F0EnJkK0e78UVI5Cq9/view?usp=sharing"
									  ).catch((err) => console.error("An error occurred", err))
							}
						>
							{t("download")}
						</Text>
					</View>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
