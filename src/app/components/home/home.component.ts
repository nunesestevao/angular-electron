import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private maximized:boolean = false;
  
  constructor(private electron: ElectronService) { }

  ngOnInit() {}

  maxmizeWindow() {
    if(this.maximized){
      this.electron.window.restore();
      this.maximized = false;
    }else{
      this.electron.window.maximize();
      this.maximized = true;
    }
  }

  minimizeWindow() {
    this.electron.window.minimize();
  }

  closeWindow() {
    this.electron.window.close();
  }
}
