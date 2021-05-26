import { Component } from '@angular/core';
import { Skill } from 'src/app/shared/models';

@Component({
  selector: 'app-exp-skills',
  templateUrl: './exp-skills.component.html',
  styleUrls: ['./exp-skills.component.scss']
})
export class ExpSkillsComponent{
  webSkills: Array<Skill> = [
    {
      name: 'Angular',
      level: 75
    },
    {
      name: 'NodeJs',
      level: 50
    },
    {
      name: 'ReactJs',
      level: 25
    },
    {
      name: 'HTML',
      level: 75
    },
    {
      name: 'CSS',
      level: 75
    },

  ]
  netSkills: Array<Skill> = [
    {
      name: 'C#',
      level: 50
    },
    {
      name: 'EF',
      level: 50
    },
    {
      name: 'Asp.NET',
      level: 25
    },
    {
      name: 'WPF',
      level: 50
    },
    {
      name: 'WCF',
      level: 50
    },
  ]
  dbSkills: Array<Skill> = [
    {
      name: 'Microsoft SQL Server',
      level: 50
    },
    {
      name: 'PostgreSQL',
      level: 75
    },
    {
      name: 'MySql',
      level: 25
    },
  ]

  constructor() { }


}
