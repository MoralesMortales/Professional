console.log("javascript");

//lists

let listtesting = (["2", "4", 3, "2"]);
console.log(listtesting);

//sets

let listtesting_new = new Set(["2", "4", 3, "2"]);
listtesting_new.add("holas");
console.log(listtesting_new);

//maps

let maps_mymap_1 = new Map([["Carlos", "Programador"], ["Maria", "Chef"], ["Jesus", "Ingeniero"]])

console.log(maps_mymap_1, "\n\n\n")
console.log(maps_mymap_1.get("Maria"))

//for

for (const value of listtesting){
    console.log(value)
}