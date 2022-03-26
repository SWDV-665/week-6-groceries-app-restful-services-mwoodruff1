import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>
            Gwen Woodruff
          </IonLabel>
          
        </IonItem>
        <IonItem>
          <IonLabel>
            0819764
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
