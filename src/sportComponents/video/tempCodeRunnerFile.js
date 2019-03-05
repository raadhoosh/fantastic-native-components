
console.time("a")
_.each(playbackDataItems, item => {
    return item;
});
console.timeEnd("a")

console.time("c")
_.each(playbackDataItems, item => {
    return item;
});
console.timeEnd("c")