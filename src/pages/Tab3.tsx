import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonListHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groceries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Groceries</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonList>
      <IonListHeader>
        <IonLabel>Item</IonLabel>
        <IonLabel>Amount</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel>Bannana</IonLabel>
        <IonLabel>3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Bread</IonLabel>
        <IonLabel>2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Scrunchies</IonLabel>
        <IonLabel>4</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
