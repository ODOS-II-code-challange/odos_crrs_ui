import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OdosCrrsUiSharedModule } from '../shared';
import { REPORT_ROUTE, ReportComponent } from './';
import { DatepickerModule } from 'ngx-date-picker';
import {ChartModule} from 'primeng/chart';

@NgModule({
    imports: [
        OdosCrrsUiSharedModule,
        ChartModule,
        RouterModule.forChild([ REPORT_ROUTE ])
    ],
    declarations: [
        ReportComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OdosCrrsUiReportModule {}
