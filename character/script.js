let character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (character.health >= 20) {
          character.health -= 20;
        } else {
            alert('Character Died');
        }
        update();
      },
      levelUp() {
        character.level += 1;
        character.health += 20;
        update();
      }
};

document.querySelector(".image").src = character.image;

function update(){
    document.querySelector(".name").innerHTML = character.name;
    document.querySelector("#class").innerHTML = character.class;
    document.querySelector("#level").innerHTML = character.level;
    document.querySelector("#health").innerHTML = character.health;
}

update()

document.querySelector("#attacked").addEventListener("click", character.attacked)
document.querySelector("#levelup").addEventListener("click", character.levelUp)