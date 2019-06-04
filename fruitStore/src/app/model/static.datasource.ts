import { Injectable } from "@angular/core";
import { Fruit } from "./fruit.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private fruits: Fruit[] = [
        new Fruit(1, "Fruit 1", "Category 1", "Fruit 1 (Category 1)", 100),
        new Fruit(2, "Fruit 2", "Category 1", "Fruit 2 (Category 1)", 100),
        new Fruit(3, "Fruit 3", "Category 1", "Fruit 3 (Category 1)", 100),
        new Fruit(4, "Fruit 4", "Category 1", "Fruit 4 (Category 1)", 100),
        new Fruit(5, "Fruit 5", "Category 1", "Fruit 5 (Category 1)", 100),
        new Fruit(6, "Fruit 6", "Category 2", "Fruit 6 (Category 2)", 100),
        new Fruit(7, "Fruit 7", "Category 2", "Fruit 7 (Category 2)", 100),
        new Fruit(8, "Fruit 8", "Category 2", "Fruit 8 (Category 2)", 100),
        new Fruit(9, "Fruit 9", "Category 2", "Fruit 9 (Category 2)", 100),
        new Fruit(10, "Fruit 10", "Category 2", "Fruit 10 (Category 2)", 100),
        new Fruit(11, "Fruit 11", "Category 3", "Fruit 11 (Category 3)", 100),
        new Fruit(12, "Fruit 12", "Category 3", "Fruit 12 (Category 3)", 100),
        new Fruit(13, "Fruit 13", "Category 3", "Fruit 13 (Category 3)", 100),
        new Fruit(14, "Fruit 14", "Category 3", "Fruit 14 (Category 3)", 100),
        new Fruit(15, "Fruit 15", "Category 3", "Fruit 15 (Category 3)", 100),
    ];

    getFruits(): Observable<Fruit[]> {
        return from([this.fruits]);
    }
}