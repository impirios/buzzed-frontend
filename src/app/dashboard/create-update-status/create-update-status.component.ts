import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-create-update-status',
  templateUrl: './create-update-status.component.html',
  styleUrls: ['./create-update-status.component.scss']
})
export class CreateUpdateStatusComponent implements OnInit {
  content = "";
  constructor(private statusService: StatusService) {

  }

  save() {
    this.statusService.createStatus({ content: this.content }).subscribe(x => {
      console.log(x);
      window.location.reload()
    })
  }

  ngOnInit() {
  }

}
