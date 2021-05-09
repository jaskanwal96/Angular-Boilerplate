import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../_providers/members.service';
import { MemberServiceResponse } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  members: MemberServiceResponse[];
  constructor(private membersService: MembersService) { }

  tableColumns = ['Name', 'Email', 'Roles', 'Actions'];

  ngOnInit(): void {
    this.rowWithMax1s([[0],[0],[0],[0]], 4, 1);
  }

  rowWithMax1s(arr, n, m){
    let columnIterator = m - 1;
    let rowIterator = 0;
    let max1s = -1;
    while (columnIterator >= 0 && arr[rowIterator][columnIterator] !== 0){
        columnIterator--;
        max1s = 0;
        console.log(max1s, columnIterator);
    }
    
    console.log(max1s, columnIterator);
    
    if (max1s === 0) {
        ++columnIterator;
    }
    ++rowIterator;
    
    if(columnIterator === 0) return 0;
    while (rowIterator < m) {
        while (columnIterator > 0 && arr[rowIterator][columnIterator - 1] === 1) {
            --columnIterator;
            max1s = rowIterator;
        }
        rowIterator++;
    }
    
    return max1s;
}

}
