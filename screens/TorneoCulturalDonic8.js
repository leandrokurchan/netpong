import React from "react";
import styled from "styled-components";
import { Button, ImageBackground, TouchableOpacity, Linking, View, Image, Text} from "react-native";

handleWhatsAppButton = (whatsappNumber) => {
  const message = "Prueba 1";
  const whatsappUrl = `whatsapp://send?phone=+1567832539${whatsappNumber}&text=${encodeURIComponent(message)}`
  Linking.canOpenURL(whatsappUrl).then(supported => {
    if (supported) {
      Linking.openURL(whatsappUrl);
    } else {
      console.log("WhatsApp not available");
    }
  });
}

export default function TorneoCulturalDonic8({ navigation }) {
    return (
      <Container>

<ImageBackground
  source={require("../assets/atras.png")}
  style={{
    position: 'absolute',
    top: 82,
    left: 325,
    width: 50,
    height: 50,
    zIndex: 10, 
  }}
>
  <Button
    title=""
    onPress={() => {
      navigation.navigate('Inicio');
    }}
  />
</ImageBackground>

          <Logo source={require("../assets/culturalDonic.png")} />
          <Club>Cultural Donic</Club>
          <Direccion>Av. Belgrano 3470, Sarandi</Direccion>
          <Lugar source={require("../assets/mesasNo.jpg")}/>

          <Title>Información</Title>
          <Categorias>
            <Imagen source={require("../assets/Categorias.png")}/>
            <Subtitle>Categorias</Subtitle>
            <Informacion>
               <Text>7ma 10hs</Text>
               <Text>{"\n"}</Text>
               <Text>4ta 12:30hs</Text>
               <Text>{"\n"}</Text>
               <Text>3ta 15:30hs</Text>
               <Text>{"\n"}</Text>
               <Text>2da 18hs</Text>
            </Informacion>
          </Categorias>
          <Cupos>
            <Imagen source={require("../assets/Cupos.png")}/>
            <Subtitle>Cupos</Subtitle>
            <Informacion>
               <Text>24 cupos</Text>
               <Text>{"\n"}</Text>
               <Text>por cat.</Text>
            </Informacion>
          </Cupos>
          <Precio>
            <Imagen source={require("../assets/Precio.png")}/>
            <Subtitle>Precio</Subtitle>
            <Informacion> 
                <Text>1200 general</Text>
                <Text>{"\n"}</Text>
                <Text>1100 socios</Text>
                <Text>{"\n"}</Text>
                <Text>1100 2 inscripción</Text>
            </Informacion>
          </Precio>
          <Mesas>
            <Imagen source={require("../assets/Mesas.png")}/>
            <Subtitle>Mesas</Subtitle>
            <Informacion>4 mesas Almar</Informacion>
          </Mesas>
          <Adaptaciones>
            <Imagen source={require("../assets/Adaptaciones.png")}/>
            <Subtitle>Adaptaciones</Subtitle>
            <Informacion>Accesos adaptados</Informacion>
          </Adaptaciones>
          <Organizador>
            <Imagen source={require("../assets/Organizador.png")}/>
            <Subtitle>Organizador</Subtitle>
            <Informacion>Lucas Laurent</Informacion>
          </Organizador>

          <TouchableOpacity onPress={() => {
            const message = "👋 ¿Cómo andas? Te escribo desde NetPong para inscribirme en [Insertar categoría] mi nombre es [Insertar nombre y apellido]. ¡Muchas gracias!  Nos vemos en el torneo 😀";
            const url = `https://wa.me/1567832539?text=${encodeURIComponent(message)}`;
            Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
            return Linking.openURL(url);
            }
            }).catch(err => console.error("An error occurred", err));
            }}
          >
<View style={{ backgroundColor: '#00B116', marginTop: 295, borderRadius: 10, width: 250, height: 80, alignSelf: 'center' }}>
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 20 }}>
    <Text style={{ flex: 1, color: 'white', marginTop: 20, fontSize: 16, fontWeight: 'bold'  }}>Inscribirme en menos de 30 segundos</Text>
    <Image source={require('../assets/whatsapp.png')} style={{ width: 30, height: 30, marginBottom: 10, marginTop: 26, marginLeft: 10 }} />
  </View>
  <Button 
    title=""
    color="white"
    onPress={() => {
      const url = "https://wa.me/1567832539";
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error("An error occurred", err));
    }}
  />
</View>
          </TouchableOpacity>


      </Container>
    );
  }
  
  const Container = styled.View`
  width: 100%;
  `;

  const BotonAtras = styled.View`

  width: 60px;
  height: 60px;
  border-radius: 14px;
  position: absolute;
  margin-top: 20%;
  margin-left: 80%;
  margin-right: 20px;
  `;

  const Atras = styled.Image`
  position: absolute;
  margin-top: 12px;
  margin-left: 14px;
  border-radius: 14px;
  width: 40px;
  height: 40px;

  /* font-size: 17px;
  color: #b8bece;
  font-weight: 600;
  font-style: italic; */
  `;
  
  const Logo = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 80px;
  left: 20px;
  `;
  
  const Club = styled.Text`
  font-size: 22px;
  color: #3c4560;
  font-weight: 600;
  margin-top: 85px;
  margin-left: 100px;
  `;
  
  const Direccion = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 1px;
  margin-left: 100px;
  `;

  const Lugar = styled.Image`
  width: 350px;
  height: 210px;
  position: absolute;
  border-radius: 10px;
  top: 165px;
  left: 20px;
  `;

  const Title = styled.Text`
  font-size: 18px;
  color: #3c4560;
  font-weight: 600;
  margin-top: 260px;
  margin-left: 20px;
  `;

  const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 16px;
  margin-top: 10px;
  padding-left: 55px;
  padding-right: 20px;
  `;

  const Imagen = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 20px;
  `;

  const Informacion = styled.Text`
  font-size: 14px;
  color: #b8bece;
  font-weight: 500;
  font-weight: semibold;
  margin-left: 55px;
  margin-right: 20px;
  `;

  const Categorias = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 420px;
  margin-left: 0px;
  margin-left: 1%;
  `;

  const Cupos = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 420px;
  margin-left: 55%;
  `;

  const Precio = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 500px;
  margin-left: 1%;
  `;

  const Mesas = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 500px;
  margin-left: 55%;
  `;

  const Adaptaciones = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 590px;
  margin-left: 1%;
  `;

  const Organizador = styled.View`
  flex-direction: column;
  position: absolute;
  margin-top: 590px;
  margin-left: 55%;
  `;
  



