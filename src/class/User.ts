import Child from "./Child";

export default class User{
    constructor(
public UserId:string,
public FirstName:string,
public LastName:string,
public Kind:string,
public DateOfBirth:Date,
public Hmo:string,
//  public Child:Child[],
    ){}
}