import React from "react";
import styled from "styled-components";
import { Button, ImageBackground, TouchableOpacity, Linking, View, Image, Text} from "react-native";


// realmente no entiendo como funciona lo de wpp, pero siempre que lo probe en mi celu anduvo
//en la primer parte reemplazo el numero despues de phone=+ por el numero que sea (en este caso el mio)

handleWhatsAppButton = (whatsappNumber) => {
  const message = "Prueba 1";
  const whatsappUrl = `whatsapp://send?phone=+541154001310${whatsappNumber}&text=${encodeURIComponent(message)}`
  Linking.canOpenURL(whatsappUrl).then(supported => {
    if (supported) {
      Linking.openURL(whatsappUrl);
    } else {
      console.log("WhatsApp not available");
    }
  });
}

// aca arranca la pantalla

export default function TorneoBarPingPong({ navigation }) {
    return (
      <Container>


{/* Imagen de fondo y una flecha que te manda para atras, en mi celu anda pero en ipad por ejemplo las dimensiones son distintas y se ve en cualquier lado */}

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

          <Logo source={require("../assets/barPingPong.png")} />
          <Club>Bar Ping Pong</Club>
          <Direccion>Iberá 5257, Villa Urquiza</Direccion>
          <Lugar source={require("../assets/mesasBarPingPong.jpg")}/>

          <Title>Información</Title>
          <Categorias>
            <Imagen source={require("../assets/Categorias.png")}/>
            <Subtitle>Categorias</Subtitle>
            <Informacion>
               <Text>7ma 20hs</Text>
            </Informacion>
          </Categorias>
          <Cupos>
            <Imagen source={require("../assets/Cupos.png")}/>
            <Subtitle>Cupos</Subtitle>
            <Informacion>
               <Text>30 cupos</Text>
               <Text>{"\n"}</Text>
               <Text>por cat.</Text>
            </Informacion>
          </Cupos>
          <Precio>
            <Imagen source={require("../assets/Precio.png")}/>
            <Subtitle>Precio</Subtitle>
            <Informacion> 
                <Text>800 general</Text>
                <Text>{"\n"}</Text>
                <Text>0 socios</Text>
                <Text>{"\n"}</Text>
                <Text>0 damas</Text>
                <Text>{"\n"}</Text>
                <Text>0 menores</Text>
            </Informacion>
          </Precio>
          <Mesas>
            <Imagen source={require("../assets/Mesas.png")}/>
            <Subtitle>Mesas</Subtitle>
            <Informacion>5 mesas Almar</Informacion>
          </Mesas>
          <Adaptaciones>
            <Imagen source={require("../assets/Adaptaciones.png")}/>
            <Subtitle>Adaptaciones</Subtitle>
            <Informacion>Accesos adaptados</Informacion>
          </Adaptaciones>
          <Organizador>
            <Imagen source={require("../assets/Organizador.png")}/>
            <Subtitle>Organizador</Subtitle>
            <Informacion>Nicolas Cañeque</Informacion>
          </Organizador>


{/* Aca aparece el mensaje y devuelta se reemplaza el numero */}

          <TouchableOpacity onPress={() => {
            const message = "👋 ¿Cómo andas? Te escribo desde NetPong para inscribirme en [Insertar categoría] mi nombre es [Insertar nombre y apellido]. ¡Muchas gracias!  Nos vemos en el torneo 😀";
            const url = `https://wa.me/1154001310?text=${encodeURIComponent(message)}`;
            Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
            return Linking.openURL(url);
            }
            }).catch(err => console.error("An error occurred", err));
            }}
          >
{/* estilo del boton de wpp */}

<View style={{ backgroundColor: '#00B116', marginTop: 295, borderRadius: 10, width: 250, height: 80, alignSelf: 'center' }}>
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 20 }}>
    <Text style={{ flex: 1, color: 'white', marginTop: 20, fontSize: 16, fontWeight: 'bold'  }}>Inscribirme en menos de 30 segundos</Text>
    <Image source={require('../assets/whatsapp.png')} style={{ width: 30, height: 30, marginBottom: 10, marginTop: 26, marginLeft: 10 }} />
  </View>
  <Button 
    title=""
    color="white"
    onPress={() => {
      const url = "https://wa.me/1154001310";
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
  
// estilo de los textos e imagenes

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
  

