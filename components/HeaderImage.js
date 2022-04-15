import { Image } from "react-native";
import React from "react";

// Composante pour image d'en-tête
// recoit l'image voulu à afficher
export default function HeaderImage({ image }) {
	return <Image source={image} style={{ width: "100%", height: 180 }} />;
}
