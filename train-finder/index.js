class TrainFinder {
    #trains;
    constructor(data) {
        this.#trains = data;
    }
    find(from, to) {
        return Object.keys(this.#trains).filter(train => {
            const sourceIndex = this.#trains[train].indexOf(from);
            const destIndex = this.#trains[train].indexOf(to);
            return sourceIndex > -1 && destIndex > -1 && sourceIndex <= destIndex;
        });
    }

}
const data = {
    "101": ["ABC", "BCD", "CDE", "DEF", "EFG"],
    "202": ["BCD", "DEF",],
    "303": ["ABC", "XYZ", "WER", "SDF", "GHJ"],
    "404": ["XYZ", "DEF", "CDE", "EFG"],
}
const adjData = {
    "ABC": [{ station: "BCD", train: "101" }, { station: "XYZ", train: "303" }],
    "BCD": [{ station: "CDE", train: "101" }, { station: "DEF", train: "202" }],
    "CDE": [{ station: "DEF", train: "101" }, { station: "EFG", train: "404" }],
    "DEF": [{ station: "CDE", train: "404" }, { station: "EFG", train: "101" }],
    "EFG": [],
    "XYZ": [{ station: "WER", train: "303" }, { station: "DEF", train: "404" }],
    "WER": [{ station: "SDF", train: "303" }],
    "SDF": [{ station: "GHJ", train: "303" }],
    "GHJ": [],

}
function* BFSFind(from, to) {
    const visited = new Set();
    const queue = [from];
    while (queue.length > 0) {
        const source = queue.shift();
        const destinations = adjData[source];
        for (const dest of destinations) {
            if (dest.station === to) {
                yield dest.train;

            }

            if (!visited.has(dest.station)) {
                visited.add(dest.station);
                queue.push(dest.station);
            }
        }
    }
}
function* DFSFind(from, to, visited = new Set()) {

    visited.add(from);
    const destinations = adjData[from];


    for (const dest of destinations) {
        if (dest.station === to) {
            yield dest.train;
            return;
        }

        if (!visited.has(dest.station)) {
            DFSFind(dest.station, to, visited);
        }
    }

}
// const finder = new TrainFinder(data);
// console.log(finder.find("BCD", "DEF"));
console.log([...BFSFind("BCD", "DEF")]);
console.log([...DFSFind("BCD", "DEF")]);