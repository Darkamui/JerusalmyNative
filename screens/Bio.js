// IMPORTATION COMPOSANTES, FONTS, HOOKS, ETC.
import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";

// Page pour la biographie de l'auteur

export default function Bio({ navigation }) {
	var bioImage = require("../assets/bio.png");
	const { t } = useTranslation();

	return (
		<SafeAreaView style={styles.safe}>
			<HeaderImage image={bioImage} />
			<ScrollView>
				<HeaderText title="raphaël jerusalmy" subtitle={t("biographie")} />
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Text style={styles.txt}>
						{t("bio")}
						{"\n"}
						{"\n"}
						{t("bio2")}
						{"\n"}
						{"\n"},{t("bio3")}
						{"\n"}
						{"\n"}
						{t("bio4")}
						{"\n"}
						{"\n"}
						{t("bio5")}
					</Text>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	txt: {
		paddingHorizontal: 30,
		fontSize: 15,
		lineHeight: 33,
		marginBottom: 10,
	},
});
