import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TorneoNichia from '../screens/TorneoNichia'
import Inicio from "../screens/Inicio";
import TorneoAtlanta from "../screens/TorneoAtlanta";
import TorneoUrquiza from "../screens/TorneoUrquiza";
import TorneoLaQuinta from "../screens/TorneoLaQuinta";
import TorneoCasaPadua from "../screens/TorneoCasaPadua";
import TorneoTopSerrano from "../screens/ToneoTopSerrano";
import TorneoBarPingPong from "../screens/ToneoBarPingPong";
import TorneoAtlanta81 from "../screens/TorneoAtlanta81";
import TorneoClub4F12 from "../screens/TorneoClub4F12";
import TorneoLaVuelta10 from "../screens/TorneoLaVuelta10";
import TorneoItaliano67 from "../screens/TorneoItaliano";
import TorneoCulturalDonic8 from "../screens/TorneoCulturalDonic8";
import TorneoSocialClub14 from "../screens/TorneoSocialClub14";
import TorneoBarPingPong20 from "../screens/TorneoBarPingPong20";
import TorneoUrquiza56 from "../screens/TorneoUrquiza56";
import TorneoPadilla691 from "../screens/TorneoPadilla691";
import TorneoClub4F13 from "../screens/TorneoClub4F13";
import TorneoPadilla700 from "../screens/TorneoPadilla700";
import TorneoUrquiza55 from "../screens/TorneoUrquiza55";
import TorneoAtlanta83 from "../screens/TorneoAtlanta83";
import TorneoCasaPadua16 from "../screens/TorneoCasaPadua16";
import TorneoMacabi74 from "../screens/TorneoMacabi74";
import TorneoZenit53 from "../screens/TorneoZenit53";
import TorneoAtlanta382 from "../screens/TorneoAtlanta382";
import TorneoRioja130 from "../screens/TorneoRioja130";
import TorneoUVVA2 from "../screens/TorneoUVVA2";
import TorneoUTN1 from "../screens/TorneoUTN1";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name = 'Inicio'
                    component= { Inicio }
                />
                <Stack.Screen
                    name = 'TorneoNichia'
                    component= { TorneoNichia }
                />
                <Stack.Screen
                    name = 'TorneoAtlanta'
                    component= { TorneoAtlanta }
                /> 
                <Stack.Screen
                    name = 'TorneoUrquiza'
                    component= { TorneoUrquiza }
                />
                <Stack.Screen
                    name = 'TorneoLaQuinta'
                    component= { TorneoLaQuinta }
                />   
                <Stack.Screen
                    name = 'TorneoCasaPadua'
                    component= { TorneoCasaPadua }
                />
                <Stack.Screen
                    name = 'TorneoTopSerrano'
                    component= { TorneoTopSerrano }
                />
                <Stack.Screen
                    name = 'TorneoBarPingPong'
                    component= { TorneoBarPingPong }
                />
                <Stack.Screen
                    name = 'TorneoAtlanta81'
                    component= { TorneoAtlanta81 }
                /> 
                <Stack.Screen
                    name = 'TorneoClub4F12'
                    component= { TorneoClub4F12 }
                />
                <Stack.Screen
                    name = 'TorneoLaVuelta10'
                    component= { TorneoLaVuelta10 }
                />
                <Stack.Screen
                    name = 'TorneoItaliano67'
                    component= { TorneoItaliano67 }
                />
                <Stack.Screen
                    name = 'TorneoCulturalDonic8'
                    component= { TorneoCulturalDonic8 }
                />
                <Stack.Screen
                    name = 'TorneoSocialClub14'
                    component= { TorneoSocialClub14 }
                />
                <Stack.Screen
                    name = 'TorneoBarPingPong20'
                    component= { TorneoBarPingPong20 }
                />
                <Stack.Screen
                    name = 'TorneoUrquiza56'
                    component= { TorneoUrquiza56 }
                />
                <Stack.Screen
                    name = 'TorneoPadilla691'
                    component= { TorneoPadilla691 }
                />
                <Stack.Screen
                    name = 'TorneoClub4F13'
                    component= { TorneoClub4F13 }
                />
                <Stack.Screen
                    name = 'TorneoPadilla700'
                    component= { TorneoPadilla700 }
                />
                <Stack.Screen
                    name = 'TorneoUrquiza55'
                    component= { TorneoUrquiza55 }
                />
                <Stack.Screen
                    name = 'TorneoAtlanta83'
                    component= { TorneoAtlanta83 }
                />
                <Stack.Screen
                    name = 'TorneoCasaPadua16'
                    component= { TorneoCasaPadua16 }
                />
                <Stack.Screen
                    name = 'TorneoMacabi74'
                    component= { TorneoMacabi74 }
                />
                <Stack.Screen
                    name = 'TorneoZenit53'
                    component= { TorneoZenit53 }
                />
                <Stack.Screen
                    name = 'TorneoAtlanta382'
                    component= { TorneoAtlanta382 }
                />
                <Stack.Screen
                    name = 'TorneoRioja130'
                    component= { TorneoRioja130 }
                />    
                <Stack.Screen
                    name = 'TorneoUVVA2'
                    component= { TorneoUVVA2 }
                />
                <Stack.Screen
                    name = 'TorneoUTN1'
                    component= { TorneoUTN1 }
                />                        
      


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack