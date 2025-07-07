import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes'; // don't surround routeConfig with curly braces here so it gives us access to the route config property

/**
 * Notes:
 * [] in provideRouter([]): represents our application routes. Will be replaced with content in routes.ts.
 * Replace [] with routeConfig: now the default path e.g. http://localhost:4200/ will show the home page.
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
