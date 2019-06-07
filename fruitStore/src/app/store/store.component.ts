import { Component, OnInit } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { FruitRepository } from '../model/fruit.repository';
import { Cart } from '../model/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public pageSize = 4;
  public selectedPage = 1;

  constructor(
    private fruitRepository: FruitRepository,
    private cart: Cart,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get fruits(): Fruit[] {
    let pageIndex = (this.selectedPage - 1) * this.pageSize;
    return this.fruitRepository
      .getFruits(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.pageSize);
  }

  get categories(): string[] {
    return this.fruitRepository.getCategories();
  }

  get pageNumbers(): number[] {
    let totalPageNumber = Math.ceil(this.fruitRepository
      .getFruits(this.selectedCategory).length / this.pageSize);
    return Array(totalPageNumber)
      .fill(0)
      .map((x, i) => i + 1);
  }

  get pageCounter(): number {
    return Math.ceil(this.fruitRepository
      .getFruits(this.selectedCategory).length / this.pageSize);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPageNumber: number) {
    this.selectedPage = newPageNumber;
  }

  changePageSize(newPageSize: string) {
    this.pageSize = Number(newPageSize);
    this.selectedPage = 1;
  }

  addFruitToCart(fruit: Fruit) {
    this.cart.addLine(fruit);
    //this.router.navigateByUrl("/cart")/
  }
}
