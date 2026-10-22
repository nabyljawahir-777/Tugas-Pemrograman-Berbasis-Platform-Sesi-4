function createTrackedObject(target) {
    return new Proxy(target, {
        set(obj, prop, value) {
            const oldValue = obj[prop];
            const action = prop in obj ? "UPDATE" : "ADD";

            obj[prop] = value;
            console.log(`[${action}] Property '${prop}': '${oldValue}' -> '${value}'`);
            return true;
        },

        deleteProperty(obj, prop) {
            if (prop in obj) {
                console.log(`[DELETE] Property '${prop}' bernilai '${obj[prop]}' telah dihapus.`);
                delete obj[prop];
                return true;
            }
            return false;
        }
    });
}

const user = createTrackedObject({ name: "Nabyl"});

user.name = "Nabyl Jawahir";
user.age = 19;
delete user.age;