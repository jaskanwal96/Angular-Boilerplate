import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberServiceResponse } from '../_components/users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  API_URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<MemberServiceResponse>(this.API_URL);
  }
}
