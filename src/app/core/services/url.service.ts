import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  private routeStatus: any;
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }

  public getCurrentUrl() {
    return this.currentUrl;
  }

  public setRouteStatus(status) {
    this.routeStatus = status;
    return this.routeStatus;
  }
  public getRouteStatus(): number {
    return this.routeStatus;
  }
}
