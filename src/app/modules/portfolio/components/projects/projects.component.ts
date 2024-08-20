import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: '/assets/img/projects/vfull.png',
      alt: 'Projeto Coffee Delivery',
      title: 'Coffee Delivery',
      width: '100px',
      height: '51px',
      description:
        'Frontend desenvolvido com React como solução para segundo desafio do curso de React da Rocketseat.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://ignite-coffee-delivery-hu2qn3fv7-giovani-o.vercel.app/',
        },
      ],
    },
  ]);
}
