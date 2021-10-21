let name = {
    firstName: 'Anubhav',
    lastName: 'Tyagi'

}
let printFullName = function (city, state) {
    console.log(`${this.firstName} ${this.lastName}, ${city}, ${state}`);
}

// let printNamewithCity = printFullName.bind(name, 'Delhi');
// printNamewithCity('Delhi');

Function.prototype.myBind = function (...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}
let printNamewithCity2 = printFullName.myBind(name, "Delhi");
printNamewithCity2("UP");