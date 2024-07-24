import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-consultant',
  templateUrl: './form-consultant.component.html',
  styleUrl: './form-consultant.component.scss'
})
export class FormConsultantComponent {

  //title = 'my-angular-app';
  data: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((response: any) => {
      this.data = response;
    });
  }

  onSubmit(formData: any) {
    this.dataService.postData(formData).subscribe((response: any) => {
      console.log('Datos enviados', response);
      this.loadData();
    });
  }
}

