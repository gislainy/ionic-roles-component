
import { Component, Input, OnInit } from '@angular/core';
import { pode } from './pode.componet'
/**
 * Generated class for the PodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pode',
  templateUrl: 'pode.html'
})
export class PodeComponent implements OnInit {

  private _text: string;
  private _rules: string;
  private _rules_arr: Array<string>;
  constructor() {
    // debugger
    // this.text = text;
    // this.rules = "administrador";
    // console.log('Hello PodeComponent Component');
    this._text = 'Hello World';
  }
  ngOnInit() {}
  @Input()  title: string

  @Input('rules')
  get rules(): string {
    return this.rules;
  }
  set rules(rules: string) {
    this._rules = rules;
    this._rules_arr = this._rules.split(', ');
  }
  // pode_fn() {
  //   debugger
  //   return pode('teste', this._rules_arr);
  // }
  pode_fn() {
    return pode('teste', this._rules_arr);
  }
}
