import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { home, search } from "ionicons/icons";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Weather App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => history.push("/")}>
            <IonIcon icon={home} slot="start" />
            Home
          </IonItem>
          <IonItem button onClick={() => history.push("/search")}>
            <IonIcon icon={search} slot="start" />
            Search
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
