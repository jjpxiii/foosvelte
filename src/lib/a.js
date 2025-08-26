function longestSubstringOf(string) {
    let longest = ""
    for (let i = 0; i < string.length; i++) {
        let temp = string[i]
        for (let j = i + 1; j < string.length; j++) {
            if (temp.includes(string[j])) {
                break
            } else {
                temp += string[j]
            }
        }
        if (temp.length > longest.length) {
            longest = temp
        }
    }
    return longest.length;
}

console.log(longestSubstringOf("hchzvfrkmlnozjk")) // abc
console.log(longestSubstringOf("abcd".repeat(10000) + "abcde" + "abcd".repeat(10000))) // abc
