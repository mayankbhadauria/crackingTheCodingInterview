let M = [ [ 1, 2, 3 ], [ 4, 5, 0 ], [ 7, 0, 9 ], [ 10, 11, 12 ] ]

// Approch 1

let zerosIndix = []

function findZeros(M, R, C) {
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(M[i][j] == 0) {
                zerosIndix.push({R:i,C:j}) 
            }
        }
    }
    zerosIndix.forEach(x => {
        putRowsToZeros(x.R, C)
        putColumnsToZeros(x.C, R)
    })
}
// Complexity O(M*N) =~ O(N^2)
// Space Complexity O(M*N)

function putRowsToZeros(R, C) {
    for(let x=0; x<C; x++) {
        M[R][x]=0
    }
}

function putColumnsToZeros(C, N) {
    for(let y=0; y<N; y++){
        M[y][C]=0
    }
}

//findZeros(M, 4, 3)
//console.log(M)


// Approch 2

let splChar = "#"

function findZerosAndReplace(M, R, C) {
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(M[i][j] == 0) {
                putRowsToSplChar(i, C, splChar)
                putColumnsToSplChar(R, j, splChar)
            }
        }
    }
    
    console.log(M)

    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(M[i][j] == splChar) {
                M[i][j] = 0
            }
        }
    }
}

function putRowsToSplChar(R, C, splChar) {
    for(let x=0; x<C; x++) {
        M[R][x]=splChar
    }
}

function putColumnsToSplChar(C, N, splChar) {
    for(let y=0; y<N; y++) {
        M[y][C]=splChar
    }
}

findZerosAndReplace(M, 4, 3)

//console.log(M)