import React from "react";
import { FlatList, Text, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";

const Albumlist = ({ list }) => {
  const renderSection = ({ section }) => (
    <>
      <Text style={style.title}>{section.title}</Text>
      <FlatList
        horizontal={true}
        data={section.data}
        renderItem={({ item }) => <AlbumDetail album={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
      />
    </>
  );

  const render = () => null;
  return (
    <SectionList
      sections={list}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSection}
      renderItem={render}
      keyExtractor={item => item.title}
    />
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10
  }
})

export default Albumlist;

