function subArrayJumlahK(arr, k) {
    const countMap = new Map();
    countMap.set(0, 1);
    
    let currentSum = 0;
    let totalSubarrays = 0;
    
    for (let num of arr) {
        currentSum += num;
        
        if (countMap.has(currentSum - k)) {
            totalSubarrays += countMap.get(currentSum - k);
        }
        
        countMap.set(currentSum, (countMap.get(currentSum) || 0) + 1);
    }
    
    return totalSubarrays;
}

function karakterPertamaUnik(s) {
    const charCount = new Map();
    
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}

function topKFrequent(arr, k) {
    const freqMap = new Map();
    
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    const sortedElements = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
    
    return sortedElements.slice(0, k).map(item => item[0]);
}

console.log("--- Test Soal 2: subArrayJumlahK ---");
console.log(subArrayJumlahK([1, 1, 1], 2)); 
console.log(subArrayJumlahK([1, 2, 3], 3)); 

console.log("\n--- Test Soal 3: karakterPertamaUnik ---");
console.log(karakterPertamaUnik('leetcode')); 
console.log(karakterPertamaUnik('loveleetcode')); 

console.log("\n--- Test Soal 4: topKFrequent ---");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); 
console.log(topKFrequent([4, 4, 4, 4, 2, 2, 1, 1, 1], 2));