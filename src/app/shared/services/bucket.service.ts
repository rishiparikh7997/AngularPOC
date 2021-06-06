import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  constructor(private http: HttpClient) {}

  addBucketName(bucketName: string) {
    const URL = `${environment.bucketEndpoint}`;
    return this.http.post(URL, null, {
      params: {
        bucketName,
      },
    });
  }
}
