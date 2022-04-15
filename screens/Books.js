import React from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";
export default function Bio({ navigation }) {
	var bioImage = require("../assets/rose.jpg");
	const BooksData = [
		{
			title: "les obus jouaient à pigeon vole",
			image: require("../assets/obus.jpg"),
			publishDate: "19 Février 2016",
			summary:
				"17 mars 1916. Guillaume Apollinaire est atteint par un éclat d'obus dans une tranchée, alors qu'il lit une revue littéraire qui vient, selon l'auteur, d'être retrouvée en Bavière. Retour sur les vingt-quatre heures qui ont précédé l'impact, sur le drame humain qui se joue et le regard d'Apollinaire sur ses hommes, la guerre et la création littéraire.",
		},
		{
			title: "sauver mozart",
			image: require("../assets/mozart.webp"),
			publishDate: "21 Mars 2012",
			summary: `C'est l'histoire d'un attentat musical. Eté 1939, au lendemain de l'Anschluss, Otto J. Steiner égrène ses jours dans un sanatorium de Salzbourg tandis qu'au-dehors l'Histoire montre les crocs.
			Autrichien, juif(un peu), seul (complètement), il n'aime plus que la musique — et la tuberculose le ronge autant que l'humiliation d'être malade, ou les privations qui achèvent de le pousser à la marge du monde. Un monde dissonant à son oreille de mélomane, une faute de goût existencielle pour cette âme libre, témoin privilégié et involontaire du délitement d'une certaine idée de l'homme.
			Tout semble joué, quand un événement inattendu le conduit à deux doigts de faire basculer le siècle. Mais s'il ne restait jamais plus rien à sauver que Mozart ?
			Avec un humour glaçant, une cruauté précise
			et une gravité malicieuse, Raphaël Jerusalmy signe un premier roman farouchement subversif.`,
		},
		{
			title: "évacuation",
			image: require("../assets/evac.jpg"),
			publishDate: "05 Avril 2017",
			summary: `C’est la guerre. L’ensemble de la population de Tel-Aviv est évacué. Sauf qu’à la dernière minute, Saba, le grand-père de Naor, descend du bus, entraînant le jeune homme et sa petite amie Yaël dans une dérive clandestine au coeur de la cité désertée désormais toute à eux.
			Une expérience à hauts risques, à l’intensité démultipliée par trois – trois âmes dont la fraternité efface les générations, trois grands enfants éperdus : Saba, le rescapé beckettien aux velléités oubliées, Yaël, la belle artiste aux idéaux intacts, et Naor, l’étudiant en cinéma aux yeux grands ouverts.
			Dans une ville bombardée devenue terrain de jeu, cocon paradoxal pour une innocence réinventée, Évacuation est un conte sans morale, une bulle de poésie arrachée aux entrailles de l’histoire au présent, une ode urbaine au désir de vivre, et de paix.`,
		},
		{
			title: "la rose de saragosse",
			image: require("../assets/rose.jpg"),
			publishDate: "03 Janvier 2018",
			summary: `Au cœur de l'Inquisition espagnole, la rencontre improbable entre un mercenaire à la solde du plus offrant et une poignée de grand-bourgeois convertis en danger. La Rose de Saragosse allume l'étincelle d'une rébellion qui passe par le trait vif de la caricature et le langage unique de la gravure. Aventure, séduction, mystère, un bref et riche roman comme une esquisse qui fait parler les silences. Où l'on retrouve le souffle et l'acuité de l'auteur de La Confrérie des chasseurs de livres et de Sauver Mozart. `,
		},
		{
			title: "La confrérie des chasseurs de livres",
			image: require("../assets/confrerie.jpg"),
			publishDate: "21 Août 2013",
			summary: `François Villon, premier poète des temps modernes et brigand notoire, croupit dans les geôles de Louis XI en attendant son exécution. Quand il reçoit la visite d'un émissaire du roi, il est loin d'en espérer plus qu'un dernier repas. Rebelle, méfiant, il passe pourtant un marché avec l'évêque de Paris et accepte une mission secrète qui consiste d'abord à convaincre un libraire et imprimeur de Mayence de venir s'installer à Paris pour mieux combattre la censure et faciliter la circulation des idées progressistes réprouvées par Rome. Un premier pas sur un chemin escarpé qui mènera notre poète, flanqué de son fidèle acolyte coquillard maître Colin, jusqu'aux entrailles les plus fantasmatiques de la Jérusalem d'en bas, dans un vaste jeu d'alliances, de complots et de contre-complots qui met en marche les forces de l'esprit contre la toute-puissance des dogmes et des armes, pour faire triompher l'humanisme et la liberté.
			Palpitant comme un roman d'aventures, vif et malicieux comme une farce faite à l'histoire des idées, regorgeant de trouvailles et de rebondissements, La Confrérie des chasseurs de livres cumule le charme et l'énergie de Fanfan la Tulipe, l'engagement et la dérision de Don Quichotte et le sens du suspense d'un Umberto Eco.`,
		},
	];
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: 25,
			}}
		>
			<HeaderText title="Raphaël Jerusalmy" subtitle="romancier" />

			<ScrollView>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{BooksData.map((book, index) => (
						<TouchableOpacity
							key={index}
							style={{
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
							}}
							onPress={() => navigation.navigate("Book", { book: book })}
						>
							<Image
								source={book.image}
								style={{
									height: "100%",
									width: "100%",
									resizeMode: "stretch",
									borderRadius: 8,
								}}
							/>
							<Text
								style={{
									marginTop: 10,
									textTransform: "capitalize",
									fontSize: 11,
									fontWeight: "700",
									margin: "auto",
									textAlign: "center",
								}}
							>
								{book.title}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
