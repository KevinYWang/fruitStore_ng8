import { Component, OnInit } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { FruitRepository } from '../model/fruit.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fruitRepository: FruitRepository) { }

  ngOnInit() {
  }

  get fruits(): Fruit[] {
    return this.fruitRepository.getFruits();
  }

  get categories(): string[] {
    return this.fruitRepository.getCategories();
  }
}
