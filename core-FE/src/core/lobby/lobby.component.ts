import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointConfigService } from '../../app/endpoint-config.service';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  public gameId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private endpointConfigService: EndpointConfigService) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  private validateRoute(routeData): void {
    if (!Object.keys(routeData).length) {
      this.router.navigateByUrl('');
    }
  }

  initSubscriptions() {
    this.route.data.subscribe(data => {
      this.validateRoute(data);
      this.gameId = data.gameId;
    });




  }

}
