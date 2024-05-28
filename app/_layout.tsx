import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Index from "@/app/(tabs)/index";
import Calendar from "@/app/(tabs)/calendar";
import Settings from "@/app/(tabs)/settings";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="(tabs)/index" component={Index} />
      <Tab.Screen name="(tabs)/settings" component={Settings} />
    </Tab.Navigator>
  );
}
