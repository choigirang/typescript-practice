var ex23 = {};
var ts08fruits = {
    0: "1",
    1: "2",
    2: "3",
};
var ts08fruits2 = ["1", "2", "3"];
var ts08heropy = {
    name: "hi",
    age: 100,
};
var uA = {};
function ts08function(payload) {
    for (var key in payload) {
        console.log(payload[key]);
    }
}
var ts08example = {
    name: "hi",
    age: 32,
};
ts08function(ts08example);
uA["a"] = "aa";
uA[1] = "bb";
// uA["a"].length;
// uA[1].toFixed(2); // any 타입이기 때문에 가능
