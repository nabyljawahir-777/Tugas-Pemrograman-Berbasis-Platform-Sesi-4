const employee = {
    name: "Nabyl Jawahir",
    address: {
        street: "Jl.Lingkar Selatan, Selakaso",
        city: "Sukabumi",
        postalcode: "43194"
    }
};
employee.address.city = "Bandung";

console.log("Nama Karyawan: ", employee.name)
console.log("Alamat Lengkap:", employee.address)