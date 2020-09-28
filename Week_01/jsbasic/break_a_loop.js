let count = 10

for (let index = 0; index < count; index++) {
    
    // 开启这个 return 失效
    if(index > 7) {
        break
    }

    // if(index > 8) {
    //     return
    // }


    if(index % 3 == 0) {
        continue
    }

    console.log('index:', index)
}
