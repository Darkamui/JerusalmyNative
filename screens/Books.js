// IMPORTATION COMPOSANTES, FONTS, HOOKS, ETC.
import React from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";
import { useTranslation } from "react-i18next";
import BooksData from "../assets/i18n/BooksData";
// Page pour afficher toutes les oeuvres de l'auteur
// Onclick vers page détaillé avec variable contenant les données de l'oeuvre

export default function Books({ navigation }) {
	const { t } = useTranslation();

	return (
		<SafeAreaView style={styles.safe}>
			<HeaderText title="Raphaël Jerusalmy" subtitle={t("oeuvres")} />
			<ScrollView>
				<View style={styles.listContain}>
					{/* Loop pour afficher chaque oeuvre */}
					{BooksData.map((book, index) => (
						<TouchableOpacity
							key={index}
							style={styles.bookTouch}
							onPress={() => navigation.navigate("Book", { book: book })}
						>
							<Image source={book.image} style={styles.bookImg} />
							<Text style={styles.bookTitle}>{book.title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
// STYLES CSS
const styles = StyleSheet.create({
	safe: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	listContain: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
	},
	bookTouch: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: 300,
		width: 180,
		marginTop: 45,
		marginHorizontal: 5,
		padding: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.75,
		shadowRadius: 3.84,
		elevation: 5,
	},
	bookImg: {
		height: "100%",
		width: "100%",
		resizeMode: "stretch",
		borderRadius: 8,
	},
	bookTitle: {
		marginTop: 10,
		textTransform: "capitalize",
		fontSize: 11,
		fontWeight: "700",
		margin: "auto",
		textAlign: "center",
	},
});
