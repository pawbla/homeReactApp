import React from 'react';
import {makeStyles } from '@material-ui/core/styles';

import pic1  from '../assets/weatherIcons/01.png';
import pic2  from '../assets/weatherIcons/02.png';
import pic3  from '../assets/weatherIcons/03.png';
import pic4  from '../assets/weatherIcons/04.png';
import pic5  from '../assets/weatherIcons/05.png';
import pic6  from '../assets/weatherIcons/06.png';
import pic7  from '../assets/weatherIcons/07.png';
import pic8  from '../assets/weatherIcons/08.png';
import pic11  from '../assets/weatherIcons/11.png';
import pic12  from '../assets/weatherIcons/12.png';
import pic13 from '../assets/weatherIcons/13.png';
import pic14  from '../assets/weatherIcons/14.png';
import pic15  from '../assets/weatherIcons/15.png';
import pic16  from '../assets/weatherIcons/16.png';
import pic17  from '../assets/weatherIcons/17.png';
import pic18  from '../assets/weatherIcons/18.png';
import pic19  from '../assets/weatherIcons/19.png';
import pic20  from '../assets/weatherIcons/20.png';
import pic21  from '../assets/weatherIcons/21.png';
import pic22  from '../assets/weatherIcons/22.png';
import pic23  from '../assets/weatherIcons/23.png';
import pic24  from '../assets/weatherIcons/24.png';
import pic25  from '../assets/weatherIcons/25.png';
import pic26  from '../assets/weatherIcons/26.png';
import pic29  from '../assets/weatherIcons/29.png';
import pic30  from '../assets/weatherIcons/30.png';
import pic31  from '../assets/weatherIcons/31.png';
import pic32  from '../assets/weatherIcons/32.png';
import pic33  from '../assets/weatherIcons/33.png';
import pic34  from '../assets/weatherIcons/34.png';
import pic35  from '../assets/weatherIcons/35.png';
import pic36  from '../assets/weatherIcons/36.png';
import pic37  from '../assets/weatherIcons/37.png';
import pic38  from '../assets/weatherIcons/38.png';
import pic39  from '../assets/weatherIcons/39.png';
import pic40  from '../assets/weatherIcons/40.png';
import pic41  from '../assets/weatherIcons/41.png';
import pic42  from '../assets/weatherIcons/42.png';
import pic43  from '../assets/weatherIcons/43.png';
import pic44  from '../assets/weatherIcons/44.png';

const useStyles = makeStyles(theme => ({
    page: {
      display: 'grid',
      gridGap: '15px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    },
    box: {
      boxShadow: '0 0 5px gray',
      padding: '0px 20px 10px 10px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: '#595959'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '8px 0px 10px 0px'
    },
    picture: {
      textAlign: 'center',
      margin: '8px 0px 10px 0px',
      '& span': {
        fontWeight: 'bold',
      },
      '& img': {
        marginBottom: '5px',
      }
    }
  }));

const pageTitle = "Pogoda";

function WeatherRender(props) {
  
  const styles = useStyles();

    const tempHumIn = [
      {name: "Temperatura", element: "temperature", unit: "\u00b0C", data: (props.datas.in)}, 
      {name: "Wilgotność", element: "humidity", unit: "%", data: (props.datas.in)}
    ];

    const tempHumOut = [
        {name: "Temperatura", element: "temperature", unit: "\u00b0C", data: (props.datas.out)}, 
        {name: "Wilgotność", element: "humidity", unit: "%", data: (props.datas.out)}
      ];

    const weather = [
      {icon: "weatherIcon", element: "weatherText", data: (props.datas.weather)},
      {name: "Ciśnienie", element: "pressure", unit: "hPa", data: (props.datas.weather)},
      {name: "Prędkość wiatru", element: "windSpeed", unit: "km/h", data: (props.datas.weather)}, 
      {name: "Kierunek wiatru", element: "windDirection", data: (props.datas.weather)}, 
      {name: "Zachmurzenie", element: "cloudCover", data: (props.datas.weather)},
      {name: "Pułap chmur", element: "ceiling", unit: "m", data: (props.datas.weather)}, 
      {name: "Widoczność", element: "visibility", unit: "km", data: (props.datas.weather)}
    ];

    const airCondition = [
      {name: "PM1", element: "pm1", data: (props.datas.airPolution)}, 
      {name: "PM10", element: "pm10", data: (props.datas.airPolution)}, 
      {name: "PM10", element: "pm10percent", value: "%", data: (props.datas.airPolution)}, 
      {name: "PM25", element: "pm25", data: (props.datas.airPolution)}, 
      {name: "PM25", element: "pm25percent", value: "%", data: (props.datas.airPolution)},
      {name: "CAQI", element: "caqi", value: "%", color: "caqiColor", data: (props.datas.airPolution)}
    ];

    const uvIndex = [
      {name: "UV Index", element: "uvIndexValue", color: "uvIndexColor", data: (props.datas.weather)}, 
      {name: "Opis", element: "uvIndexDescr", data: (props.datas.weather)}
    ];

    const dayLength = [
        {name: "Wschód Słońca", element: "rise", data: (props.datas.sun)}, 
        {name: "Zachód Słońca", element: "set", data: (props.datas.sun)},
        {name: "Długość dnia", element: "dayLength", data: (props.datas.sun)}
      ];

  return (
    <div>
      <div className={styles.page}>
        <WeatherComponent title="Wewnątrz" rows={tempHumIn}/>
        <WeatherComponent title="Na zewnątrz" rows={tempHumOut}/>
        <WeatherComponent title="Index UV" rows={uvIndex}/>
        <WeatherComponent title="Pogoda" rows={weather}/>
        <WeatherComponent title="Zanieczyszczenie powietrza" rows={airCondition}/>
        <WeatherComponent title="Dzień" rows={dayLength}/>
      </div>
    </div>

  )
}

export default WeatherRender;

function WeatherComponent(props) {

    const styles = useStyles();

    let picNo;
    let newColor;
    let newFontWeight;
  
    const textItem = (item) => (
        newColor = item.color ? item.data[item.color]["value"] : styles.box.color,
        newFontWeight = item.color ? "bold" : "normal",
        <div className={styles.text} style={{color: newColor, fontWeight: newFontWeight}}>
            <span>{item.name}</span>
            <span>{item.data[item.element]["value"]} {item.unit ? item.unit : ""}</span>
        </div>
    );
  
    const pictureItem = (item) => (
        picNo = item.data[item.icon]["value"],
        //add leading zeros when picNo < 10
        picNo = picNo <= 9 ? "0"+picNo : picNo,
        <div className={styles.picture}>
            <div>
                <img src={require(`../assets/weatherIcons/${picNo}.png`)} alt="Obraz jest niedostępny  "/>
            </div>
            <span>{item.data[item.element]["value"]}</span>
        </div>
    );
  
    const listOfItems = props.rows.map(item => 
      item.icon == null ? textItem(item) : pictureItem(item));
  
    return (
      <div className={styles.box}>
        <h3>{props.title}</h3>
          {listOfItems}
      </div>
    )
}