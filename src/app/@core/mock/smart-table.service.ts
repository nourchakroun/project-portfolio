import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';
@Injectable()
export class SmartTableService extends SmartTableData {
  users: any;
  http : HttpClient;
  public getData(): any[] {
    
    
   let  Response= this.http.get("http://localhost:8080/api/v1/users");
    Response.subscribe((data)=>this.users=data);
    return 
  }

   
    
  
}

