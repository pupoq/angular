import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  inputData = {
    weather: {
      isSunny: true,
      temp: '+25'
    }
  }

  temperature = {degree: '+24', description: 'sunny'}

  export(){
    let data = JSON.stringify(this.inputData)
  
    let dataURI = 'data:application/json;character=utf-8' + encodeURIComponent(data)
  
    let exportFileName = 'weather.json'
  
    let linkElement = document.createElement('a')
  
    linkElement.setAttribute('href', dataURI)
    linkElement.setAttribute('download', exportFileName)
    linkElement.click()
}
}
