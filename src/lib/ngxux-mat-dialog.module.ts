import { CommonModule }                                    from '@angular/common';
import { NgModule }                                        from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { NgxuxMatDialogComponent }                         from './ngxux-mat-dialog.component';

@NgModule({

    declarations: [

        NgxuxMatDialogComponent,

    ],

    imports: [

        CommonModule,

        MatButtonModule,
        MatDialogModule,
        MatIconModule,

    ],

    exports: [

        NgxuxMatDialogComponent

    ]

})
export class NgxuxMatDialogModule {
}
