import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TOOLS } from './tools/TOOLS';

export class InMemoryDataService implements InMemoryDataService{

    createDb(){
        let tools = TOOLS;
        return {tools}; 
    }

}