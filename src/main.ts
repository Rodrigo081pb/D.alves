import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { PolaroidCardComponent } from './app/components/polaroid-card/polaroid-card.component';
import 'hammerjs';


bootstrapApplication(PolaroidCardComponent, {
  providers: [provideRouter(routes)],
});
