import React from "react";
import { StyleSheet, Image } from "react-native";
import { Box, VStack, Text, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

// import img0 from '../../src/img/img_book_fashinopolis.png';
// import img1 from '../../src/img/img_book_chanel.png';
// import img2 from '../../src/img/img_book_calligraphy.png';
// import img3 from '../../src/img/img_book_ysl.png';
// import img4 from '../../src/img/img_book_tbos.png';
// import img5 from '../../src/img/img_book_stitchedup.png';



//const images = [img0, img1, img2, img3, img4, img5];

const AlbumDetail = ({ album }) => {
  const { navigate } = useNavigation();
  return (
    <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2}>
      <VStack bg='#fff'>
        <VStack marginBottom={10}>
          <Pressable
            onPress={() => album.press ? navigate('Detail', album) : null}
          >
            <Image
              source={{uri:"https://user-images.githubusercontent.com/7682104/47115355-fa4f7600-d223-11e8-8670-9c952a40b794.png"}}
              style={{ width: 140, height: 200 }}
            />
          </Pressable>
        </VStack>

        <VStack marginTop={0} marginBottom={5} paddingLeft={2} >
          {album.star > 0 ? <Stars count={album.star} /> : null}
          <Text bold style={styles.title}>{album.title}</Text>
          <Text style={styles.artist}>{album.artist}</Text>
        </VStack>
      </VStack>
    </Box>
  )
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5
  },
  artist: {
    fontFamily: "Roboto",
    fontSize: 14
  }
})

export default AlbumDetail;
