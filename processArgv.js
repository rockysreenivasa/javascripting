let total = 0
//pick from array[2] as first 2 args of process.argv are node and path
for (let i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i])
}

console.log(total);
