import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Desenvolvedor Fullstack Trainee',
        p: 'FCamara | Abr 2024 - Presente',
      },
      text: 'Ingressei no Grupo FCamara através do programa de formação e atualmente atuo como desenvolvedor fullstack',
    },
    {
      summary: {
        strong: 'MBA em Desenvolvimento Fullstack',
        p: 'Rocketseat + Sirius | Jul 2024 - Jul 2025',
      },
      text: 'Pós graduação em desenvolvimento Fullstack focada em Javascript/Typescript, React, React Native e Node.js',
    },
    {
      summary: {
        strong: 'Sistemas da Informação',
        p: 'UNASP | Ago 2019 - Ago 2023',
      },
      text: 'Graduação em Sistemas da Informação no Centro Universitário Adventista de São Paulo (UNASP)',
    },
  ]);
}
