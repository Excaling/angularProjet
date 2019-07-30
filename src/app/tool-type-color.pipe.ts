import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'toolTypeColor'})
export class ToolTypeColorPipe implements PipeTransform{
    transform(type: string): string {
        let color;
        switch(type){
            case 'OSINT':
                color = 'red lighten-1';
                break;
            case 'Exploitation':
                color = 'blue lighten-1';
                break;
            case 'Fingerprinting':
                color = 'deep-orange';
                break;

            case 'Maintaining Acces':
                color = 'green lighten-1';
                break;
            default:
                color = 'grey';
                break;
        }
        return "chip " + color;
    }
    
}