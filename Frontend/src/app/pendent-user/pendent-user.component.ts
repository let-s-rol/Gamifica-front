import { Component, OnInit } from '@angular/core';
import { PendentList } from '../inferfaces/pendentList';

@Component({
  selector: 'app-pendent-user',
  templateUrl: './pendent-user.component.html',
  styleUrls: ['./pendent-user.component.css'],
})
export class PendentUserComponent implements OnInit {
  pendentList!: PendentList[];

  constructor() {
    const pendentListJSON: string = `{
      "users": [
        {

      "ranking":"smx",
      "name":"wiktor",
      "lastName":"calderon",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

    },
        {
      "ranking":"daw",
      "name":"manuel",
      "lastName":"dolepki",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

    }
    ]
      }`;

    const pendentListDict: any = JSON.parse(pendentListJSON);
    this.pendentList = pendentListDict['users'];
  }
  ngOnInit(): void {}
}
