export class Climber {
  public name: string;
  public id: number;
  public birthday: Date;
  public dateCreated: Date;
  public ofAge: boolean;
  public guardianName: string;

  constructor(name: string, id: number, birthday: Date, gName: string) {
    var _now = new Date();
    this.name = name;
    this.id = id;
    this.birthday = birthday;
    this.dateCreated = _now;
    this.guardianName = gName;
    this.ofAge = yearsDiff(birthday, _now);
  }
}

// find age of climber
function yearsDiff(d1: Date, d2: Date) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();

  return yearsDiff >= 18 ? true : false;
}
