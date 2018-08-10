import { Injectable } from '@angular/core';
import {DATA} from '../../data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Promise<any>{
    return Promise.resolve(DATA);
  }
}
