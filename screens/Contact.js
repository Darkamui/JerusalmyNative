import React from "react";
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

import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";
export default function Contact({ navigation }) {
	const [text, onChangeText] = React.useState("");
	const [name, onChangeName] = React.useState("");

	const [email, onChangeEmail] = React.useState("");
	const createTwoButtonAlert = () =>
		Alert.alert("Merci!", "Message envoyé.", [{ text: "OK" }]);
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				paddingTop: 20,
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
						Par courrier:
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
						Par courriel:
					</Text>
					<Text>david.reinharc@gmail.com</Text>
				</View>
				<TitleBar title="Raphaël Jerusalmy" />

				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<CustomInput value={name} onchange={onChangeName} holder="Nom" />

					<CustomInput
						value={email}
						onchange={onChangeEmail}
						holder="Courriel"
					/>
					<CustomInput
						value={text}
						onchange={onChangeText}
						holder="Message"
						msg={true}
					/>
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
						<Button title="Envoyer" onPress={createTwoButtonAlert} />
					</View>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}

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

const CustomInput = ({ value, onchange, holder, msg }) => (
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
			onChangeText={onchange}
			value={value}
			style={{ paddingLeft: 10 }}
		/>
	</View>
);
