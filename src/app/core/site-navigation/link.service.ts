
import { Injectable } from '@angular/core';
// import { Dexie } from 'dexie';
// import { DexieService } from '../dexie.service';
// import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import seedLinks from './seed-links';
import { tap, catchError } from 'rxjs/operators';

export interface LinkAttributes {
  id?: number;
  title: string;
  description?: string;
  path: string;
  disable?: boolean;
  expanded?: boolean;
  icon?: string;
  iconUrl?: string;
  showAt?: string;
  order?: number;
  createdDate?:  string | Date;
  lastUpdateDate?: string | Date;
  children?: any[];
}
export class Link {
  id?: number;
  title: string;
  description?: string;
  path: string;
  disable?: boolean;
  expanded?: boolean;
  icon?: string;
  iconUrl?: string;
  showAt?: string;
  order?: number;
  createdDate?: Date;
  lastUpdateDate?: Date;
  children?: Link[];

  constructor (link: LinkAttributes) {
    this.id = link.id;
    this.title = link.title;
    this.description = link.description;
    this.path = link.path;
    this.disable = !!link.disable;
    this.expanded = !!link.expanded;
    this.icon = link.icon;
    this.iconUrl = link.iconUrl;
    this.showAt = link.showAt;
    this.order = link.order;
    this.createdDate = new Date(link.createdDate + '');
    this.lastUpdateDate = new Date(link.lastUpdateDate + '');
    if ( link['children'] ) {
      this.children = this.getChildren(link['children']);
    }
  }

  static buildTree(links: any[]): Link {
    return null;
  }
  private getChildren(links: any[]): Link[] {
    return links.map(item => {
      return new Link(item);
    })
  }
}

enum LinkTypes {
  SidMenu = 'side-menu',
  Footer = 'footer',
  TopNav = 'top-navigation'
}

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  // private seedLinks: Array<any> = seedLinks;
  basePath = 'links';

  constructor( private http: HttpClient) {
  }

  // Example: .get({params: {sort: 'order,asc', filter: 'showAt eq side-menu'}})

  getAll<link>(): Observable<any[]> {
    return of(seedLinks);
  }

  // add(data) {
  //   // return this.table.add(data);
  //   return this.create<Link>(data);
  // }

  // // TODO: move this method o base class
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  // log(msg) {
  //   console.log(msg);
  // }

}





