// Determind if string has unique charaters

let str = "abcdac"

// Using additional data structure
// Approch 1 , using hash map

function getDuplicacyUsingHash(str) {
    let h = {}, i = 1
    for(const s of str) {
        if(h[s] > 0){
            console.log("string has a duplicated element" + " " + s)
        }
        else{
            h[s] = i
        }
        i++
    }
    console.log(JSON.stringify(h, null, 2))
}

// Time complexity O(n)
// Space Complexity O(n)

//getDuplicacyUsingHash(str)

function getDuplicateWithoutAdditionalDS(str) {
    let i = 0, flag = false
    for(const s of str) {
        let indx = str.indexOf(s, i+1)
        if(indx > -1) {
            console.log("String has a duplicated element" + " " + s) 
            flag = false
            return
        }
        else flag = true
        i++
    }
    if(flag) console.log("String is unique !")
}
getDuplicateWithoutAdditionalDS(str)

// Time complexity O(n)
// Space Complexity O(1)