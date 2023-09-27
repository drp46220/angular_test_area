export class climber {
  public name: string;
  public id: number;
  public birthday: Date;
  public dateCreated: Date;
  public ofAge: boolean;
  public guardianName?: string;

  isOfAge(name: string, id: number, birthday: Date) {
    this.name = name;
    this.id = id;
    this.birthday = birthday;
    this.dateCreated = new Date();
    this.ofAge = true;
  }

  isNotOfAge(name: string, id: number, birthday: Date, guardian: string) {
    this.name = name;
    this.id = id;
    this.birthday = birthday;
    this.dateCreated = new Date();
    this.ofAge = false;
    this.guardianName = guardian;
  }
}
