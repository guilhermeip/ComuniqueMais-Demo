import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { PhonePipe } from '../pipes/phone.pipe';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  url = 'https://api.infobip.com/sms/1/text/single';
  list: any[] = [];
  flag = false;

  constructor(private http: Http) {}

  ngOnInit() {
    this.list = [
      {name: 'Kaio D.', number: '5544997496564'},
      {name: 'Augusto D.', number: '5562981682335'}
    ];
  }

  onSubmit(f) {
    if (f.valid) {
      const body = {
        text: f.value.message,
        to: [f.value.select]
      };

      const header = new Headers();
      header.append('Authorization', 'Basic cmFmYWVsLmxpYmVyYXRvOmhha2VudXRmcHI=');

      this.http.post(this.url, body, {
        headers: header
      })
      .subscribe(response => {
        if (response.status === 200) {
          this.flag = true;
          setTimeout(() => {
            this.flag = false;
          }, 2000);
          f.reset();
        }
      });
    }
  }

}
