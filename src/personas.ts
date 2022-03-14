/**
 * Clase contenedor que almacena la informacion primaria de una persona, como su nomvbre, apellidos, cumpleaños y género
 */
export class People {
    /**
     * Constructor simplificado de la clase People
     * @param name string: nombre de la persona
     * @param last_name string: apellido de la persona
     * @param birth string: cumpleaños de la persona
     * @param gender string: génro de la persona
     */
    constructor(private name: string, private last_name: string, private birth: string, private gender: string) {
        
    }
    /**
     * Devuelve el atributo pivado name
     */
    getName() {
        return this.name;
    }

    /**
     * Devuelve el atributo privado apellido
     */
    getLastName() {
        return this.last_name;
    }

    /**
     * Devuelve el atributo privado cumpleaños
     */
    getBirth() {
        return this.birth;
    }

    /**
     * Devuelve el atributo privado género
     */
    getGender() {
        return this.gender;
    }

    /**
     * Modifica el atributo privado para el nombre
     * @param new_name nuevo nombre a introducir
     */
    setName(new_name: string) {
        this.name = new_name;
    }

    /**
     * Modifica el atributo privado para el apellido 
     * @param new_last_name  nuevo apellido
     */
    setLastName(new_last_name: string) {
        this.last_name = new_last_name;
    }

    /**
     * Modifica el atributo privado para el cumpleaños
     * @param new_birth  nuevo cumpleaños
     */
    setBirth(new_birth: string) {
        this.birth = new_birth;
    }

    /**
     * Modifica el atributo privado para el genero
     * @param new_gender nuevo genero
     */
    setGender(new_gender: string) {
        this.gender = new_gender;
    }
}

/**
 * Clase que contiene la informacion de un estudiente, ademas que es una herenia de la clase personas
 */
export class Student extends People {
    constructor(name: string, last_name: string, birth: string,  gender: string,
                private mail: string, private subjects: number) {
        super(name, last_name, birth, gender);
    }
    /**
     * Devuelve del alumno el nombre
     */
    getStudentName(){
        super.getName();
    }

    /**
     * Devuelve del alumno el apellido
     */
    getStudentLastName() {
        super.getLastName();
    }

    /**
     * Devuelve del alumno el cumpleaños
     */
    getStudentBirth() {
        super.getBirth();
    }

    /**
     * Devuelve del alumno el genero
     */
    getStudentGender() {
        super.getGender();
    }

    /**
     * Devuelve del alumno el email institucional
     */
    getStudentMail() {
        return this.mail;
    }

    /**
     * Devuelve del alumno el numero de asignaturas matriculadas
     */
    getStudentSubjects() {
        return this.subjects;
    }

    /**
     * Modifica del alumno el nombre
     * @param new_name nuevo nombre
     */
    setStudentName(new_name: string){
        super.setName(new_name);
    }

    /**
     * Modifica del alumno el apellido
     * @param new_last_name nuevo apellido
     */
    setSudentLastName(new_last_name: string) {
        super.setLastName(new_last_name);
    }

    /**
     * Modifica del alumno el cumpleaños
     * @param new_birth nuevo cumpleaños
     */
    setStudentBirth(new_birth: string) {
        super.setBirth(new_birth);
    }

    /**
     * Modifica del alumno el genero
     * @param new_gender nuevo genero
     */
    setStudentGender(new_gender:string) {
        super.setGender(new_gender);
    }

    /**
     * Modifica del alumno el email institucional
     * @param new_mail nuevo email
     */
    setStudentMail(new_mail: string) {
        this.mail = new_mail;
    }

    /**
     * Modifica del alumno el numero de asignaturas matriculadas
     * @param new_subjects nuevo numeo de asignaturas
     */
    setStudentSubjects(new_subjects: number) {
        this.subjects = new_subjects;
    }
}

/**
 * Clase que contiene la informacion de un profesor, ademas que es una herenia de la clase personas
 */
export class Professor extends People {
    constructor(name: string, last_name: string, birth: string,  gender: string,
                private mail: string, private students: number) {
        super(name, last_name, birth, gender);
    }
    /**
     * Devuelve del profesor el nombre
     */
    getProfessorName(){
        super.getName();
    }

    /**
     * Devuelve del profesor el apellido
     */
    getProfessorLastName() {
        super.getLastName();
    }

    /**
     * Devuelve del profesor el cumpleaños
     */
    getProfessorBirth() {
        super.getBirth();
    }

    /**
     * Devuelve del profesor el genero
     */
    getProfessorGender() {
        super.getGender();
    }

    /**
     * Devuelve del profesor el email institucional
     */
    getProfessorMail() {
        return this.mail;
    }

    /**
     * Devuelve del profesor el numero de alumnos a los que imparte clase
     */
    getProfessorSubjects() {
        return this.students;
    }

    /**
     * Modifica del profesor el nombre
     * @param new_name nuevo nombre
     */
    setProfessorName(new_name: string){
        super.setName(new_name);
    }

    /**
     * Modifica del profesor el apellido
     * @param new_last_name nuevo apellido
     */
    setProfessorLastName(new_last_name: string) {
        super.setLastName(new_last_name);
    }

    /**
     * Modifica del profesor el cumpleaños
     * @param new_birth nuevo cumpleaños
     */
    setProfessorBirth(new_birth: string) {
        super.setBirth(new_birth);
    }

    /**
     * Modifica del profesor el genero
     * @param new_gender nuevo genero
     */
    setProfessorGender(new_gender:string) {
        super.setGender(new_gender);
    }

    /**
     * Modifica del profesor el email institucional
     * @param new_mail nuevo email
     */
    setProfessorMail(new_mail: string) {
        this.mail = new_mail;
    }

    /**
     * Modifica del profesor el numero de asignaturas matriculadas
     * @param new_subjects nuevo numeo de asignaturas
     */
    setProfessorStudents(new_students: number) {
        this.students = new_students;
    }
}