// IMPORTATION COMPOSANTES, FONTS, ETC.
import React from "react";
import { useTranslation } from "react-i18next";
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	Alert,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../components/BottomNav";

// Écran pour message contact
// Alerte lors de l'envoie d'un message

// Composante réutilisable pour affichage du titre
const TitleBar = ({ title }) => (
	<View style={{ padding: 20 }}>
		<Text style={styles.boldTxt}>{title}</Text>
		<Divider
			width={1.5}
			orientation="vertical"
			style={{ marginTop: 10 }}
			color="#000"
		/>
	</View>
);
// Composante réutilisable pour chaque input du formulaire
const CustomInput = ({ onchange, holder, msg }) => (
	<View style={msg ? styles.inputMsg : styles.input}>
		<TextInput
			placeholder={holder}
			onChangeText={(newText) => onchange(newText)}
			style={{ paddingLeft: 10 }}
		/>
	</View>
);

export default function Contact({ navigation }) {
	const { t } = useTranslation();
	const [text, onChangeText] = React.useState(t("msg"));
	const [name, onChangeName] = React.useState(t("nom"));
	const [email, onChangeEmail] = React.useState(t("courriel"));
	const createTwoButtonAlert = () => {
		Alert.alert("Merci!", "Message envoyé.", [{ text: "OK" }]);
	};

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView>
				<TitleBar title="Manuel Bleu" />
				<View style={styles.contactView}>
					<Text style={styles.contactTxt}>{t("byMail")}</Text>
					<Text>
						David Reinharc éditions, 19 rue de Miromesnil, 75008 - Paris
					</Text>
				</View>
				<View style={styles.contactView}>
					<Text style={styles.contactTxt}>{t("byEmail")}</Text>
					<Text>david.reinharc@gmail.com</Text>
				</View>
				<TitleBar title="Raphaël Jerusalmy" />
				<View style={styles.center}>
					<CustomInput onchange={onChangeName} holder={name} />
					<CustomInput onchange={onChangeEmail} holder={email} />
					<CustomInput onchange={onChangeText} holder={text} msg={true} />
					<TouchableOpacity
						style={styles.btnContain}
						onPress={createTwoButtonAlert}
					>
						<Text style={styles.btn}>{t("send")}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}

// STYLES CSS
const styles = StyleSheet.create({
	input: {
		backgroundColor: "#E0FFF0",
		width: "65%",
		paddingVertical: 5,
		borderRadius: 5,
		marginVertical: 10,
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	inputMsg: {
		backgroundColor: "#E0FFF0",
		width: "65%",
		paddingVertical: 5,
		borderRadius: 5,
		marginVertical: 10,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: 200,
	},
	boldTxt: {
		fontWeight: "bold",
		fontSize: 20,
		textTransform: "capitalize",
		textAlign: "left",
	},
	safe: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	contactView: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingHorizontal: 20,
	},
	contactTxt: {
		fontWeight: "bold",
		fontSize: 15,
		marginRight: 5,
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	btnContain: {
		backgroundColor: "#7CFFC0",
		width: "50%",
		padding: 10,
		borderRadius: 10,
	},
	btn: {
		textAlign: "center",
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
