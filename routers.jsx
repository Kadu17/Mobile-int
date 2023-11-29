import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, Entypo, 
    MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Login from './pages/Login'
import TelaInicial from './pages/TelaInicial'

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingVertical: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}
        >
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false,
                    tabBarStyle:{display:'none'},
                    tabBarIcon: ({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <Feather name="TelaInicial" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
    
export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="TelaInicial"
                    component={TelaInicial}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
)}