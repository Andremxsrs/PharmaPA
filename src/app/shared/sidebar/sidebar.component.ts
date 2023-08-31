import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('sidebarElement') sidebarElement!: ElementRef;
  @ViewChild('toggle') toggle!: ElementRef;
  @ViewChild('searchBtn') searchBtn!: ElementRef;
  @ViewChild('modeSwitch') modeSwitch!: ElementRef;
  @ViewChild('modeText') modeText!: ElementRef;
  
  isSidebarClosed = false;
  darkMode = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  openSidebar() {
    this.isSidebarClosed = false;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.modeText.nativeElement.innerText = "Light mode";
    } else {
      this.modeText.nativeElement.innerText = "Dark mode";
    }
  }
}
