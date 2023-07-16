import { setStateValue } from '../store';
// import { attack } from './actions';
import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const baseAttack = 5;
  const baseHP = 40;
  const currentHP = 40;

  const enemyState = {
    baseAttack,
    baseHP,
    currentHP,
  };

  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1', isClicked: false });

  const enemyBars1 = {
    ...createHPBar({
      game,
      x: 7,
      yOffset: enemy1.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('enemy1', { ...enemyState, bars: enemyBars1, x: 7, xOffset: 45, yOffset: enemy1.height });

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2', isClicked: false });
  const enemyBars2 = {
    ...createHPBar({
      game,
      x: 9,
      yOffset: enemy2.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('enemy2', { ...enemyState, bars: enemyBars2, x: 9, xOffset: 45, yOffset: enemy2.height });

  const enemies = [enemy1, enemy2];
  // attack({ game, damage: 35, name: 'enemy1' });
  // attack({ game, damage: 5, name: 'enemy1' });
  // attack({ game, damage: 35, name: 'enemy2' });
};

export default init;
