import { Injectable } from '@angular/core';
import { Fruit } from './fruit.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(fruit: Fruit, quantity: number = 1) {
    let line = this.lines.find(line => line.fruit.id == fruit.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(fruit, quantity));
    }
    this.recalculate();

  }

  updateQuantity(fruit: Fruit, quantity: number) {
    let line = this.lines.find(x => x.fruit.id == fruit.id);
    if (line != undefined) {
      line.quantity += quantity;
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex(x => x.fruit.id == id);
    this.lines.slice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(x => {
      this.itemCount += x.quantity;
      this.cartPrice += (x.fruit.price * x.quantity);
    })
  }
}


export class CartLine {
  constructor(public fruit: Fruit, public quantity: number) {

  }

  get lineTotal() {
    return this.quantity * this.fruit.price;
  }
}
