import I from './I';
import II from './II';

/*
 * New month component should be added in the below
 */
const monthsComponents = [
  { month: 'I', component: <I /> },
  { month: 'II', component: <II /> },
];

const months = monthsComponents.map(({ month }) => month);

export { monthsComponents, months };
