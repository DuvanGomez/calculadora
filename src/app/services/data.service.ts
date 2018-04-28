import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public i:number = 0;
  public clean:boolean = false;
  public numi ="";
  public num1;
  public num2;
  public signo;
  public ecuacion:Array<any>;
  display = null;
  displaysup = null;
  displaymed = null;
  constructor() { 
    this.ecuacion = [];
  }

  ingreso(character:any)
    {
       this.display += character;
       if(character == "+" || character == "-" ||character == "*" || character == "/")
       {
           if(character == "-" && this.numi.length == 0)
           {
               this.numi +=character;
            }
            else
            {
                this.ecuacion.push(this.numi);
                this.ecuacion.push(character);
                this.displaysup = this.display;
                this.numi="";
            }   
        }
        else
        {
            this.numi +=character;
        }
    }
    limpiar(clean):void
    {
        if(this.display == null || clean == true )
        {
            this.display ="";
            this.displaysup = "";
            this.displaymed = "";
            this.numi="";
            this.num1 = this.num2 = 0;
            this.signo = "";
            this.ecuacion.splice(0);
            console.log(this.ecuacion);
            this.clean = false;
        }
    }
    deleteChar(numi): void
    {    
        this.display = this.display.slice(0,this.ecuacion.length);
        if(this.numi.length > 1)
        {
            this.numi = this.numi.slice(0,this.numi.length-1);
            this.display += this.numi;
        }
        else
        {
            this.ecuacion.splice(this.ecuacion.length - 1,this.ecuacion.length);
        }
    }
    displayMed(ecuacion):void
    {
        if(this.ecuacion.length==3)
            {
                this.displaymed = this.ecuacion[0] + this.ecuacion[1] + this.ecuacion[2];
            }
    }
    operacion(ecuacion):void
    {
        this.signo = this.ecuacion[this.i];
        this.num1 = Number(this.ecuacion[this.i-1]);
        this.num2 = Number(this.ecuacion[this.i+1]);
        this.numi = eval(this.num1 + this.signo + this.num2);
        this.ecuacion[this.i-1] = this.numi;
        this.ecuacion.splice(this.i,this.i+1);
    }
    respuesta():void
    {   
        for (this.i=0; this.i<this.ecuacion.length; this.i++)
        {
            if(this.ecuacion[this.i] == "+" || this.ecuacion[this.i] == "-")
            {
                this.operacion(this.ecuacion);
            }
            else{
                this.i+=1;
            }
            this.displayMed(this.ecuacion);
            this.i = 0;
        }
    }


}
