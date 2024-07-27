
const student = {
    name: "Alice",  
    grades: [90, 85, 80, 88],
    
    addGrade: function(grade){ 
        this.grades.push(grade);
    },

    getAverageGrade: function(){
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
}

student.addGrade(95);

const averageGrade = student.getAverageGrade(); 
console.log(averageGrade);
