'use strict';

function GetDeepestBranch(obj) {
    let bestEl = null
    let bestTrack = {}
    let depth = 0
    if (obj === null || typeof obj != 'object') {
        return [obj, 0]
    }
    for (const [key, val] of Object.entries(obj)) {
        const [elTrack, elDepth] = GetDeepestBranch(val)
        if (elDepth + 1 > depth) {
            bestEl = key
            bestTrack = elTrack
            depth = elDepth + 1
        }
    }
    return [{[bestEl] : bestTrack}, depth]
}

const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync');

const fIn = 'text.txt'
const content = fs.readFileSync(fIn, 'utf8')
const obj = JSON.parse(content)

const [res, _] = GetDeepestBranch(obj)
console.log(JSON.stringify(res, null, 2))