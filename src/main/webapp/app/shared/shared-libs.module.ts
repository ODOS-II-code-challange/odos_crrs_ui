import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';
import {ChartModule} from 'primeng/chart';
import { TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
        }),
        InfiniteScrollModule,
        ChartModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        CookieModule.forRoot()
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        CommonModule,
        // ChartModule,
        // TabsModule,
        // BsDropdownModule,
        NgbModule,
        NgJhipsterModule,
        InfiniteScrollModule
    ]
})
export class OdosCrrsUiSharedLibsModule {}
