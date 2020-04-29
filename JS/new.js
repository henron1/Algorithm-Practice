function solution(S, K) {
	let newMap = new Map();
	for (let i = 0; i < S.length; i++) {
		newMap.set(S.split(new RegExp(`${S[i]}`, "gi")).length - 1, S[i]);
		newMap.delete(K - 1);
		var arr = [];
		newMap.forEach((key, value) => {
			arr.push(value, key);
		});
	}
	// return arr;
	return arr.join("").replace(1, "");
}

console.log(solution("AAAAAAAAAAABBBCCDDCCC", 3));
