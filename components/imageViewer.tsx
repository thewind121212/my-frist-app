import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  placeHolderImage: ImageSource;
  selectedImage: string | undefined;
};

export default function ImageViewer({ placeHolderImage, selectedImage }: Props) {
  return <Image source={selectedImage ? selectedImage : placeHolderImage } style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
