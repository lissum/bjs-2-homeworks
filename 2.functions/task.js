function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
	let sumOdd = arr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let evenElements = arr.filter(num => num % 2 === 0);
	if (evenElements.length === 0) {
		return 0;
	}

	let sumEven = evenElements.reduce((acc, curr) => acc + curr, 0);
	return Number((sumEven / evenElements.length).toFixed(2));
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}

	return maxWorkerResult;
}
