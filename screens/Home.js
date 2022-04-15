import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Animated,
	Linking,
	PermissionsAndroid,
	Button,
} from "react-native";
import "../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import Constants from "expo-constants";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import BottomNav from "../components/BottomNav";
const SampleTrack = require("../assets/audio.mp3");

// Page d'accueil

export default function Home({ navigation, route }) {
	var homeImage = require("../assets/home.png");
	var manuelImage = require("../assets/bleu.png");
	const { t, i18n } = useTranslation();
	const [Loaded, SetLoaded] = React.useState(false);
	const [Loading, SetLoading] = React.useState(false);
	const sound = React.useRef(new Audio.Sound());

	React.useEffect(() => {
		// LoadAudio();
		changeLanguage(route.params.value);
	}, []);

	const [currentLanguage, setLanguage] = useState("en");

	const changeLanguage = (value) => {
		i18n
			.changeLanguage(value)
			.then(() => setLanguage(value))
			.catch((err) => console.log(err));
	};
	// const makeDownload = async () => {
	// 	FileSystem.downloadAsync(
	// 		"https://onedrive.live.com/download?cid=6BB1AD61F7376A02&resid=6BB1AD61F7376A02%21813078&authkey=AAAmo9wtWGbKL3Y&em=2",
	// 		FileSystem.documentDirectory + "small.pdf"
	// 	)
	// 		.then(({ uri }) => {
	// 			console.log("Finished downloading to ", uri);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// 	const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

	// 	if (status != "granted") {
	// 		return;
	// 	}
	// 	try {
	// 		const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
	// 		const album = await MediaLibrary.getAlbumAsync("Download");
	// 		if (album == null) {
	// 			await MediaLibrary.createAlbumAsync("Download", asset, false);
	// 		} else {
	// 			await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
	// 		}
	// 	} catch (e) {
	// 		handleError(e);
	// 	}
	// };
	const makeDownload = async () => {
		// await FileSystem.downloadAsync(
		// 	"https://onedrive.live.com/download?cid=6BB1AD61F7376A02&resid=6BB1AD61F7376A02%21813078&authkey=AAAmo9wtWGbKL3Y&em=2",
		// 	FileSystem.documentDirectory + "small5.pdf"
		// )
		// 	.then(({ uri }) => {
		// 		console.log("Finished downloading to ", uri);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
		const downloadedFile = await FileSystem.downloadAsync(
			"https://onedrive.live.com/download?cid=6BB1AD61F7376A02&resid=6BB1AD61F7376A02%21813078&authkey=AAAmo9wtWGbKL3Y&em=2",
			FileSystem.documentDirectory + "small5.pdf"
		)
			.then(({ uri }) => {
				console.log("Finished downloading to ", uri);
			})
			.catch((error) => {
				console.error(error);
			});
		const perm = await MediaLibrary.requestPermissionsAsync();
		if (!perm.status) {
			console.log("no permission");
			return;
		}

		try {
			const asset = await MediaLibrary.createAssetAsync(
				"file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540danieljerusalmy%252Fjerusalmynative/small5.pdf"
			);
			const album = await MediaLibrary.getAlbumAsync("Downloady");
			if (album == null) {
				await MediaLibrary.createAlbumAsync("Downloady", asset, false);
			} else {
				await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
			}
		} catch (e) {
			console.log(e);
		}
	};
	// const downloadFile = () => {
	// 	const uri =
	// 		"https://onedrive.live.com/download?cid=6BB1AD61F7376A02&resid=6BB1AD61F7376A02%21813078&authkey=AAAmo9wtWGbKL3Y&em=2";
	// 	let fileUri = FileSystem.documentDirectory + "manuel.pdf";
	// 	FileSystem.downloadAsync(uri, fileUri)
	// 		.then(({ uri }) => {
	// 			this.saveFile(uri);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	// saveFile = async (fileUri) => {
	// 	const { status } = await Permissions.askAsync(Permissions.S);
	// 	if (status === "granted") {
	// 		const asset = await MediaLibrary.createAssetAsync(fileUri);
	// 		await MediaLibrary.createAlbumAsync("Download", asset, false);
	// 	}
	// };

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: 25,
			}}
		>
			<ScrollView style={{ padding: 0 }}>
				<HeaderImage image={homeImage} />

				<HeaderText title="Raphaël Jerusalmy" subtitle="romancier" />
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Text
						style={{
							paddingHorizontal: 30,
							fontSize: 18,
							lineHeight: 35,
							marginBottom: 0,
						}}
					>
						{t("topHomeText")}
					</Text>
					<Image
						source={manuelImage}
						style={{
							resizeMode: "contain",
							borderRadius: 5,
							marginVertical: 15,
							width: 200,
							height: 300,
						}}
					/>
					<Text
						style={{
							fontWeight: "bold",
							textAlign: "justify",
							paddingHorizontal: 30,
							fontSize: 18,
							lineHeight: 35,
						}}
					>
						{t("botHomeText")}
					</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						paddingHorizontal: 30,
						paddingVertical: 10,
					}}
				>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
							flex: 1,
						}}
					>
						{/* <Text
							style={styles.actionBtn}
							onPress={() =>
								navigation.navigate("PDF", {
									link: "https://onedrive.live.com/download?cid=6BB1AD61F7376A02&resid=6BB1AD61F7376A02%21813078&authkey=AAAmo9wtWGbKL3Y&em=2",
								})
							}
							// onPress={() =>
							// 	Linking.openURL("bundle-assets://manuel4.pdf").catch((err) =>
							// 		console.error("An error occurred", err)
							// 	)
							// }
							title=""
						>
							{t("readOnline")}
						</Text> */}
						<Text
							style={styles.actionBtn}
							title=""
							onPress={() =>
								currentLanguage == "en"
									? Linking.openURL(
											"https://manuelbleu.com/pdfjs/web/blueManual.pdf"
									  ).catch((err) => console.error("An error occurred", err))
									: Linking.openURL(
											"https://manuelbleu.com/pdfjs/web/manuel.pdf"
									  ).catch((err) => console.error("An error occurred", err))
							}
						>
							{t("download")}
						</Text>
						{/* <Button title="Play Song" onPress={PlayAudio} />
						<Button title="Pause Song" onPress={PauseAudio} /> */}
					</View>
				</View>
			</ScrollView>
			<BottomNav navigation={navigation} />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	actionBtn: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		fontSize: 13,
		marginTop: 20,
		backgroundColor: "blue",
		color: "#fff",
		textTransform: "uppercase",
		borderRadius: 15,
		textAlign: "center",
		marginHorizontal: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.95,
		shadowRadius: 5.84,
		elevation: 5,
		marginBottom: 20,
	},
});
