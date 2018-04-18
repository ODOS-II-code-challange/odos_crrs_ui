import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { JhiEventManager } from "ng-jhipster";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { Account, LoginModalService, Principal } from "../shared";

@Component({
    selector: 'jhi-conference-room',
    templateUrl: './conference-room.component.html',
    styleUrls: [
      'conference-room.scss'
    ]

})
export class ConferenceRoomComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    building_info: {};
    conference_room_names = [];
    selectedRoom : string;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.getBuildigInfo(params['id']));
        this.route.snapshot.data['type'];
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

    getBuildigInfo(building_number: Number){

        this.conference_room_names = ["KitKat", "Twix", "Mars", "M&Ms"];

        this.building_info = {
            "building_number": building_number,
            "building_name": "Headquarters",
            "building_address" : "20 New York Ave, NW Washington DC 20012-9023",
            "building_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum, ipsum iure molestias obcaecati provident quaerat quo vitae voluptatem?",
            "conference_room":
                {
                    "room_name": "KitKat",
                    "room_number": 142,
                    "room_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum,",
                    "room_capacity": 10,
                    "equipment" : [{
                        "equipment_name": "projector"
                        },
                        {
                            "equipment_name": "audio"
                        },
                        {
                            "equipment_name": "projector"
                        }
                    ]
                }

        }

    }
}
