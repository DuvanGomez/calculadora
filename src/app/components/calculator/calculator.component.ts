import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'ng-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {  
    
    constructor(public dataService: DataService) {
        
    }

    ngOnInit() {
    this.dataService.limpiar(this.dataService.clean ? false:true);
   }
    press(character: any)
    {
        this.dataService.limpiar(this.dataService.clean);
        if(character == "d")
        {
            console.log(this.dataService.numi.length);
            this.dataService.deleteChar(this.dataService.numi);
        }
        else
        {
            this.dataService.ingreso(character);
        }
        console.log(character, this.dataService.ecuacion, this.dataService.display);
    }
    igual(): void
    {
        this.dataService.ecuacion.push(this.dataService.numi);
        this.dataService.displaysup += this.dataService.numi;
        this.dataService.numi="";
        this.dataService.respuesta();
        this.dataService.display = this.dataService.ecuacion[0];
        this.dataService.clean = true;
    }
}