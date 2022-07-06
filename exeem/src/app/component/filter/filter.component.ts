import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  settingIconappear = false;

  constructor() { }

  ngOnInit(): void {
  }

  settingdisappear() {
    this.settingIconappear = false;
    document.getElementById('settingbar')!.style.display = 'none';
  }

  settingclick() {
    this.settingIconappear = !this.settingIconappear;
    switch (this.settingIconappear) {
      case true:
        document.getElementById('settingbar')!.style.display = 'flex';
        break;
      case false:
        document.getElementById('settingbar')!.style.display = 'none';
        break;
    }
  }

}
