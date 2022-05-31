function MakeStreetFighter(
  fighterName,
  fighterGender,
  fighterColor,
  fighterStrength
) {
  this.fighterName = fighterName;
  this.fighterGender = fighterGender;
  this.fighterColor = fighterColor;
  this.fighterStrength = fighterStrength;
  this.fighterCanKick = function () {
    console.log("Hiiiiya!");
  };
  this.fightercanJump = function () {
    console.log("JUMP SO HIGH!");
  };
}

const iso = new MakeStreetFighter("Iso", "Female", "Blue", 10);

console.log(iso);
