import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Constants } from 'src/constants';
import { Router } from '@angular/router';
import { EndpointConfigService } from '../../app/endpoint-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  private items: MenuItem[];
  private activeItem: MenuItem;
  private joinExistingGame = true;
  private showValidators = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private endpointConfigService: EndpointConfigService) {}

  joiningUserForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(18)]],
    roomCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
  });

  startNewGameForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(18)]]
  });



  ngOnInit() {
    this.joiningUserForm.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.items = [
      {label: Constants.join, icon: 'fa fa-play'},
      {label: Constants.new, icon: 'fa fa-plus'}
    ];

    this.activeItem = this.items[0];
  }

  onMenuItemClick(event) {
    switch(event.label) {
      case Constants.new:
        this.joinExistingGame = false;
        break;
      case Constants.join:
        this.joinExistingGame = true;
        break;
    }
  }

  onJoinLobbyClick() {
    console.log(this.joiningUserForm);
    alert(`Joining game with username ${this.joiningUserForm.value.username}`+
    `and room code ${this.joiningUserForm.value.roomCode}`);
    // this.router.navigateByUrl('/lobby').then(r => );
  }

  private routeDataConfig(data, routeUrl) {
    const route = this.router.config.find(r => r.path === routeUrl);
    route.data = { gameId: data };

    this.router.navigateByUrl(routeUrl);
  }

  onStartNewGameClick() {
    this.endpointConfigService.getNewGameId().subscribe(data => {
    this.routeDataConfig(data.gameId, 'lobby');
    }, (err) => console.log(err));
  }

}
