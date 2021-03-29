const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: 0
  };
  
  const mageDamage = () => {
    if (mage.mana < 15) {
        return 'Não possui mana suficiente'
    }
    else {
        () => {
            let random = parseInt(mage.intelligence * 2 * Math.random())
            if (random < mage.intelligence) {
                mage.mana -= 15;
                return mage.intelligence;        
            }
            else {
                mage.mana -= 15;
                return random;                    
            }
        }
    }
};

  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: 0
  };

  const warriorDamage =  () => {
    let random = parseInt(warrior.strength * 2 * Math.random())
    if (random < warrior.strength) {
        return warrior.strength
    }
    else {
        return random
    }
};
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: 0
  };

 const dragonDamage = () => {
    let random = parseInt(50 * Math.random())
    if (random < 15) {
        return 15;
    }
    else {
        return random;
    }
};
  
  const battleMembers = { mage, warrior, dragon };


const gameActions = {
    warriorActions: () => {
        warrior.damage = warriorDamage();
        dragon.healthPoints -= warrior.damage;
    },
    mageActions: () => {
        mage.damage = mageDamage();
        if (typeof mage.damage !== 'number') {

        }
        else {
            dragon.healthPoints -= mage.damage;
        }       
    },
    dragonActions: () => {
        dragon.damage = dragonDamage();
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    atualization: () => {
        gameActions.dragonActions();
        gameActions.mageActions();
        gameActions.warriorActions();
        return battleMembers;
        }
  };

  console.log(gameActions.atualization())

  
  