import {AfterViewInit, Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-new-campaign.component',
    templateUrl: './new-campaign.component.html',
    styleUrls: ['./new-campaign.component.scss']
})
/**
 * Saas-dashboard component
 */
export class NewCampaignComponent implements OnInit{
    quality: any[];
    category: any[];
    country: any[];
    language: any[];
    walletTargeting: any[];
    baseTargeting: any[];
    web3Targeting: any[];
    browser: any[];
    os: any[];
    deviceType: any[];
    fileSizes: any[];
    files: any[] = [ { id: 1 }];
    ngOnInit() {
        this.quality = ['Max Reach', 'Regular', 'Premium'];
        this.category = ['Adult', 'Crypto', 'Faucets', 'Games', 'Health', 'Lifestyle', 'Movies', 'Music', 'News', 'Pay to Click', 'Technology', 'Unknown'];
        this.country = ['Thailand', 'USA', 'Canada'];
        this.language = ['USA-EN', 'UK-EN', 'French'];
        this.walletTargeting = ['MetaMask','Trust Wallet', 'NEAR wallet'];
        this.baseTargeting = ['Ethereum', 'Binance Smart Chain', 'NEAR', 'Polygon', 'Aurora', 'Avalanche'];
        this.web3Targeting = ['BTC holders', 'ETH holders', 'NFT Holders', 'DeFi audinence', 'Traders', 'Whales'];
        this.browser = ['Chrome', 'Edge', 'Firefox', 'IE', 'Opera', 'Safari', 'Other'];
        this.os = ['Android', 'Apple OS', 'Unix', 'Windows', 'Other'];
        this.deviceType = ['Desktop', 'Mobile', 'Tablet', 'TV', 'Other'];
        this.fileSizes = ['300x200', '336x280', '728x90', '300x600', '320x100', '320x50'];
    }

    public addNewSet(): void {
        const lastFile = this.files[this.files.length - 1];
        this.files.push(
            { id: lastFile.id + 1   }
        );
    }
}