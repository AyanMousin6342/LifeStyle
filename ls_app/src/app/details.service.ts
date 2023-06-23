import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { category } from './Models/categories.model';
import { Observable } from 'rxjs';
import { UserloginComponent } from './userlogin/userlogin.component';

@Injectable({

  providedIn: 'root'

})

export class DetailsService {

  constructor(private http:HttpClient) { }

  baseurl='https://localhost:7186/api/Adminlogin/LoginAdmin';

loginadmin(logininfo :Array<string>){

  return this.http.post(this.baseurl,
  {
    Email :logininfo[0],
    Password :logininfo[1],
  },
  {
    responseType:'text',
  });
}

Url='https://localhost:7186/api/Category';

getCategories() {
  return this.http.get<any>(this.Url);
}

createCategory(category_list: category) {
  return this.http.post<category>(this.Url, category_list);
}
getCategoriesByName(name: string): Observable<category[]> {
  return this.http.get<category[]>(`${this.Url}/Category/categories?name=${name}`);
}

editCategory(updatedCategory: any):Observable<any>{
  const url = `${this.Url}/${updatedCategory.category_id}`;
  return this.http.put<any>(url, updatedCategory);
}

deleteCategory(id: string) {
  return this.http.delete(this.Url + '/' + id);
}

// -------------------------------------
inventoriesUrl='https://localhost:7186/api/inventory';

addUserProfileDetails(formData: any): Observable<any> {
  return this.http.post<any>(this.inventoriesUrl, formData);
}

getSingleUserDetails(id: number): Observable<any> {
  const url = `${this.inventoriesUrl}/${id}`; // Include the id in the URL
  return this.http.get<any>(this.inventoriesUrl+"/"+id);
}
getAllUsersData():Observable<any>{
  return this.http.get(this.inventoriesUrl);
}
updateUserProfile(id: number, userData: any): Observable<any> {
  return this.http.put<any>(this.inventoriesUrl+"/"+id, userData);
}

// ----------------------------



 deleleUserProfile(id:number):Observable<any>{
    return this.http.delete(this.inventoriesUrl+"/"+id);
 }
 
 UserSignUp(userData:any):Observable<any>{
  return this.http.post<any>(this.inventoriesUrl, userData);
}


// ----------------------------------
// Userlogin
// --------------------------------
private apiUrl = 'https://localhost:7186/api/UserSignUp/addUser';
      signup(userData: any): Observable<any> {
       return this.http.post(`${this.apiUrl}`, userData);
    }
private logurl ='https://localhost:7186/api/UserSignUp/userLogin';
  login(loginData: any): Observable<any> {
    return this.http.post(`${this.logurl}`, loginData);

  }


private id = 'https://localhost:7186/api/inventory';

getInventories(category_id:number): Observable<any[]> {

    const url = `${this.id}/getInventoriesByCategoryId/${category_id}`;

    return this.http.get<any[]>(url);

  }

}
