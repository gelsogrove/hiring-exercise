import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface ICounterDTO {
    value: number;
}

@Component({
  selector: 'app-multi-request',
  templateUrl: './multiRequest.component.html',
  styleUrls: ['./multiRequest.component.scss']
})
export class MultiRequestComponent implements OnInit {
    private backendUrl = 'http://localhost:8080/api/hiring/counter';
    private requests: number[]=[] ;
    public showdata= false;
    public lastValue = 0;
    private unsubscribe$ = new Subject<void>();
   
    constructor(private http: HttpClient) {}

    ngOnInit() {        
        this.fetchValue();
    }

    fetchValue(): void {                  
        this.showdata= false;
        
        let dictionaryRequest = ['A','B','C'];          
        let i=0;        
        var promise;        
        this.setIntervalX(() => {                             

            var headers = { 
                headers: new HttpHeaders({'X-Request-Type' : dictionaryRequest[i]})
            }
            promise = new Promise((resolve, reject) => {     
                this.http.get(this.backendUrl, headers)                     
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((result: ICounterDTO) => {                                         
                    resolve(result.value); //resolve promise
                    this.lastValue = result.value;
                });    
            });   
            promise.then((result: number) => {                    
                this.requests.push(result);                    
                if (this.requests.length % 3 == 0) {
                    this.showdata= true;
                }
            });

            i++;                        
        }, 100, 3);  // delay, repetitions                                           
    }

    sortValues() {        
        return this.requests.sort((a,b) =>  - b);
    }


    private setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(() => {
    
           callback();
    
           if (++x === repetitions) {
               window.clearInterval(intervalID);
           }
        }, delay);
    }


    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }


}
