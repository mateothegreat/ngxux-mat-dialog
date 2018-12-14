import { MatDialogRef } from '@angular/material';

export class NgxuxMatDialogSettings {

    public id: string;

    public dialogRef: MatDialogRef<any>;

    public width: string;
    public height: string;

    public title: string;

    public backLabel: string = 'Cancel';
    public backShow: boolean = true;

    public deleteLabel: string = 'Delete';
    public deleteShow: boolean;

    public footerMessage: string = '';

    public nextLabel: string = 'Save';
    public nextShow: boolean = true;
    public nextEnabled: boolean = true;

    public constructor(config?: {

        id: string,

        width?: string,
        height?: string,

        title?: string,

        backLabel?: string,
        backShow?: boolean,

        deleteLabel?: string,
        deleteShow?: boolean,

        footerMessage?: string,

        nextLabel?: string,
        nextShow?: boolean,
        nextEnabled?: boolean

    }) {

        this.id = config.id;

        this.width = config.width;
        this.height = config.height;

        this.title = config.title;

        this.backLabel = !!config.backLabel ? config.backLabel : 'Cancel';
        this.backShow = config.backShow;

        this.deleteLabel = !!config.deleteLabel ? config.deleteLabel : 'Delete';
        this.deleteShow = config.deleteShow;

        this.backShow = config.backShow;

        this.footerMessage = config.footerMessage;

        this.nextLabel = config.nextLabel;
        this.nextShow = config.nextShow;
        this.nextEnabled = config.nextEnabled;

    }

}
