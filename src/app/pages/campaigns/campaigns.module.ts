import {NgModule} from "@angular/core";
import {DefaultComponent} from "../dashboards/default/default.component";
import {SaasComponent} from "../dashboards/saas/saas.component";
import {CryptoComponent} from "../dashboards/crypto/crypto.component";
import {BlogComponent} from "../dashboards/blog/blog.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardsRoutingModule} from "../dashboards/dashboards-routing.module";
import {UIModule} from "../../shared/ui/ui.module";
import {NgbDropdownModule, NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {WidgetModule} from "../../shared/widget/widget.module";
import {NgApexchartsModule} from "ng-apexcharts";
import {SharedModule} from "../dashboards/saas/shared/shared.module";
import {SimplebarAngularModule} from "simplebar-angular";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardsRoutingModule,
        UIModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbNavModule,
        WidgetModule,
        NgApexchartsModule,
        SharedModule,
        SimplebarAngularModule
    ]
})
export class CampaignsModule { }