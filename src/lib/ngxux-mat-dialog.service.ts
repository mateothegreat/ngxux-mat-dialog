import { ComponentType }              from '@angular/cdk/portal';
import { Injectable }                 from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgxuxMatDialogSettings }     from './ngxux-mat-dialog-settings';

@Injectable({
    providedIn: 'root'
})
export class NgxuxMatDialogService {

    private instances: Array<NgxuxMatDialogSettings> = [];

    public constructor(private matDialog: MatDialog) {

    }

    public getInstance(id: string): NgxuxMatDialogSettings {

        return this.instances[ id ];

    }

    public open<T>(componentRef: ComponentType<T>, dialogSettings: NgxuxMatDialogSettings, data?: any) {

        console.log('DialogService.open()', dialogSettings);

        let _config: MatDialogConfig = new MatDialogConfig();

        _config.width = dialogSettings.width || '500px';
        _config.height = dialogSettings.height || '500px';
        _config.data = data;

        dialogSettings.dialogRef = this.matDialog.open(componentRef, _config);


        dialogSettings.dialogRef.afterClosed().subscribe(() => {

            delete this.instances[ dialogSettings.id ];

            console.log(this.instances);

        });

        this.instances[ dialogSettings.id ] = dialogSettings;

    }

    public close(id: string): void {

        console.log(this.instances);

        this.instances[ id ].dialogRef.close();

    }

    public onBackClick(id: string): void {

        if (this.instances[ id ].backLabel === 'Cancel') {

            this.close(id);

        }

    }

    public onDeleteClick(id: string): void {


    }

    public onNextClick(id: string): void {


    }

}
