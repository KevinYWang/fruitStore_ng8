import { NgModule } from "@angular/core";
import { FruitRepository } from "./fruit.repository";
import { StaticDataSource } from "./static.datasource";
import {Cart } from './car.model';

@NgModule({
    providers: [FruitRepository, StaticDataSource, Cart]
})
export class ModelModule { }
