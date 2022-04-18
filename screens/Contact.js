import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	Alert,
	Button,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../components/BottomNav";

// Écran pour message contact
// Alerte lors de l'envoie d'un message (le message n'est pas vraiment envoyé)

const TitleBar = ({ title }) => (
	<View style={{ padding: 20 }}>
		<Text
			style={{
				fontWeight: "bold",
				fontSize: 20,
				textTransform: "capitalize",
				textAlign: "left",
			}}
		>
			{title}
		</Text>
		<Divider
			width={1.5}
			orientation="vertical"
			style={{ marginTop: 10 }}
			color="#000"
		/>
	</View>
);

const CustomInput = ({ onchange, holder, msg }) => (
	<View
		style={{
			backgroundColor: "#E0FFF0",
			width: "65%",
			paddingVertical: 5,
			borderRadius: 5,
			marginVertical: 10,
			justifyContent: "flex-start",
			alignItems: "flex-start",
			height: msg && 200,
		}}
	>
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
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				// paddingTop: 20,
			}}
		>
			<ScrollView>
				<TitleBar title="Manuel Bleu" />
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						paddingHorizontal: 20,
					}}
				>
					<Text style={{ fontWeight: "bold", fontSize: 15 }}>
						{t("byMail")}
					</Text>
					<Text>
						David Reinharc éditions, 19 rue de Miromesnil, 75008 - Paris
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						paddingHorizontal: 20,
					}}
				>
					<Text style={{ fontWeight: "bold", fontSize: 15, marginRight: 5 }}>
						{t("byEmail")}
					</Text>
					<Text>david.reinharc@gmail.com</Text>
				</View>
				<TitleBar title="Raphaël Jerusalmy" />

				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<CustomInput onchange={onChangeName} holder={name} />

					<CustomInput onchange={onChangeEmail} holder={email} />
					<CustomInput onchange={onChangeText} holder={text} msg={true} />
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "#7CFFC0",
							width: "65%",
							padding: 10,
							borderRadius: 10,
						}}
					>
						<Button
							color="#7CFFC0"
							title="Envoyer"
							onPress={createTwoButtonAlert}
						/>
					</View>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
