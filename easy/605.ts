function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0
  while(n > 0 && i < flowerbed.length){
      if(flowerbed[i] == 0)
        if((i - 1 < 0 || flowerbed[i-1] == 0) && (i + 1 >= flowerbed.length || flowerbed[i+1] == 0)){
          --n
          flowerbed[i] = 1
        }
      ++i
  }

  return n == 0
};