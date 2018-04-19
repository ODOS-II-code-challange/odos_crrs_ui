import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    buildings: any;

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
        this.buildings = [
            {
                "id": 1,
                "building_name": "Building A",
                "building_description": "building a: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum, ipsum iure molestias obcaecati provident quaerat quo vitae voluptatem?\n",
                "conference_rooms":[
                    {
                        "room_number": 43,
                        "room_name": "conference room a"
                    },
                    {
                        "room_number": 9,
                        "room_name": "conference room b"
                    },
                    {
                        "room_number": 33,
                        "room_name": "conference room c"
                    },
                    {
                        "room_number": 501,
                        "room_name": "conference room b"
                    }
                ]
            },
            {
                "id": 2,
                "building_name": "Building B",
                "building_description": "building b: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum, ipsum iure molestias obcaecati provident quaerat quo vitae voluptatem?\n",
                "conference_rooms":[
                    {
                        "room_number": 123,
                        "room_name": "conference room 1"
                    },
                    {
                        "room_number": 23,
                        "room_name": "conference room 2"
                    }
                ]
            },
            {
                "id": 3,
                "building_name": "Building C ",
                "building_description": "building c: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum, ipsum iure molestias obcaecati provident quaerat quo vitae voluptatem?\n",
                "conference_rooms":[
                    {
                        "room_number": 13,
                        "room_name": "conference room a"
                    },
                    {
                        "room_number": 3,
                        "room_name": "conference room b"
                    }
                ]


            }
        ];
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
}
