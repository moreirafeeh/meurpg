import { Component, OnInit } from '@angular/core';
import {trigger,state, style, transition, animate} from '@angular/animations'
import { snackService } from './snack.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({opacity: 0,bottom: '0px' })),
      state('visible', style({opacity: 1,bottom: '30px'})),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility:string  = 'hidden';
  message:string;

  constructor(private notificationService:snackService) { }

  ngOnInit() {

    this.notificationService.notifier.subscribe(message => {this.message = message; this.snackVisibility = 'visible'})

  }

 
}
