var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2)
}