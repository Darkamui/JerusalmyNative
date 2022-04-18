import React from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Linking,
} from "react-native";
import BottomNav from "../components/BottomNav";
import { Divider } from "react-native-elements";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

// Affichage détaillée d'une oeuvre

export default function Book({ navigation, route }) {
	var amazon = require("../assets/amazon.png");
	var fnac = require("../assets/fnac.png");
	var rakuten = require("../assets/rakuten.png");
	const { i18n } = useTranslation();
	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: 25,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<ScrollView style={{ marginBottom: 20 }}>
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Image
						source={route.params.book.image}
						style={{
							height: 350,
							width: 225,
							marginTop: 20,
							resizeMode: "stretch",
							borderRadius: 8,
						}}
					/>

					<Text
						style={{
							fontSize: 20,
							textAlign: "center",
							fontWeight: "bold",
							textTransform: "capitalize",
							marginTop: 20,
						}}
					>
						{route.params.book.title}
					</Text>
					<Text
						style={{
							fontSize: 15,
							textAlign: "center",
							fontWeight: "300",
							marginTop: 5,
							marginBottom: 15,
							textTransform: "capitalize",
						}}
					>
						{t("sortie")}: {route.params.book.publishDate}
					</Text>
					{/* <Text
						style={{
							paddingHorizontal: 20,
							paddingVertical: 15,
							fontSize: 15,
							marginTop: 10,
							backgroundColor: "#fff",
							color: "black",
							textTransform: "uppercase",
							borderRadius: 25,
							textAlign: "center",
							marginHorizontal: 5,
							textTransform: "uppercase",
							fontWeight: "bold",
							shadowColor: "red",
							marginVertical: 20,
							shadowColor: "#000",
							shadowOffset: {
								width: 2,
								height: 2,
							},
							shadowOpacity: 0.45,
							shadowRadius: 5.84,
							elevation: 10,
						}}
					>
						Lire un extrait
					</Text> */}

					<View style={{ flexDirection: "row" }}>
						<BuyButton image={amazon} link={route.params.book.amazon} />
						<BuyButton image={rakuten} link={route.params.book.rakuten} />
						<BuyButton image={fnac} link={route.params.book.fnac} />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Divider
							width={2}
							orientation="vertical"
							color="#000"
							style={{ marginRight: 10, marginBottom: 50 }}
						/>
						<Text
							style={{
								fontSize: 17,
								textAlign: "left",
								fontWeight: "400",
								width: "90%",
								lineHeight: 30,
								marginBottom: 50,
							}}
						>
							{i18n.language == "en"
								? route.params.book.englishSum
								: route.params.book.summary}
						</Text>
					</View>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
const BuyButton = ({ image, link, navigation }) => (
	<TouchableOpacity
		onPress={() =>
			Linking.openURL(link).catch((err) =>
				console.error("An error occurred", err)
			)
		}
	>
		<View
			style={{
				width: 80,
				height: 80,
				padding: 20,
				backgroundColor: "#fff",
				marginHorizontal: 10,
				borderRadius: 50,
				shadowColor: "red",
				marginVertical: 20,
				shadowColor: "#000",
				shadowOffset: {
					width: 2,
					height: 2,
				},
				shadowOpacity: 0.45,
				shadowRadius: 5.84,
				elevation: 10,
			}}
		>
			<Image
				source={image}
				style={{
					height: "100%",
					width: "100%",
					resizeMode: "cover",
				}}
			/>
		</View>
	</TouchableOpacity>
);
