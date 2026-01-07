import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import FormularioScreen from "../screens/TransformacionScreen";
import ImcScreen from "../screens/ImcScreen";
import TransformacionScreen from "../screens/TransformacionScreen";


const Tabs = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tabs.Navigator initialRouteName="IMC">
            <Tabs.Screen name="Welcome" component={WelcomeScreen} />
            <Tabs.Screen name="Formulario" component={TransformacionScreen} />
            <Tabs.Screen name="IMC" component={ImcScreen} />
        </Tabs.Navigator>
    )
}

export default function BottonTab(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
