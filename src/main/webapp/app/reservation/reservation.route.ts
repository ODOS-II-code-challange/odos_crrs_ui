import { Route } from '@angular/router';

import { ReservationComponent } from './';

export const RESERVATION_ROUTE: Route = {
    path: 'reservation/:id',
    component: ReservationComponent,
    data: {
        authorities: [],
        pageTitle: 'Reserve a room'
    }
};
