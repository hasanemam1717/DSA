const studentDatabase = ["Apon", "Emma", "Hasan"];
const findStudents = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === studentName) {
      console.log(`Find this student name ${studentName}`);
    }
  }
};

findStudents(studentDatabase, "Emma");
