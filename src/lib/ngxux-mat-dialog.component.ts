import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxuxMatDialogService }                  from './ngxux-mat-dialog.service';

@Component({

    selector: 'ngxux-mat-dialog',

    template: `

        <div class="wrapper">

            <div class="header" [style.background]="headerBackground">

                <div class="title">

                    {{ ngxuxMatDialogService.getInstance(id).title }}

                </div>

                <div class="buttons">

                    <mat-icon (click)="ngxuxMatDialogService.close(id)">close</mat-icon>

                </div>

            </div>

            <div class="content" [style.background]="contentBackground">

                <ng-content></ng-content>

            </div>

            <div class="footer" [style.background]="footerBackground">

                <div class="buttons-left">

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).backShow"
                            (click)="ngxuxMatDialogService.onBackClick(id); onBackClick(id)"
                            mat-raised-button>

                        {{ ngxuxMatDialogService.getInstance(id).backLabel }}

                    </button>

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).deleteShow"
                            (click)="ngxuxMatDialogService.onDeleteClick(id); onDeleteClick(id)"
                            mat-raised-button
                            class="delete">

                        {{ ngxuxMatDialogService.getInstance(id).deleteLabel }}

                    </button>

                </div>

                <div class="message">

                    {{ ngxuxMatDialogService.getInstance(id).footerMessage }}

                </div>

                <div class="buttons-right">

                    <button *ngIf="ngxuxMatDialogService.getInstance(id).nextShow && nextShow"
                            (click)="ngxuxMatDialogService.onNextClick(id); onNextClick(id)"
                            [disabled]="!nextEnabled"
                            mat-raised-button>

                        {{ ngxuxMatDialogService.getInstance(id).nextLabel }}

                    </button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-dialog.component.scss' ]

})
export class NgxuxMatDialogComponent {

    @Output() public nextClick = new EventEmitter();
    @Output() public backClick = new EventEmitter();
    @Output() public deleteClick = new EventEmitter();

    @Input() public id: string;
    @Input() public nextEnabled: boolean;
    @Input() public nextShow: boolean = true;

    @Input() public headerBackground: string = '#FEFFFE';
    @Input() public contentBackground: string = '#FEFFFE';
    @Input() public footerBackground: string = '#FEFFFE';

    public constructor(public ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public onBackClick(id: string): void {

        this.backClick.emit(id);

    }

    public onDeleteClick(id: string): void {

        this.deleteClick.emit(id);

    }

    public onNextClick(id: string): void {

        this.nextClick.emit(id);

    }

}
