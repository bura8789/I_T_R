import React, { Component } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ZB from "../Components/brand.webp";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Trucks from "../Components/Treucks";

const Container = styled("div")`
  background-color: #c6d0d3;
  padding-top: 100px;
`;

const Text = styled("div")`
  text-align: center;
  color: black;
`;

const Image = styled("img")`
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 20px;
  padding: 10px;
`;

const Brand = styled("div")`
  width: 500px;
  height: 300px;
  border-radius: 150px;
  background-image: url(${ZB});
  background-size: 100% 100%;
`;
const Div = styled("div")`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Div1 = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding: 60px;
  margin-left: 200px;
`;
const Card = styled("div")`
  text-align: center;
  transition: all 0.3s;
  :hover {
    transform: scale(103%, 103%);
  }
`;
const H1 = styled("div")`
  text-align: center;
`;
const H2 = styled("div")`
  text-align: start;
  display: flex;
`;
const Man = styled("div")`
  width: 100%;
  height: 100px;
  background-color: white;
`;
const Info = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  background-color: #b6c7cc;
`;
const Icon = styled("img")`
  width: 100px;
  height: 100px;
  margin: 80px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const Contact = styled("div")`
  width: 700px;
  height: 100px;
  background-color: white;
  text-decoration: solid;
  border-radius: 5px;
  padding: 15px;
  margin: 50px;
`;
const Location = styled("div")`
  width: 700px;
  height: 100px;
  background-color: white;
  text-decoration: solid;
  border-radius: 5px;
  padding: 15px;
  margin: 50px;
`;

const Icon2 = styled("img")`
  width: 50px;
  height: 50px;
  justify-content: flex-start;
`;
const Div3 = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const Managment = styled("div")`
  width: 700px;
  height: 300px;
  background-color: white;
  text-decoration: solid;
  border-radius: 5px;
  padding: 15px;
  margin: 50px;
`;
const Ishonch = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1350px;
  height: 150px;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 15px;
  margin: 50px;
`;
const Karta = styled(MapContainer)`
  display: flex;
  justify-content: center;
  width: 600px;
  height: 400px;
  margin-top: 150px;
  margin-left: 50px;
  border-radius: 5%;
`;
const Div4 = styled("div")`
  display: flex;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text>
        <h1>International Transport Rental </h1>
      </Text>
      <Div>
        <Brand></Brand>
      </Div>
      <Div1>
        <Card>
          <Image
            onClick={() => {
              navigate("/contacts");
            }}
            src="https://avatars.mds.yandex.net/i?id=ef4df8c05879ecc076661f1459d08f32ab18f1fb-5537386-images-thumbs&n=13"
          ></Image>
          <h1>Trucks</h1>
        </Card>
        <Card>
          <Image
            onClick={() => {
              navigate("/about");
            }}
            src="https://avatars.mds.yandex.net/i?id=af92115c3ef472158e195b51f188ee165bacb428-7950464-images-thumbs&n=13"
          ></Image>
          <h1>Cars</h1>
        </Card>
        <Card>
          <Image
            onClick={() => {
              navigate("/blog");
            }}
            src="https://avatars.mds.yandex.net/i?id=5921420250ed741eb1cd4c479d558de58bbb10e4-9150622-images-thumbs&n=13"
          ></Image>
          <h1>Bus</h1>
        </Card>
        <Card>
          <Image
            onClick={() => {
              navigate("/bike");
            }}
            src="https://avatars.mds.yandex.net/i?id=a07c50350a396b4294301cdc0e5c2ffd1eb5e234-8318113-images-thumbs&n=13"
          ></Image>
          <h1>Bikes</h1>
        </Card>
        <Card>
          <Image
            onClick={() => {
              navigate("/inomark");
            }}
            src="https://avatars.mds.yandex.net/i?id=1546af50e51c0716cffa1a2b6d3e55b921bfa056-8564743-images-thumbs&n=13"
          ></Image>
          <h1>Inomark</h1>
        </Card>
        <Card>
          <Image
            onClick={() => {
              navigate("/yaxti");
            }}
            src="https://avatars.mds.yandex.net/i?id=b93d1a992a0c001d98ae925dfc4838d4b8ec8221-8456088-images-thumbs&n=13"
          ></Image>
          <h1>Yacht</h1>
        </Card>
      </Div1>
      <Man></Man>
      <Info>
        <div>
          <Icon src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png"></Icon>
          <H1>
            Barcha transport <br></br>100% sug'urta qilingan
          </H1>
        </div>
        <div>
          <Icon src="https://cdn-icons-png.flaticon.com/128/2736/2736918.png"></Icon>
          <H1>
            Barcha transwport <br></br> ideal holatda
          </H1>
        </div>
        <div>
          <Icon src="https://cdn-icons-png.flaticon.com/128/535/535239.png"></Icon>
          <H1>
            Transport siz uchun<br></br> qulay joyga olib boriladi
          </H1>
        </div>
        <div>
          <Icon src="https://cdn-icons-png.flaticon.com/128/888/888034.png"></Icon>
          <H1>
            Hujjatlar rasmiylashtirish<br></br>15 daqiqadan oshmaydi
          </H1>
        </div>
        <div>
          <Icon src="https://cdn-icons-png.flaticon.com/128/641/641695.png"></Icon>
          <H1>
            Bizning mutaxassislarimiz <br></br>24/7 soatlik ish davomida
            ishlaydi
          </H1>
        </div>
        <div style={{ display: "flex" }}>
          <Div3>
            <Div4>
              <div>
                <Contact>
                  <H2>
                    <Icon2 src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png"></Icon2>
                    <h1>Telefon raqam: </h1>
                    <br />
                    <h4>
                      +998 99 565-54-55 <br></br>
                      +998 98 565-54-54
                    </h4>
                  </H2>
                </Contact>
                <Managment>
                  <Icon2 src="https://cdn-icons-png.flaticon.com/128/3743/3743163.png"></Icon2>
                  <h1>Hamkorlarimiz:</h1>
                  <h4>
                    <h2>Dubai:</h2> Crystal Car Rental: + 8801918754550
                  </h4>

                  <h4>
                    <h2>Turkiya:</h2>Azimli Ata: +90 530 400 7979
                  </h4>
                </Managment>

                <Location>
                  <H2>
                    <Icon2 src="https://t4.ftcdn.net/jpg/03/03/42/21/240_F_303422136_DLRVMAUj3FwrWFbrQQ0vjKh4QKKzQoZU.jpg"></Icon2>
                    <h1>Manzil:</h1>
                    <h4>
                      Toshkent shahri, Qorasaroy ko‘chasi,<br></br> 1-uy, 4-bino
                    </h4>
                  </H2>
                </Location>
              </div>
              <div>
                <Karta center={[41.330906, 69.245113]} zoom={13}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[41.330906, 69.245113]}
                    icon={L.icon({
                      iconUrl: require("./../images/marker_icon.png"),
                      iconSize: [20, 20],
                    })}
                  >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </Karta>
              </div>
            </Div4>
            <Ishonch>
              <h1>Bizga ishonch, O'zizga ishonch!</h1>
            </Ishonch>
          </Div3>
        </div>
      </Info>
    </Container>
  );
};

export default Home;
