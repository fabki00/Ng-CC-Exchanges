import { BittrexComponent } from './bittrex/bittrex.component';
import { HomeComponent } from './home/home.component';
export const routes = [
  {path: '', component: HomeComponent},
  {path: 'bittrex', component: BittrexComponent},
];
