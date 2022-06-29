import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewCampaignComponent} from "./new-campaign/new-campaign.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";

const routes: Routes = [
  /*  {
        path: 'new-campaign',
        component: NewCampaignComponent
    },{
        path: 'all-campaigns',
        component: CampaignsComponent
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CampaignsRoutingModule { }
