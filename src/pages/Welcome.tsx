import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonMenuButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div style={{ textAlign: "center", paddingTop: "20%" }}>
          <h1>Weather App</h1>
          <p>Check the weather in any city in the world!</p>
          <IonButton onClick={() => history.push("/search")}>
            Go to Search
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
