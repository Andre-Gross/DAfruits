import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Singlefruit } from './singlefruit/singlefruit';
import { FruitlistdataService } from '../shared/services/fruitlistdata.service';

@Component({
    selector: 'app-fruitlist',
    imports: [
        CommonModule,
        Singlefruit
    ],
    templateUrl: './fruitlist.html',
    styleUrl: './fruitlist.scss',
})
export class Fruitlist {

    fruitlistdata = inject(FruitlistdataService)

    fontColorGood = 'green';
    fontColorBad = 'red';
}
