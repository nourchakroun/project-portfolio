import { FeaturesService } from './../../service/features.service';
import { Features } from './../../models/features';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Features[];
  constructor(private featureService : FeaturesService) {
    
   }

  ngOnInit(): void {
    this.getFeatures();
  }
  private getFeatures(){
    this.featureService.getFeatureList().subscribe(data =>{
      this.features = data;
    })
  }

}
