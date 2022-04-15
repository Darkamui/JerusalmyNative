import React from "react";
import { ScrollView, View, Text } from "react-native";
import PDFReader from "rn-pdf-reader-js";

// Composante pour image d'en-tête
// recoit l'image voulu à afficher
export default function PDFreader({ link, route }) {
	return (
		<PDFReader
			source={{ uri: route.params.link }}
			withPinchZoom={true}
			withScroll={true}
			noLoader={false}
			style={{ paddingTop: 30 }}
		/>
	);
}
