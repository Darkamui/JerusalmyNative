import React from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
} from "react-native";
import { useTranslation } from "react-i18next";

import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";
export default function Bio({ navigation }) {
	var bioImage = require("../assets/bio.png");
	const { t, i18n } = useTranslation();

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: 25,
			}}
		>
			<HeaderImage image={bioImage} />

			<ScrollView>
				<HeaderText title="raphaël jerusalmy" subtitle="romancier" />
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Text
						style={{
							paddingHorizontal: 30,
							fontSize: 15,
							lineHeight: 33,
							marginBottom: 10,
						}}
					>
						Diplômé de l’École Normale Supérieure, après ses études, il s'engage
						dans l'armée israélienne, au sein de laquelle il évolue rapidement
						vers le service de renseignement.
						{"\n"}
						{"\n"}
						Après une quinzaine d'années, il prend sa retraite de l'armée et
						mène des actions éducatives et humanitaires, puis devient négociant
						en livres anciens à Tel Aviv. Il est également expert sur la chaîne
						de télévision I24news.
						{"\n"}
						{"\n"}
						Il publie un premier roman très remarqué en 2012, "Sauvez Mozart",
						pour lequel il a reçu le prix Emmanuel Roblès 2013 et le prix
						littéraire de l'ENS Cachan.
						{"\n"}
						{"\n"}
						Auteur de romans à succès : "La confrérie des chasseurs de livres"
						(Actes Sud, 2013), "Denis Diderot, non à l’ignorance" (Actes Sud
						junior, 2014), son roman "Les obus jouaient à pigeon vole", paru en
						février 2016 dans la collection Sur le fil aux Éditions Bruno Doucey
						a été couronné par le Prix Coup de cœur des lecteurs des Rendez-vous
						de l’histoire de Blois 2016.
						{"\n"}
						{"\n"}
						En 2018, Il signe "La rose de Saragosse", un roman palpitant dans
						lequel il revient sur la persécution des Juifs d’Espagne par
						l’Inquisition au XVe siècle.
					</Text>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
