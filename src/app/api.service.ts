import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //link API
  apiURL() {
    return 'http://localhost/backend';
  }

  getDataDiary() {
    return this.http.get(this.apiURL() + '/tampil_diary.php');
  }

  deleteDataDiary(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_diary.php?id=' + id);
  }

  ambilDataDiary(id: any) {
    return this.http.get(this.apiURL() + '/lihat_diary.php?id=' + id);
  }
}
