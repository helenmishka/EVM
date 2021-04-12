class Student {
    constructor(group_name, student_card, marks) {
        this.group_name = group_name
        this.student_card = student_card
        this.marks = marks
    }

    get output(){
        return `${this.group_name} ${this.student_card} ${this.marks}`;
    }
}

class Students{
    constructor() {
        this.arr = []
    }

    CREATE(person){
        for (const man of this.arr){
            if (man.student_card === person.student_card){
                return false
            }
        }
        this.arr.push(person)
        return true
    }

    READ(person){
        let flag = 1
        for (const man of this.arr){
            if (man.student_card === person.student_card){
                flag = 0
            }
        }
        if (flag === 0){
            console.log("NOT UNIQIE STUDENT CARD")
            return false
        }
        console.log(person.output)
        return true
    }

    UPDATE(person){
        let j = -1
        for (let i = 0; i < this.arr.length; i++){
            if (arr[i].student_card === person.student_card){
                j = i
            }
        }
        if (j === -1) {
            console.log("NOT UNIQIE STUDENT CARD")
            return false
        }
        this.arr.splice(j, 1, st)
        return true
    }

    DELETE(person){
        let j = -1
        for (let i = 0; i < this.arr.length; i++){
            if (arr[i].group_name === person.group_name){
                j = i
            }
        }
        if (j === -1) {
            console.log("ERROR")
            return false
        }
        this.arr.splice(j, 1)
        return true
    }

    average_mark_st(person){
        let n = 0
        let i = 0
        for (const mark of person.marks) {
            i++;
            n += mark
        }
        if (i === 0){
            console.log("ERROR")
            return false
        }
        return n / i
    }

    info_group(group){

        for (const man of this.arr){
            if (man.group_name === group){
                console.log(man.output)
            }
        }
        return true
    }

    info_st_group(group){
        let len = -1
        let best_person = undefined

        for (const man of this.arr){
            if(man.group_name === group)
            {
                if (man.marks.length > len){
                    len = man.marks.length
                    best_person = man
                }
            }
        }
        if (len === -1){
            console.log("ERROR")
            return false
        }
        console.log(best_person.output)
        return true
    }

    info_zero_st(){

        for (const man of this.arr){
            if (man.marks.length === 0){
                console.log(man.output)
            }
        }

        return true
    }
}


function main() {

    student_1 = new Student("VVVV", 15, [5,3,5])
    student_2 = new Student("VVVV", 16, [5,3,5,4,5])
    student_3 = new Student("XXXX", 17, [4,5,6,7,8])
    student_4 = new Student("XXXX", 19, [5,3,4])

    students_database = new Students()

    students_database.CREATE(student_1)
    students_database.CREATE(student_2)
    students_database.CREATE(student_3)
    students_database.CREATE(student_4)
    
    console.log(students_database.average_mark_st(student_1))
    students_database.info_st_group("XXXX")
    students_database.info_group("XXXX")
    students_database.info_zero_st()
}

main()