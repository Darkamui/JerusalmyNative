import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import Bio from "./screens/Bio";
import Books from "./screens/Books";
import Book from "./screens/Book";
import Contact from "./screens/Contact";
import PDFreader from "./components/PDFreader";
import Language from "./screens/Language";
// Conteneur (container) pour la navigation en utilisant react-navigation
// En somme, englober les routes connues dans un stacknavigator pointant vers la page initiale et qui est englobé par un navigationcontainer
export default function useNavigation() {
	// Creation d'une pile de navigation
	const Stack = createStackNavigator();
	// Configuration de la route initiale + les routes de l'appli
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Language"
				screenOptions={{
					cardStyleInterpolator:
						CardStyleInterpolators.forFadeFromBottomAndroid,
					headerShown: false,
				}}
			>
				<Stack.Screen name="Language" component={Language} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Biographie" component={Bio} />
				<Stack.Screen name="Books" component={Books} />
				<Stack.Screen name="Book" component={Book} />
				<Stack.Screen name="Contact" component={Contact} />
				<Stack.Screen name="PDF" component={PDFreader} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
