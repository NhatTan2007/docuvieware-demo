import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocuviewareResponse } from '../models/docuvieware-response';

@Injectable({
  providedIn: 'root'
})
export class DocuviewareClientApiService {
  DOCUVIEWARE_CONTROL_ID = 'DocuVieware1';
  DOCUVIEWARE_ENDPOINT_BASE_URL = 'http://localhost:5000/api/DocuVieware';
  DOCUVIEWARE_GETMARKUP_ENDPOINT = 'GetDocuViewareControl';

  constructor(private httpClient: HttpClient) {
  }

  getDocuViewareMarkup(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const docuViewareConfig = {
      SessionId: 'mySessionId', // Set to an arbitrary value, should be replaced by the session identifier from your session mechanism
      ControlId: this.DOCUVIEWARE_CONTROL_ID,
      AllowPrint: true,
      EnablePrintButton: true,
      AllowUpload: true,
      EnableFileUploadButton: true,
      CollapsedSnapIn: true,
      ShowAnnotationsSnapIn: true,
      EnableRotateButtons: true,
      EnableZoomButtons: true,
      EnablePageViewButtons: true,
      EnableMultipleThumbnailSelection: true,
      EnableMouseModeButtons: true,
      EnableFormFieldsEdition: true,
      EnableTwainAcquisitionButton: true,
    };
    return this.httpClient.post(`${this.DOCUVIEWARE_ENDPOINT_BASE_URL}/${this.DOCUVIEWARE_GETMARKUP_ENDPOINT}/`, docuViewareConfig, httpOptions);
  }
}
