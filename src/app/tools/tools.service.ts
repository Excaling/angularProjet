import { Injectable } from '@angular/core';

import { TOOLS } from './TOOLS';
import { Tool } from './tool';


@Injectable() //Le service peut lui meme avoir des dépendances. pour les composants, @Component s'occupe dejà des dépendances
export class ToolsService{

    getTools(): Tool[]{
        return TOOLS;
    }
    getTool(pId: number): Tool{
        let tools =  this.getTools();
        for(let i = 0 ; i < tools.length; i++){
            if(tools[i].id == pId){
                return tools[i];
            }
        }
    }


    getToolTypes(): string[]{
        let type = ["Exploitation", "OSINT", "Fingerprinting", "PostExploitation"];
        return type;
    }

}