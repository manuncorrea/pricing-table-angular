import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})


export class CardsComponent implements OnInit {

  public titleFree: string | undefined;
  public titleBasic: string | undefined;
  public titleProfessional: string | undefined;

  public priceFree: number | undefined;
  public priceBasic: number | undefined;
  public priceProfessional: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.titleFree = "Free"
    this.titleBasic = "Básico"
    this.titleProfessional = "Profissional"


    this.priceFree = 0
    this.priceBasic = 29
    this.priceProfessional = 59
  }



}
