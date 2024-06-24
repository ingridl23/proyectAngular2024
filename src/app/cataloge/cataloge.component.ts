import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
  styleUrl: './cataloge.component.scss'
})
export class CatalogeComponent {

  constructor(private http: HttpClient) {}

  descargarPDF() {
    const url = 'assets/catalogo/Ecatalog-AtPlay-2023-Abril-ecatalog.pdf';
    this.http.get(url, { responseType: 'blob' }).subscribe((data: Blob) => {
      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'Ecatalog-AtPlay-2023-Abril-ecatalog.pdf';
      link.click();
    });
  }
}


