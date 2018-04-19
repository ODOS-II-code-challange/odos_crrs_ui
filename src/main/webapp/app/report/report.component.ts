import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { ChartModule } from 'primeng/chart';
import { NgbDateStruct, NgbCalendar, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-report',
    templateUrl: './report.component.html',
    styleUrls: [
        'report.scss'
    ]
})
export class ReportComponent implements OnInit {
    data: any;
    filteredOption: string;
    account: Account;
    modalRef: NgbModalRef;


    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {
        this.data = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'Number of Reservations',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [5, 10, 15, 20, 25, 30]
                },
                {
                    label: 'Number of Cancelations',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
                }
            ]
        }
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



    Report_table_header = {
        "Building": 1,
        "ConfRm": 1,
        "User": 1
    }
    tittle = ["Building Name", "Conference room Name", "Reserver", "Time"];

    filterByBld() {
        this.filteredOption = "building";
        this.tittle = ["Conference room Name", "Reserver", "Time"];

    }
    filterByRoom() {
        this.filteredOption = "Room";
        this.tittle = ["Building Name", "Reserver", "Conference Tittle", "Time"];


    }
    filterByUser() {
        this.filteredOption = "User";
        this.tittle = ["Building Name", "Conference room Name", "Conference Tittle", "Time"];

    }
}
