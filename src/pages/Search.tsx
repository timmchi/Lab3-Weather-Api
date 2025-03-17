import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonMenuButton,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e: React.KeyboardEvent<HTMLIonSearchbarElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      history.push(`/city/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonMenuButton slot="start" />
          <IonTitle>Search City</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchQuery}
          onIonInput={(e) => setSearchQuery(e.target.value as string)}
          placeholder="Enter the name of the city"
          debounce={500}
          onKeyDown={handleSearch}
        />
      </IonContent>
    </IonPage>
  );
};

export default Search;
