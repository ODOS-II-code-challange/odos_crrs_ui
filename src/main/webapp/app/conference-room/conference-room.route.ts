import { Route } from '@angular/router';

import { ConferenceRoomComponent } from "./conference-room.component";

export const CONFERENCE_ROOM_ROUTE: Route = {
    path: 'rooms/:id',
    component: ConferenceRoomComponent,
    data: {
        authorities: [],
        pageTitle: 'Building Detail'
    }
};
