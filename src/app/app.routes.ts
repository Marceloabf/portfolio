import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import("./home/home.component").then((x) => x.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import("./about/about.component").then((x) => x.AboutComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import("./projects/projects.component").then((x) => x.ProjectsComponent)
    },
    {
        path: 'experience',
        loadComponent: () => import("./experience/experience.component").then((x) => x.ExperienceComponent)
    }
];
