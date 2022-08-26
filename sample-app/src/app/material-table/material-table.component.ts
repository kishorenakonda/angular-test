import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUserList() {
    this.userService.getUserList(
      (response: any) => {
        console.log("<-- response from user list -->", response);
        if (response && response.status && response.status.toLowerCase() === 'success' && response.data.length > 0) {
          this.dataSource.data = response.data;
        }
      },
      (error: any) => {
        console.log("<-- error from user list -->", error);
      }
    );
  }

}
