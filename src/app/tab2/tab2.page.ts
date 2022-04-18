import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Grocery";

  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) {}

  loadItems() {
    return this.dataService.getItems();
  }  

  async removeItem(item, index) {
    console.log("Removing Item: ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item: ' + index,
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);  
  }
  async editItem(item, index) {
    console.log("Edit Item ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item:' + index,
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  } 

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }


}
