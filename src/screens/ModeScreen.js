import React from "react";
import { ScrollView } from "react-native";
import { Center, Box, VStack, HStack, Text, Switch } from "@gluestack-ui/themed";
import { useDispatch, useSelector, Provider } from "react-redux";
import { selectColorMode } from "../redux/slice";
import { toggleColorMode } from "../redux/slice";

const ModeScreen = () => {

  const colorMode = useSelector(selectColorMode);
  const dispatch = useDispatch();

  return (
    <Box flex={1} bg="#FFE27B">
      <Center
        shadow={2} width="90%"
        mt="$2" px="$2" py="$4"
        bg="white" borderRadius={3}
        alignSelf="center"
      >
        <HStack space={8} alignItems="center" >
          <Text size="lg" px="$2">深淺模式：{colorMode == "light" ? "淺" : "深"}</Text>
          <Switch
            name="light Mode"
            size='md'
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
            value={colorMode === "dark"}
            onToggle={() => dispatch(toggleColorMode())}
          />
        </HStack>
      </Center>
    </Box>
  );
};

export default ModeScreen;
