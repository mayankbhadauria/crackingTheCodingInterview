
// Question : Rotate NxN matrix by 90 degree anticlockwise 

// First Approch 
// Replace store whole N*N matrix temporarily (M90) and replace item one by one 

let M = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
let M90 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

RoteNintyDegree(M)

function RoteNintyDegree(M) {
    let N = 2, n = N; 
    for(R=0; R<=N; R++) {
        for(C=0; C<=N; C++) {
            M[R][C] = M90[C][n]
        }
        n--
    }
console.log(M)
}

// Time Complexity O(N^2)
// Space Complexity O(N^2)
// Space complexity is really bad 

// Second Approach 
// Rotate matrix by each layer e.g. 3x3 will have 2 layers , 4x4 will have 3

function rotateMatrixOptimizedSapce(M, N) {

let n = N-1

for(let x=0; x<N/2; x++) {

    for(let y=x; y<n-x; y++) {
        
        let temp = M[x][y]
        
        M[x][y] = M[y][n-x]
        
        M[y][n-x] = M[n-x][n-y]
        
        M[n-x][n-y] = M[n-y][x]
        
        M[n-y][x] = temp
    }
}
console.log(M)
}
let M1 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
rotateMatrixOptimizedSapce(M1, 3)

// Time Complexity O(N^2)
// Space Complexity O(1) , constent space compelxity much better than first.

// Third approch
// First rotate each row than each column

function rotateRow(M,N) {
    for(let x=0; x<N-1; x++){
        for(let y=x; y < N-1; y++){
            let temp = M[x][y]
            M[x][y] = M[y][x]
            M[y][x] = temp
        }        
    }
}

function rotateColumn(M,N) {
    for(let y=0; y<N-1; y++){
        for(let x=0; x<N-1; x++){
            let temp = M[y][x]
            M[y][x]=M[y][N-1-x]
            M[y][N-1-x]=temp
        }        
    }
}

let M2 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
rotateRow(M2, 3)
rotateColumn(M2, 3)
console.log(M)

// Time Complexity O(N^2) + O(N^2) == O(N^2)
// Space Complexity O(1) 
