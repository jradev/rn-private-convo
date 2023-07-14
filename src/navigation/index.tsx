import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/login";
import Conversation from "../views/conversation";
import { CONVERSATION_VIEW, LOGIN_VIEW } from "../utils/constant";


const Stack = createNativeStackNavigator();

function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={LOGIN_VIEW}>
                <Stack.Screen name={LOGIN_VIEW} component={Login} />
                <Stack.Screen name={CONVERSATION_VIEW} component={Conversation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;