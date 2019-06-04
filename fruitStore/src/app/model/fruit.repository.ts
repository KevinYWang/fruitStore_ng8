import { Injectable } from "@angular/core";
import { Fruit } from "./fruit.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class FruitRepository {
    private fruits: Fruit[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getFruits().subscribe(data => {
            this.fruits = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getFruits(category: string = null): Fruit[] {
        return this.fruits
            .filter(p => category == null || category == p.category);
    }

    getFruit(id: number): Fruit {
        return this.fruits.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}