import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiService {
  constructor() { }

  handleError(data: any){
  }

  handleSuccess(data: any, message?: string) {
  }
}