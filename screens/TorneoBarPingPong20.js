import React from "react";
import styled from "styled-components";
import {
  Button,
  ImageBackground,
  // TouchableOpacity,
  Linking,
  View,
  Image,
  Text,
} from "react-native";

export default function TorneoBarPingPong20({ navigation }) {
  const params = {
    tel: "+541154001310",
    category: "[Insertar categoría]",
    userName: "[Insertar nombre y apellido]",
  };

  const handleWhatsAppButton = ({ tel, category, userName }) => {
    const message = `👋 ¿Cómo andas? Te escribo desde NetPong para inscribirme en ${category} mi nombre es ${userName}. ¡Muchas gracias!  Nos vemos en el torneo 😀`;
    const url = `https://wa.me/${tel}?text=${encodeURIComponent(message)}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const handlePress = () => {
    return handleWhatsAppButton(params)
  }

  return (
    <Container>
      <ImageBackground
        source={require("../assets/atras.png")}
        style={{
          position: "absolute",
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
            navigation.navigate("Inicio");
          }}
        />
      </ImageBackground>

      <Logo source={require("../assets/barPingPong.png")} />
      <Club>Bar Ping Pong NTE</Club>
      <Direccion>Iberá 5257, Villa Urquiza</Direccion>
      <Lugar source={require("../assets/mesasBarPingPong.jpg")} />

      <Title>Información</Title>
      <Categorias>
        <Imagen source={require("../assets/Categorias.png")} />
        <Subtitle>Categorias</Subtitle>
        <Informacion>
          <Text>7ma 20hs</Text>
        </Informacion>
      </Categorias>
      <Cupos>
        <Imagen source={require("../assets/Cupos.png")} />
        <Subtitle>Cupos</Subtitle>
        <Informacion>
          <Text>30 cupos</Text>
          <Text>{"\n"}</Text>
          <Text>por cat.</Text>
        </Informacion>
      </Cupos>
      <Precio>
        <Imagen source={require("../assets/Precio.png")} />
        <Subtitle>Precio</Subtitle>
        <Informacion>
          <Text>1000 general</Text>
          <Text>{"\n"}</Text>
          <Text>0 socios</Text>
          <Text>{"\n"}</Text>
          <Text>0 damas y menores</Text>
        </Informacion>
      </Precio>
      <Mesas>
        <Imagen source={require("../assets/Mesas.png")} />
        <Subtitle>Mesas</Subtitle>
        <Informacion>5 mesas Almar</Informacion>
      </Mesas>
      <Adaptaciones>
        <Imagen source={require("../assets/Adaptaciones.png")} />
        <Subtitle>Adaptaciones</Subtitle>
        <Informacion>Accesos adaptados</Informacion>
      </Adaptaciones>
      <Organizador>
        <Imagen source={require("../assets/Organizador.png")} />
        <Subtitle>Organizador</Subtitle>
        <Informacion>Nicolas Cañeque</Informacion>
      </Organizador>

      {/* <TouchableOpacity
        onPress={() => {
          const message =
            "👋 ¿Cómo andas? Te escribo desde NetPong para inscribirme en [Insertar categoría] mi nombre es [Insertar nombre y apellido]. ¡Muchas gracias!  Nos vemos en el torneo 😀";
          const url = `https://wa.me/1158767333?text=${encodeURIComponent(
            message
          )}`;
          Linking.canOpenURL(url)
            .then((supported) => {
              if (!supported) {
                console.log("Can't handle url: " + url);
              } else {
                return Linking.openURL(url);
              }
            })
            .catch((err) => console.error("An error occurred", err));
        }}
      > */}
      <View
        style={{
          backgroundColor: "#00B116",
          marginTop: 295,
          borderRadius: 10,
          width: 250,
          height: 80,
          alignSelf: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "#00B116",
          }}
          title="Inscribirme en menos de 30 segundos"
          onPress={() => handlePress()}
        />
      </View>
      {/* </TouchableOpacity> */}
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
