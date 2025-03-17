import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenuButton,
  IonSpinner,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const CityPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { data: weather, loading, error } = useWeather(cityName);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>{cityName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading && <IonSpinner name="crescent" />}
        {error && <p>Error: {error}</p>}
        {weather && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{(weather as WeatherData).city}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div style={{ textAlign: "center" }}>
                <h2>{(weather as WeatherData).temperature}°C</h2>
                <p>{(weather as WeatherData).description}</p>
                <p>Humidity: {(weather as WeatherData).humidity}%</p>
                <p>Wind: {(weather as WeatherData).windSpeed} m/s</p>
              </div>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CityPage;
