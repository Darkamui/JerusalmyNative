import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { t } from "i18next";
// Composante de Navigation
// Icon applique le même style à chaque item tout en utilisant des données dynamiques
// Recoit navigation à partir de Home qui l'a recu de lors du load initial
//
//
//
const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		justifyContent: "center",
		bottom: 10,
		backgroundColor: "rgba(177, 236, 255, 0.9)",
		opacity: 0.8,
		padding: 10,
		borderRadius: 20,
		paddingHorizontal: 20,
	},
	font: {
		marginBottom: 3,
		marginTop: 3,
		alignSelf: "center",
		paddingHorizontal: 20,
		marginHorizontal: 7,
	},
	text: {
		textAlign: "center",
		textTransform: "uppercase",
	},
});

const Icon = ({ icon, text, link, navigation }) => (
	<TouchableOpacity onPress={() => navigation.navigate(link)}>
		<View>
			<FontAwesome5 name={icon} size={25} style={styles.font} />
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableOpacity>
);

export default function BottomTabs({ navigation }) {
	return (
		<View style={styles.nav}>
			<Icon
				icon="landmark"
				text={t("accueil")}
				link="Home"
				navigation={navigation}
			/>
			<Icon
				icon="user"
				text={t("biographie")}
				link="Biographie"
				navigation={navigation}
			/>
			<Icon
				icon="book-open"
				text={t("oeuvres")}
				link="Books"
				navigation={navigation}
			/>

			<Icon
				icon="address-card"
				text="contact"
				link="Contact"
				navigation={navigation}
			/>
		</View>
	);
}
