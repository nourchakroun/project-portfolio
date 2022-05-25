import { SiteService } from './../../service/site.service';
import { Component, OnInit } from '@angular/core';
import { Site } from '../../models/site';

@Component({
  selector: 'ngx-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  sites: Site[];
  constructor(private siteService : SiteService) { }

  ngOnInit(): void {
    
    this.getSites();
  }
  private getSites(){
    this.siteService.getSiteList().subscribe(data =>{
      this.sites = data;
    })
  }

}
