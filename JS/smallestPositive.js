function solution(A) {
	let seen = new Set([...A]);
	for (let i = 1; i < Number.MAX_SAFE_INTEGER; ++i) if (!seen.has(i)) return i;
	return 0;
}

console.log(solution([1, 2, 4, 3, 5, 6, 8]));
