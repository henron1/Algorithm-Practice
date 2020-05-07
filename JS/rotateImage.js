function rotateImage(m) {
	const n = m.length;
	const x = Math.floor(n / 2);
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < n - 2 * i - 1; j++) {
			let t = m[i + j][n - 1 - i];
			m[i + j][n - 1 - i] = m[i][i + j];
			m[i][i + j] = t;

			t = m[n - 1 - i][n - 1 - i - j];
			m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
			m[i][i + j] = t;

			t = m[n - 1 - i - j][i];
			m[n - 1 - i - j][i] = m[i][i + j];
			m[i][i + j] = t;
		}
	}
	return m;
}
