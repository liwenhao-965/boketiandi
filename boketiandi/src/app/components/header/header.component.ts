import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  showLoading = false;
  ngOnInit(): void {
  }
  onSearch(term:any) {
    console.log(term);
}

toggleLoading() {
  this.showLoading = true;
  setTimeout(() => {
        this.showLoading = false;
    }, 1000);
}

}
