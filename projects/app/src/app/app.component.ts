import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '../../../../dist/ng-components/lib';

export interface IHeroes {
  value: number;
  label: string;
  nickname: string;
  email: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  heroesColumns: Array<PoTableColumn>;
  heroesItems: Array<IHeroes>;

  hero: IHeroes;

  ngOnInit(): void {
    this.setupComponents();
    this.hero = {
      email: 'bruce@bruce.com',
      label: 'Hulk',
      nickname: 'Bruce',
      salary: 123330040.12,
      value: 3333212.343
    };
  }

  setupComponents(): void {
    this.heroesColumns = [
      { property: 'value', label: 'ID', type: 'number' },
      { property: 'label', label: 'Label', type: 'string' },
      { property: 'nickname', label: 'Nickname', type: 'string' },
      { property: 'email', label: 'Email', type: 'string' },
      { property: 'salary', label: 'Salary', type: 'number', format: '1.2-2' }
    ];

    this.heroesItems = [
      {
        email: 'teste@teste.com',
        label: 'Goku',
        nickname: 'Goku 1',
        salary: 12372662.998,
        value: 21231.33
      },
      {
        email: 'teste@teste.com',
        label: 'Gohan',
        nickname: 'Gohan',
        salary: 372662.998,
        value: 1231.33
      }
    ];
  }
}
