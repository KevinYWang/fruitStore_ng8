import { NgModule } from "@angular/core";
import { FruitRepository } from "./fruit.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [FruitRepository, StaticDataSource]
})
export class ModelModule { }