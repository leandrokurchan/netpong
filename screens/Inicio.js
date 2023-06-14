import React, { useState } from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

// esLocale no anda, se puede borrar
const esLocale = {
  monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  monthNamesShort: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
  today: 'Hoy',
};

export default function Inicio({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    console.log('handleDayPress called with', day);
    setSelectedDate(day.dateString);
    console.log('selectedDate:', selectedDate);

    if (markedDates[day.dateString]) {
      markedDates[day.dateString].selectedColor = '#839f8e';
    } else {
      markedDates[day.dateString] = { selected: true, selectedColor: '#839f8e' };
    }
  };

  const getMessageForDate = (date) => {
    switch (date) {
      // case '2023-04-25':
      //   return (
      //     <TouchableOpacity onPress={() => navigation.navigate('TorneoNichia')}>
      //       <Torneo>
      //         <Cover>
      //           <Logo source={require("../assets/nichia.png")} />
      //           <Club>Nichia Gakuin</Club>
      //           <Categoria>3ra, 1ra</Categoria>
      //           <Direccion>Yatay 261, Almagro</Direccion>
      //         </Cover>
      //       </Torneo>
      //     </TouchableOpacity>
      //   );
      // case '2023-04-30':
      //   return (
      //       <TouchableOpacity onPress = { () => { navigation.navigate('TorneoAtlanta') }}>
      //         <Torneo>
      //           <Cover>
      //             <Logo source={require("../assets/atlanta.png")} />
      //             <Club>Atlanta</Club>
      //             <Categoria>7ma, 3ra, 2da</Categoria>
      //             <Direccion>Humboldt 486, Villa Crespo</Direccion>
      //           </Cover>
      //         </Torneo>
      //       </TouchableOpacity>
      //   );
      //   case '2023-05-12':
      //     return (
      //       <View>
      //         <TouchableOpacity onPress = { () => { navigation.navigate('TorneoUrquiza') }}>
      //           <Torneo>
      //             <Cover>
      //               <Logo source={require("../assets/urquiza.png")} />
      //               <Club>Club Urquiza</Club>
      //               <Categoria>7ma, 5ta</Categoria>
      //               <Direccion>Roosevelt 5237, Villa Urquiza</Direccion>
      //             </Cover>
      //           </Torneo>
      //         </TouchableOpacity>
      //         <TouchableOpacity onPress = { () => { navigation.navigate('TorneoLaQuinta') }}>
      //           <Torneo>
      //             <Cover>
      //               <Logo source={require("../assets/laQuinta.png")} />
      //               <Club>La Quinta TDM</Club>
      //               <Categoria>2da</Categoria>
      //               <Direccion>Calle 9 esquina 421 bis, Villa Elisa</Direccion>
      //             </Cover>
      //           </Torneo>
      //         </TouchableOpacity>
      //         <TouchableOpacity onPress = { () => { navigation.navigate('TorneoCasaPadua') }}>
      //           <Torneo>
      //             <Cover>
      //               <Logo source={require("../assets/casaPadua.png")} />
      //               <Club>C.A.S.A. de Padua</Club>
      //               <Categoria>2da</Categoria>
      //               <Direccion>	Independencia 725, San Antonio de Padua</Direccion>
      //             </Cover>
      //           </Torneo>
      //         </TouchableOpacity>
      //       </View>
      //     );
      //     case '2023-05-14':
      //       return (
      //         <View>
      //           <TouchableOpacity onPress = { () => { navigation.navigate('TorneoTopSerrano') }}>
      //             <Torneo>
      //               <Cover>
      //                 <Logo source={require("../assets/topSerrano.png")} />
      //                 <Club>Club Top Serrano</Club>
      //                 <Categoria>6ta, 5ta, 4ta, 3ra</Categoria>
      //                 <Direccion>Calle 13 (J. M. Fangio) Nº 818, Balcarce</Direccion>
      //               </Cover>
      //             </Torneo>
      //           </TouchableOpacity>
      //         </View>
      //       );
      //       case '2023-05-15':
      //         return (
      //           <View>
      //             <TouchableOpacity onPress = { () => { navigation.navigate('TorneoPingPongSocial') }}>
      //               <Torneo>
      //                 <Cover>
      //                   <Logo source={require("../assets/pingPongSocial.png")} />
      //                   <Club>Bar Ping Pong</Club>
      //                   <Categoria>7ma</Categoria>
      //                   <Direccion>Iberá 5257, Villa Urquiza</Direccion>
      //                 </Cover>
      //               </Torneo>
      //             </TouchableOpacity>
      //           </View>
      //         );
      case '2023-06-17':
        return (
          <View>
            <TouchableOpacity onPress = { () => { navigation.navigate('TorneoAtlanta81') }}>
              <Torneo>
                <Cover>
                  <Logo source={require("../assets/atlanta.png")} />
                  <Club>Atlanta</Club>
                  <Categoria>6ta</Categoria>
                  <Direccion>Humboldt 486, Villa Crespo</Direccion>
                </Cover>
              </Torneo>
            </TouchableOpacity>
            <TouchableOpacity onPress = { () => { navigation.navigate('TorneoClub4F12') }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/club4F.png")} />
                    <Club>Club 4F</Club>
                    <Categoria>7ma</Categoria>
                    <Direccion>Timoteo Gordillo 1454, Mataderos</Direccion>
                  </Cover>
                </Torneo>
              </TouchableOpacity>
              <TouchableOpacity onPress = { () => { navigation.navigate('TorneoLaVuelta10') }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/laVuelta.png")} />
                    <Club>La Vuelta</Club>
                    <Categoria>2da, 1ra</Categoria>
                    <Direccion>Arenales 4344, Vicente Lopez</Direccion>
                  </Cover>
                </Torneo>
              </TouchableOpacity>
              <TouchableOpacity onPress = { () => { navigation.navigate('TorneoItaliano67') }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/italiano.png")} />
                    <Club>Italiano TDM</Club>
                    <Categoria>5ta, 4ta, 3ra, 2da</Categoria>
                    <Direccion>Av. Presidente Perón 4350, Jose Clemente Paz</Direccion>
                  </Cover>
                </Torneo>
              </TouchableOpacity>
              <TouchableOpacity onPress = { () => { navigation.navigate('TorneoCulturalDonic8') }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/culturalDonic.png")} />
                    <Club>Cultural Donic</Club>
                    <Categoria>7ma, 4ta, 3ra, 2da</Categoria>
                    <Direccion>	Av. Belgrano 3470, Sarandi</Direccion>
                  </Cover>
                </Torneo>
              </TouchableOpacity>
            </View>
          );
          case '2023-06-18':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoSocialClub14') }}>
                  <Torneo>
                    <Cover>
                      <Logo source={require("../assets/socialClub.png")} />
                      <Club>Social Club</Club>
                      <Categoria>7ma, 6ta, 5ta, 4ta</Categoria>
                      <Direccion>Ricardo Gutierrez 702, Villa Sarmiento</Direccion>
                    </Cover>
                  </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoBarPingPong20') }}>
                    <Torneo>
                      <Cover>
                        <Logo source={require("../assets/barPingPong.png")} />
                        <Club>Bar Ping Pong</Club>
                        <Categoria>7ma, 6ta, 3ra, 2da</Categoria>
                        <Direccion>Iberá 5257, Vila Urquiza</Direccion>
                      </Cover>
                    </Torneo>
                </TouchableOpacity>
                </View>
              );
          case '2023-06-19':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoUrquiza56') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/urquiza.png")} />
                     <Club>Club Urquiza</Club>
                     <Categoria>7ma, 6ta, 5ta, 4ta</Categoria>
                     <Direccion>Roosevelt 5237, Villa Urquiza</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                </View>
              );
           case '2023-06-20':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoPadilla691') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/padilla.png")} />
                     <Club>Club Padilla</Club>
                     <Categoria>7ma, 5ta, 4ta, 3ra</Categoria>
                     <Direccion>Las Heras 3259 , Vicente Lopez</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoClub4F13') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/club4F.png")} />
                     <Club>Club 4F</Club>
                     <Categoria>7ma, 5ta, 4ta, 3ra</Categoria>
                     <Direccion>Timoteo Gordillo 1454, Mataderos</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
              </View>
              );
          case '2023-06-21':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoPadilla700') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/padilla.png")} />
                     <Club>Club Padilla</Club>
                     <Categoria>7ma, 5ta</Categoria>
                     <Direccion>Las Heras 3259 , Vicente Lopez</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                </View>
              );
          case '2023-06-23':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoUrquiza55') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/urquiza.png")} />
                     <Club>Club Urquiza</Club>
                     <Categoria>7ma, 5ta</Categoria>
                     <Direccion>Roosevelt 5237, Villa Urquiza</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoAtlanta83') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/atlanta.png")} />
                     <Club>Atlanta</Club>
                     <Categoria>6ta, 4ta</Categoria>
                     <Direccion>Humboldt 540, Villa Crespo</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
              </View>
              );
          case '2023-06-24':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoCasaPadua16') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/casaPadua.png")} />
                     <Club>C.A.S.A. de Padua</Club>
                     <Categoria>7ma, 6ta</Categoria>
                     <Direccion>Independencia 725, San Antonio de Padua</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoMacabi74') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/macabi.png")} />
                     <Club>Macabi</Club>
                     <Categoria>4ta, 3ra, 2da, 1ra</Categoria>
                     <Direccion>Tucumán 3135, Balvanera</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoZenit53') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/zenit.png")} />
                     <Club>Zenit Tenis de Mesa</Club>
                     <Categoria>6ta, 5ta, 4ta, 3ra</Categoria>
                     <Direccion>Avellaneda 1252, Villa Ballester</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
              </View>
              );
          case '2023-06-25':
            return (
              <View>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoAtlanta382') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/atlanta.png")} />
                     <Club>Atlanta</Club>
                     <Categoria>7ma, 6ta, 5ta, 4ta</Categoria>
                     <Direccion>Humboldt 540, Villa Crespo</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoRioja130') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/rioja.png")} />
                     <Club>Club S. y D. Rioja</Club>
                     <Categoria>5ta, 4ta, 3ra, 2da</Categoria>
                     <Direccion>Rioja 1887, Avellaneda</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoUVVA2') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/uvva.png")} />
                     <Club>Club UVVA</Club>
                     <Categoria>6ta, 4ta, 3ra, 2da</Categoria>
                     <Direccion>Av. Ader 4048, Villa Adelina</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => { navigation.navigate('TorneoUTN1') }}>
                 <Torneo>
                   <Cover>
                     <Logo source={require("../assets/utn.png")} />
                     <Club>UTN La Plata</Club>
                     <Categoria>7ma, 6ta</Categoria>
                     <Direccion>Calle 58 y 124, Berisso</Direccion>
                   </Cover>
                 </Torneo>
                </TouchableOpacity>
              </View>
              );
      default:
        return (
        <NoCover>
          <NoImagen source={require("../assets/NoTorneo.png")} />
          <NoTorneo>No hay torneo hoy</NoTorneo>
        </NoCover>
        );
    }
  };

  const message = getMessageForDate(selectedDate);

  const markedDates = {
    '2023-06-17': { marked: true, dotColor: '', selected: true, selectedColor: '#308446' },
    '2023-06-18': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-19': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-20': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-21': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-23': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-24': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
    '2023-06-25': { marked: true, dotColor: '', selected: true, selectedColor: '#308446'  },
  };
  
  if (selectedDate && markedDates[selectedDate]) {
    markedDates[selectedDate].selectedColor = '#839f8e';
  } else if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: '#839f8e',  };
  }
  

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleBar>
          <Avatar source={require("../assets/splash.png")} />
          <Title>Bienvenido de nuevo,</Title>
          <Name>Jugador</Name>
        </TitleBar>

        <Subtitle>Calendario</Subtitle>

        <Calendar
          style={{ borderRadius: 10, elevation: 4, margin: 20 }}
          minDate={"2023-01-01"}
          hideExtraDays={true}
          markedDates={markedDates}
          onDayPress={handleDayPress}
          locales={{ es: esLocale }}
          monthNames={esLocale.monthNames}
          dayNames={esLocale.dayNames}
        /> 

        <Subtitle>Proximo torneo</Subtitle>
          {message}

             {/*<TorneoContainer>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress = { () => {
                  navigation.navigate('Torneo')
                }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/nichia.png")} />
                    <Club>Nichia Gakuin</Club>
                    <Categoria>3ra, 1ra</Categoria>
                    <Direccion>Yatay 261</Direccion>
                  </Cover>
                </Torneo>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => {
                  navigation.navigate('Torneo')
                }}>
                <Torneo>
                  <Cover>
                    <Logo source={require("../assets/atlanta.png")} />
                    <Club>Atlanta</Club>
                    <Categoria>7ma, 3ra, 2da</Categoria>
                    <Direccion>Humboldt 540</Direccion>
                  </Cover>
                </Torneo>
                </TouchableOpacity>
              </ScrollView>
            </TorneoContainer> */}

      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
width: 100%;
flex: 1;
`;

const TitleBar = styled.View`
width: 100%;
margin-top: 70px;
margin-bottom: 35px;
margin-left: 8%;
`;

const Avatar = styled.Image`
width: 60px;
height: 60px;
background: black;
border-radius: 60px;
position: absolute;
top: 0;
`;

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;
margin-top: 5px;
margin-left: 18%;
`;

const Name = styled.Text`
font-size: 20px;
color: #3c4560;
font-weight: bold;
margin-left: 18%;
`;

const Subtitle = styled.Text`
color: #b8bece;
font-weight: 600;
font-size: 15px;
margin-top: 5px;
text-transform: uppercase;
padding-left: 5%;
`;

const TorneoContainer = styled.View`
width: 100%;
height: 320px;
flex-direction: column;
padding-left: 10px;
`;

const Torneo = styled.View`
background: white;
width: 90%;
height: 100px;
border-radius: 14px;
margin-left: 5%;
margin-top: 20px;
`;

const Cover = styled.View`
width: 100%;
height: 100%;
border-radius: 14px;
overflow: hidden;
`;

const Logo = styled.Image`
width: 60px;
height: 60px;
position: absolute;
top: 20px;
left: 25px;
`;

const Club = styled.Text`
font-size: 20px;
color: #3c4560;
font-weight: 600;
margin-top: 20px;
width: 170px;
margin-bottom: 3px;
margin-left: 110px;
`;

const Categoria = styled.Text`
font-size: 14px;
color: #b8bece;
font-weight: 500;
text-transform: uppercase;
font-weight: bold;
margin-left: 110px;
`;

const Direccion = styled.Text`
font-size: 12px;
color: #b8bece;
font-weight: 500;
max-width: 260px;
margin-left: 110px;
margin-bottom: 20px;
`;

const NoCover = styled.View`
width: 100%;
height: 100%;
overflow: hidden;
`;

const NoImagen = styled.Image`
width: 110px;
height: 110px;
position: absolute;
top: 30px;
left: 141px;
`;

const NoTorneo = styled.Text`
color: #3c4560;
font-weight: 600;
font-size: 14px;
margin-top: 140px;
text-align: center;
`;
