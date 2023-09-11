import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private data_storage: DataStorageService) {}

  Save() {
    this.data_storage.recipeStore();
  }

  Fetch() {
    this.data_storage.recipeFetch().subscribe();
  }
}
