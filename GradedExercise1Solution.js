const prompts = require('prompts');
// import ask from 'prompts';
// const ask = require('prompts');



// math.floor((math.random() * 100) + 1);
class Character {
  constructor(hpoint, dpoint, hchance) {
      this.hpoint = hpoint;
      this.dpoint = dpoint;
      this.hchance = hchance;
      
  }


  attack() {
    let chance = Math.floor((Math.random() * 100) + 1);
    console.log('Enemy attempts attacking you');
    
          if(chance <= this.hchance){
            Player1.hpoint -= this.dpoint;
            console.log('Enemy attack you Success! Your hit point remains' + Player1.hpoint);
          } else{
            console.log('Enemy attack misses!');
          }
  }


}

class Player extends Character {
  constructor(hpoint, dpoint, hchance) {
      super(hpoint, dpoint, hchance);
      this.location = 'chamber';
  }

  attack() {
    
    let chance = Math.floor((Math.random() * 100) + 1);
    switch(this.location) {
      case 'hallway':
        console.log('Player attempts attacking Rat');
        
          if(chance <= this.hchance){
            
            console.log('You attack sewer rat success! Hit point remaining ' + this.hpoint);
          } else{
            console.log('Attack misss!');
          }
        break;
               
      case 'chamber':
        console.log('Player attempts attacking dragon');
        console.log(chance);
          if(chance <= this.hchance){
            
            console.log('Giant Dragon attack you Success! Hit point remaining' + Player1.hpoint);
          } else{
            console.log('Ginat Dragon attack misses!');
          }
        break;
      
      case 'exit':
        console.log('No enemy to attack here');
        gameLoop();
        break;
    }

    if (this.hpoint < 1){
      continueGame = false;
      console.log('----------------');
      console.log('You Lost');
      
    }
  }


  moveToRoom() {

    switch(Player1.location) {
      case 'dungeon':
        dungeon.dmove();
        break;
  
      case 'hallway':
        hallway.dmove()
        break;
  
      case 'chamber':
        chamber.dmove()
        break;

      case 'portal':
        portal.dmove()
        break;
      }
      
      // console.log('Race car enters the race!');
  }

  lookAround() {    
      switch(this.location) {
        case 'dungeon':
          console.log('----------------');
          console.log('You look around');
          console.log('Your are in The dungion and it is a big and damp room with broken statues all around');
          console.log('<br \><br \>There are doorways leading to: <br \> Hallway <br \><br \><br \>');
          console.log('----------------');
          
          break;
        
        case 'hallway':
          console.log('----------------');
          console.log('You look around');
          console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some funus growing on the walls');
          console.log('<br \><br \>There are doorways leading to: <br \>The Dungeon<br \>Chamber<br \><br \>');
          
          console.log('You see a Small sewer rat');
          sewerRat.attack();
          console.log('----------------');
          break;
        
        case 'chamber':
          console.log('----------------');
          console.log('You look around');
          console.log('You are in Chamber and it is a small chamber, which is illuminated by a glowing portal of somekind');
          console.log('<br \><br \>There are doorways leading to: <br \>Hallway <br \>Glowing Portal <br \><br \>');
          
          console.log('You see a Giant Dragon');
          giantDragon.attack();
          console.log('----------------');
          break;
        
        case 'portal':
          console.log('----------------');
          console.log('You Won!!!');
          continueGame = false;
          break;
      }
        
    }
  }


let sewerRat = new Character('2', '1', '50');
let giantDragon = new Character('4', '8', '90');
let Player1 = new Player('10', '2', '75');


class room {
  constructor(previous, next, enemy) {
      this.previous = previous;
      this.next = next;
      this.enemy = enemy;
      
  
  }
    dmove() {
      // move(this.previous, this.next);
      move();
    };
     
}

let dungeon = new room('', 'hallway', '');
let hallway = new room('dungeon', 'chamber', 'sewerRat');
let chamber = new room('hallway', 'portal', 'giantDragon');
let portal = new room('chamber', '', '');




async function gameLoop() {
  let continueGame = true;

  // Example set of UI options for the user to select
  const initialActionChoices = [
      { title: 'Look around', value: 'look' },
      { title: 'Go to Room', value: 'goToRoom' },
      { title: 'Attack', value: 'attack'},
      { title: 'Exit game', value: 'exit'}
  ];

  // Show the list of options for the user.
  // The execution does not proceed from here until the user selects an option.
  const response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose your action',
    choices: initialActionChoices
  });

  // Deal with the selected value
  console.log('You selected ' + response.value);
  switch(response.value) {
    case 'look':
      console.log('you have chosen to look around');
      Player1.lookAround();
      break;
    
    case 'goToRoom':
      console.log('you have chosen to move around');
      Player1.moveToRoom();
      break;
    
    case 'attack':
      console.log('you have chosen to attack');
      Player1.attack();
      break;
    
    case 'exit':
      continueGame = false;
      break;
  }
  
  if(continueGame) {
    gameLoop();
  }    
}

async function move(prev, nxt) {
  // let continueGame = true;
  // this.before = prev;
  // this.after = nxt;
  // Example set of UI options for the user to select
  const initialChoices = [
      { title: 'Look Around', value: 'look' },
      { title: 'Go to Room', value: 'goToRoom' },
      
  ];

  // Show the list of options for the user.
  // The execution does not proceed from here until the user selects an option.
  const reply = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose your action',
    choices: initialChoices
  });

  // Deal with the selected value
  console.log('You selected ' + reply.value);
  // Player1.location = reply.value ;
  // Player1.lookAround();
  switch(reply.value) {
    case 'look':
      console.log('another look around');
      
      break;
    
    case 'goToRoom':
      console.log('another move around');
      
      break;
    
    
  }
  
  // if(continueGame) {
  //   gameLoop();
  // }    
}



process.stdout.write('\033c'); // clear screen on windows

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
gameLoop();