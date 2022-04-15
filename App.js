import { View, Text } from "react-native";
import Home from "./screens/Home";
import RootNavigation from "./navigation";

// Utilise le fichier de navigation afin de consulter la route par défaut et gérer la suite de la navigation
export default function App() {
	return <RootNavigation />;
}

// Note importante: SafeAreaView dans le contexte de react-native au meilleur de mes connaissances, ne fonctionne que sur iOS, et donc sur android il faut
// ou bien calculer la taille de l'écran afin d'implémenter une méthode pour gérer ca de facon dynamique mais honnêtement j'ai juste mis un paddingTop pour ne pas me casser la tête
