import React from "react";
import {
  Center,
  Pressable,
  Actionsheet,
} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionScreen from "../screens/ActionScreen";

import { Callout } from "react-native-maps";

export default ({ zoomRatio, site, red }) => {

  return (
    <>
      {
        red == true ?
          <Center
            bg="#FF0000"
            borderRadius={60}
            p={3 * zoomRatio}
            borderWidth={2 * zoomRatio}
            borderColor="white"
          >
            <Icon name={"bicycle"} size={30 * zoomRatio} color="white" />
          </Center> :
          <Center
            bg="white"
            borderRadius={60}
            p={3 * zoomRatio}
            borderWidth={2 * zoomRatio}
            borderColor="#F29D38"
          >
            <Icon name={"bicycle"} size={30 * zoomRatio} color="#F29D38" />
          </Center>
      }

    </>
  );
};