import { Component, OnInit } from '@angular/core';
import { DocuviewareClientApiService } from '../services/docuvieware-client-api.service';

@Component({
  selector: 'app-docuvieware',
  templateUrl: './docuvieware.component.html',
  styleUrls: ['./docuvieware.component.css']
})
export class DocuviewareComponent implements OnInit {

  constructor(private dvApi: DocuviewareClientApiService) {
  }
  htmlMarkup: any;

  private static insertInDOM(content: string): void {
    const fragment = document.createRange().createContextualFragment(content);
    document.getElementById('dvContainer').appendChild(fragment);
  }
  ngOnInit() {
    this.dvApi.getDocuViewareMarkup().subscribe(
      response => DocuviewareComponent.insertInDOM(response.htmlContent),
      error => this.htmlMarkup = error as any
    );
  }
}
