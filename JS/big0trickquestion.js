function logAtLeast5 (n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// The above is O(n) since as n grows, the number of operations grows

function logAtMost5 (n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// the above is O(1) since as n grows past 5, n stays static 