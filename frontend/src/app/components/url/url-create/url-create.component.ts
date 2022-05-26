import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UrlService } from 'src/app/services/url.service';
import { Url } from '../../models/Url';

@Component({
  selector: 'app-url-create',
  templateUrl: './url-create.component.html',
  styleUrls: ['./url-create.component.css']
})
export class UrlCreateComponent implements OnInit {

  url: Url = {
    id: '',
    urlNormal: '',
    urlShort: '',
    dateCreate: '',
    user: ''
  }

  urlNormal: FormControl = new FormControl(null, Validators.required);
  user: FormControl = new FormControl(null, Validators.required);

  constructor(private service: UrlService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  save(){
    this.service.save(this.url).subscribe(response => {
      this.toast.success('Url created with success', 'Create');
    }, ex => {
      console.log(ex);
    })
  }

  validarCampos(): Boolean{
    return this.urlNormal.valid && this.user.valid;
  }

}
