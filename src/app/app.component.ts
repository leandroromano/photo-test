import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photo-taker';

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.showCam();
  }


  showCam() {
    const video: any = document.querySelector("video");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        // tslint:disable-next-line: only-arrow-functions
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
      video.play();
    }
  }

}
