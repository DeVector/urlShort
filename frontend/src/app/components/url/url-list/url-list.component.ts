import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Url } from '../../models/Url';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  ELEMENT_DATA: Url[] = [
    {
      id: 1,
      urlNormal: 'linkedin.com',
      urlShort: 'bGlua2VkaW4uY29t',
      dateCreate: '25/05/2022',
      user: 1
    }
  ]

  displayedColumns: string[] = ['id', 'urlNormal', 'urlShort', 'dateCreate', 'user'];
  dataSource = new MatTableDataSource<Url>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

}
