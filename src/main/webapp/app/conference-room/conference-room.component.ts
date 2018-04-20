import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { JhiEventManager } from "ng-jhipster";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';

import { Account, LoginModalService, Principal } from "../shared";
import { isSameDay, isSameMonth } from 'date-fns';

@Component({
    selector: 'jhi-conference-room',
    templateUrl: './conference-room.component.html',
    styleUrls: [
        'conference-room.scss'
    ]

})
export class ConferenceRoomComponent implements OnInit {
    
    en: any;
    date10: Date;
    date: Date;

    account: Account;
    modalRef: NgbModalRef;
    building_info: {};
    conference_room_names = [];
    selectedRoom: string;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Today',
            clear: 'Clear'
        }



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

    getBuildigInfo(building_number: Number) {

        this.conference_room_names = ["KitKat", "Twix", "Mars", "M&Ms"];
        this.selectedRoom = this.conference_room_names[0];

        this.building_info = {
            "building_number": building_number,
            "building_name": "Headquarters",
            "building_address": "20 New York Ave, NW Washington DC 20012-9023",
            "building_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum, ipsum iure molestias obcaecati provident quaerat quo vitae voluptatem?",
            "conference_room":
                {
                    "room_name": "KitKat",
                    "room_number": 142,
                    "room_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem harum in libero officiis, quos repellat velit! Alias animi dicta, dolorum,",
                    "room_capacity": 10,
                    "equipment": [{
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
