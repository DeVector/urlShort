import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
import { Url } from '../../models/Url';

@Component({
  selector: 'app-url-update',
  templateUrl: './url-update.component.html',
  styleUrls: ['./url-update.component.css']
})
export class UrlUpdateComponent implements OnInit {

  url: Url = {
    id: '',
    urlNormal: '',
    urlShort: '',
    dateCreate: '',
    user: ''
  }

  constructor(
    private service: UrlService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.url.urlShort = this.route.snapshot.paramMap.get('urlShort');
    this.findById();
  }

  findById(){
    this.service.findById(this.url.urlShort).subscribe( response => {
      this.url = response;
    })
  }

}
