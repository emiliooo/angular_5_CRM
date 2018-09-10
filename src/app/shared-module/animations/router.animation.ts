import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%', height: 'calc(100% - 210px)' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
