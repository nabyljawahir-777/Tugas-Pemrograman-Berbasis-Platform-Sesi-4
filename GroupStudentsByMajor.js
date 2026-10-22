const students = [
    { name: "Nabyl", major: "Teknik Informatika"},
    { name: "Yazriel", major: "Hukum"},
    { name: "Afny", major: "Teknik Informatika"}
];

function GroupByMajor(StudentList) {
    return StudentList.reduce((grouped, student) => {
        const major = student.major;

        if (!grouped[major]) {
            grouped[major] = [];
        }
        grouped[major].push(student);
        return grouped;
    }, {});
}

console.log(GroupByMajor(students));