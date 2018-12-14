import { Component, Input, OnInit } from '@angular/core';
import { NgxuxMatDialogService }    from './ngxux-mat-dialog.service';

@Component({

    selector: 'ngxux-mat-dialog',

    template: `

        <div class="wrapper">

            <div class="header">

                <div class="title">

                    {{ ngxuxMatDialogService.getInstance(id).title }}

                </div>

                <div class="buttons">

                    <mat-icon (click)="ngxuxMatDialogService.close(id)">close</mat-icon>

                </div>

            </div>

            <div class="content">

                <ng-content></ng-content>

            </div>

            <div class="footer">

                <div class="buttons-left">

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).backShow"
                            (click)="ngxuxMatDialogService.onBackClick(id)"
                            mat-raised-button>

                        {{ ngxuxMatDialogService.getInstance(id).backLabel }}

                    </button>

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).deleteShow"
                            (click)="ngxuxMatDialogService.onDeleteClick(id)"
                            mat-raised-button
                            class="delete">

                        {{ ngxuxMatDialogService.getInstance(id).deleteLabel }}

                    </button>

                </div>

                <div class="message">

                    {{ ngxuxMatDialogService.getInstance(id).footerMessage }}

                </div>

                <div class="buttons-right">

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).nextShow"
                            (click)="ngxuxMatDialogService.onNextClick()"
                            mat-raised-button>

                        {{ ngxuxMatDialogService.getInstance(id).nextLabel }}

                    </button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-dialog.component.scss' ]

})
export class NgxuxMatDialogComponent implements OnInit {

    @Input() public id: string;

    public constructor(public ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    ngOnInit() {
    }

}
