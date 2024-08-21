import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
