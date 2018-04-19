import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import {ChartModule} from 'primeng/chart';
import {NgbDateStruct, NgbCalendar, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
// import { TabsModule, BsDropdownModule } from 'ngx-bootstrap';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
  selector: 'jhi-report',
  templateUrl: './report.component.html',
  styleUrls: [
      'report.scss'
  ]
})
export class ReportComponent implements OnInit {
    filteredOption: string;
    account: Account;
    modalRef: NgbModalRef;


    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }
    
    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
    Report_table_header={
        "Building": 1,
        "ConfRm": 1,
        "User": 1
    }
    tittle = ["Conference room Name", "Reserver", "Time"];
    filterByBld(){
        this.filteredOption="building";
        this.tittle = ["Conference room Name", "Reserver", "Time"];
        
    }
    filterByRoom(){
        this.filteredOption="Room";
        this.tittle = ["Building Name", "Reserver", "Conference Tittle", "Time"];
        
    }
    filterByUser(){
        this.filteredOption="User";
        this.tittle = ["Building Name", "Conference room Name", "Conference Tittle", "Time"];

    }
}
