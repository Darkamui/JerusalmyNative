import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";

// Composante pour titre d'en-tête
// Recoit le titre et soustitre voulu

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		marginVertical: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		textTransform: "uppercase",
	},
	subtitle: {
		marginTop: 10,
		fontWeight: "300",
		fontSize: 15,
		fontStyle: "italic",
		textTransform: "uppercase",
	},
});
export default function HeaderText({ title, subtitle }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Divider
				width={1.5}
				orientation="vertical"
				style={{ marginHorizontal: 30, marginTop: 15 }}
				color="#000"
			/>
		</View>
	);
}
