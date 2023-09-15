export class Chore {
  public name: string; // name of the recipe
  public description: string; // description of the recipe
  public finishDate: Date; // finish date
  public startDate: Date; // start date

  // make a new Recipe object with the name, description, and image
  constructor(name: string, desc: string, finish: Date) {
    this.name = name;
    this.description = desc;
    this.finishDate = finish;
    this.startDate = new Date();
  }
}
