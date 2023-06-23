import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Getstoreprocedure } from './Models/categories.model';

@Injectable({

  providedIn: 'root'

})
export class UsercategoryService {
private url='https://localhost:7186/api/Category';
constructor(private http:HttpClient) { }
getCategories(): Observable<any[]> {
return this.http.get<any[]>(this.url);
}

private b ='https://localhost:7186/api/inventory';
GetInventoriesByCategoryId(categoryId: number): Observable<any[]> {
  const url = `${this.b}/GetInventoriesByCategoryId/${categoryId}`;
  return this.http.get<any[]>(url);
}

GetInventoriesByCategoryId2(categoryId: number): Observable<any> {
  const url = `${this.b}/GetInventoriesByCategoryId/${categoryId}`;
  return this.http.get<any>(url);
}

// Url='https://localhost:7186/api/inventory';
// getAllUsersData():Observable<any>{
//   return this.http.get(this.Url);
// }

// ---------------------------------
// feedback
// ------------------------------------
private feedurl ='https://localhost:7186/api/UserFeedback';
createFeedback(feedback: any) {
return this.http.post(this.feedurl, feedback);
}
getFeedback(): Observable<any> {

  return this.http.get(`${this.feedurl}`);

}

// -------------------------------------
// Stored
// ----------------------------
private apiUrl = 'https://localhost:7186/api/Store/categories/';
getCategoryData(categoryName: string): Observable<Getstoreprocedure[]> {
  const url = this.apiUrl + categoryName;
  return this.http.get<Getstoreprocedure[]>(url);
}
}