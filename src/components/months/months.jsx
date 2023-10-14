import I from './I';
import II from './II';
import III from './III';

/*
 * New month component should be added in the below
 */
const monthsComponents = [
  { month: 'I', component: <I /> },
  { month: 'II', component: <II /> },
  { month: 'III', component: <III /> },
];

const months = monthsComponents.map(({ month }) => month);

export { monthsComponents, months };
