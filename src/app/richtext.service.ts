import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBlog} from './iblog';

@Injectable({
  providedIn: 'root'
})
export class RichtextService {
  private readonly API_URL = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  getBlog(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.API_URL}`);
  }

  createBlog(post: Partial<IBlog>): Observable<IBlog> {
    return this.http.post<IBlog>(`${this.API_URL}`, post);
  }
}
