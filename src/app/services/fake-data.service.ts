import { Injectable } from "@angular/core";
import { PortataModel } from "../interfaces/PortataModel";

@Injectable({
  providedIn: "root",
})
export class FakeDataService {
  public listPortata: PortataModel[];

  constructor() {
    this.Initialize();
  }

  Initialize() {
    this.listPortata = [
      {
        id: 1,
        nome: "Petto di pollo",
      },
      {
        id: 2,
        nome: "Vellutata",
      },
      {
        id: 3,
        nome: "Pizza",
      },
      {
        id: 4,
        nome: "Pasta",
      },
    ];
  }
}


