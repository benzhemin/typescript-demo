function quickSort(arr: any[]): any[] {
  if (arr.length <= 1) { return arr; }
  // pick first as pivot
  const [pivot, ...rest] = arr;

  const arrObj: any = { left: [], right: [] };

  for (const item of rest) {
    if (item <= pivot) { 
      arrObj.left.push(item); 
    } else { 
      arrObj.right.push(item); 
    }
  }

  arrObj.left = quickSort(arrObj.left);
  arrObj.right = quickSort(arrObj.right)

  return [...arrObj.left, pivot, ...arrObj.right];
}

const quickArr = [1, 6, 1, 4, 2, 3, 9, 8, 10];
console.log(JSON.stringify(quickSort(quickArr)));