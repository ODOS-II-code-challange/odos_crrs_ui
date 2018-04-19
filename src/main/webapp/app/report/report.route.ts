import { Route } from '@angular/router';

import { ReportComponent } from './';

export const REPORT_ROUTE: Route = {
    path: 'reports',
    component: ReportComponent,
    data: {
        authorities: [],
        pageTitle: 'Reports '
    }
};
