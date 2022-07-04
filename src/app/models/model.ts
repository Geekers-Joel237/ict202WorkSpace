export interface ICompetence{
	id?:string,
	titre:string,
	niveau:number,
	dateDebut:Date,
	dateFin:Date,
	categorie:string
}

export interface IRealisation{
	id?:string,
	desc:string,
	categorie:string
}

export interface ICertification{
	id?:string,
	titre:string,
	organisme:string,
	categorie:string
	
}

export interface IFormation{
	id?:string,
	diplome:string,
	ecole:string,
	periode:string,
	categorie:string
}

export interface IExperience{
	id?:string,
	poste:string,
	entreprise:string,
	periode:string,
	detail?:string,
	country:string
}

export interface ILangage{
	id?:string,
	nom:string,
	niveau:number
}

export interface ILoisir{
	id?:string,
	nom:string
}

export interface ILiens{
	id?:string,
	titre:string,
	url:string
}

export interface IEmail{
	id?:string,
	email:string
}

export interface IContact{
	id?:string,
	contact:string
}

export interface IUser{
	email:string,
	password:string,
	nom?:string,
	prenom?:string,
	dateNaissance?:Date,
	site?:string,
	photo?:string,
	biographie?:string;
}