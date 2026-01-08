import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListaLocalScreen from "../screens/ListaLocalScreen";
import ImcScreen from "../screens/ImcScreen";
import TransformacionScreen from "../screens/TransformacionScreen";
import ListaExternaScreen from "../screens/ListaExternaScreen";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Tab" component={MyTab}/>
        </Stack.Navigator>
    )
}

function MyTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Imc" component={ImcScreen}/>
            <Tab.Screen name="Formulario" component={TransformacionScreen}/>
            <Tab.Screen name="ListaLocal" component={ListaLocalScreen}/>
            <Tab.Screen name="ListaExternal" component={ListaExternaScreen}/>
            
        </Tab.Navigator>
    )
}

export default function MainNow(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )

}
