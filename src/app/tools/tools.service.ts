import { Injectable } from '@angular/core';

import { TOOLS } from './TOOLS';
import { Tool } from './tool';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';

@Injectable() //Le service peut lui meme avoir des dépendances. pour les composants, @Component s'occupe dejà des dépendances
export class ToolsService{

    constructor(private httpClient: HttpClient){

    }

    private toolsUrl = 'api/tools';
    private log(log: string){
        console.info(log);
    }

    private handleError<T>(operation: string = 'operation', result?: T){
        return (error: any): Observable<T> =>
        {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return of( result as T ); //l'objet reseulte et passé en param
        } ; //On retourne un obserbble en cas d'erreur pour que l'appli continue quoi qu'il arrive
    }


    searchTool(term: string): Observable<Tool[]>{
        if(!term.trim()){
            return (of([]));
        }

        return this.httpClient.get<Tool[]>(`${this.toolsUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`${term} found`)),
            catchError(this.handleError(`searchTool`, []))
        );
    }

    updateTool(tool: Tool): Observable <Tool>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.httpClient.put<Tool>(this.toolsUrl, tool, httpOptions).pipe
        (
            tap(x => this.log(`${ tool.name } updated`)),
            catchError(this.handleError<Tool>(`update tool on ${tool.name}`))
        );
    }

    deleteTool(tool: Tool): Observable<Tool>{
        const url = `${this.toolsUrl}/${tool.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.httpClient.delete<Tool>(url).pipe(
            tap(_ => this.log(`tool ${ tool.id } deleted`)),
            catchError( this.handleError<Tool>(`deleteTool id: ${tool.id}`) )
        );
    }

    getTools(): Observable<Tool[]>{
        return this.httpClient.get<Tool[]>(this.toolsUrl).
        pipe(tap(x => this.log(`fetch tools ${x}`)), 
        catchError( this.handleError(`getTools`, []))
        );
    }
    getTool(pId: number): Observable<Tool>{
        const url  = `${this.toolsUrl}/${pId}`;
        return this.httpClient.get<Tool>(url).
        pipe(tap(_ => this.log( `fetched tool id ${pId}`)),
            catchError(this.handleError<Tool>(`getTool id = ${pId}`)
            ));
    }


    getToolTypes(): string[]{
        let type = ["Exploitation", "OSINT", "Fingerprinting", "PostExploitation"];
        return type;
    }

}