
class Student {
    static count = 0;
    constructor( name, age, phoneNumbe,marks){
        this.name = name;
        this.age = age;
        this.phoneNumbe = phoneNumbe;
        this.marks = marks;
        Student.count++;
    }
    // is elibible method 

    isEligible(){
        if(this.marks > 40){
            console.log(`${this.name} is eligible`)
        }else{
            console.log(`${this.name} is not eligible`)
        }
    }
    // object count method

    static objCount(){
     return Student.count;
    }

    // ready for placement method 

    eligibleForPlacement(minAge){
        return(minMarks)=>{
            if(this.marks > minMarks && this.age > minAge){
                console.log(`${this.name} is ready for placement`);
            }else{
                console.log(`${this.name} is not ready for placement`);
            }
        }
    }
}
const student1 = new Student("mahesh",24,7487383,55);
const student2 = new Student("aniket",25,6574839,30);
const student3 = new Student("ravi",27,4567389,45);
const student4 = new Student("satish",22,3457899,35);
const student5 = new Student("vivek",23,3456789,70);
student1.isEligible();
student2.isEligible();

//  count the created objects
console.log(Student.objCount());

// printing student

student1.eligibleForPlacement(21)(45);
student2.eligibleForPlacement(17)(50);
student3.eligibleForPlacement(34)(45);
student3.eligibleForPlacement(20)(45);
student4.eligibleForPlacement(27)(30);
student5.eligibleForPlacement(22)(55);