import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OdosCrrsUiSharedModule } from '../shared';
import { RESERVATION_ROUTE, ReservationComponent } from './';

@NgModule({
    imports: [
        OdosCrrsUiSharedModule,
        RouterModule.forChild([ RESERVATION_ROUTE ])
    ],
    declarations: [
        ReservationComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OdosCrrsUiReservationModule {}
