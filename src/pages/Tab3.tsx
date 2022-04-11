import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList,IonItemSliding, IonLabel, IonListHeader, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {trash} from 'ionicons/icons';
import './Tab3.css';

var data = [
  {
    name: "Bread",
    amount: 4
  },
  {
    name: "Milk",
    amount: 3
  },
  {
    name: "Sports Bras",
    amount: 1
  }

]



function removeItem(item: any, list: any){
  console.log("Removing Item:", item);
  for (let i = 0; i < list.length; i++){
    let obj = JSON.parse(list[i]);
    if(obj.name == item){
      list.pop(i);
      return list
    }
  }
}

function addItem(item: any, itemAmount: number, list: any){
  console.log("Adding Item:", item);
  var data = {
    "name": item,
    "amount": itemAmount
  }
  list.push(data)
  return list
}



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
      {
        data.map(({name, amount}) => (
          <IonItemSliding>
            <IonItem>
              <IonLabel>{name}</IonLabel>
              <IonLabel>{amount}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => removeItem({name}, data)} color="danger">
              <IonIcon slot="end" icon={trash} />
              Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))
      }


    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
