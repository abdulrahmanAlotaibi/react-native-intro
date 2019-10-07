import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddEntry from "./components/AddEntry";
import { getMetricMetaInfo } from "./utils/helpers";

class App extends React.Component {
  render() {
    return (
      <View>
        {getMetricMetaInfo("bike").getIcon()}
        <AddEntry />
      </View>
    );
  }
}

export default App;
