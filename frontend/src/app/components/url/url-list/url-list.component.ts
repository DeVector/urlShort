import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UrlService } from 'src/app/services/url.service';
import { Url } from '../../models/Url';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  ELEMENT_DATA: Url[] = []

  displayedColumns: string[] = ['id', 'urlNormal', 'urlShort', 'dateCreate', 'user'];
  dataSource = new MatTableDataSource<Url>(this.ELEMENT_DATA);

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: UrlService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Url>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
