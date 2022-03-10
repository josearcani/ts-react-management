export const itemCounter = (items:any) => {
  let mySet:any = new Set(items.map((item:any) => item.rol.split('_')[0]));
  mySet = [...mySet];

  const total = mySet.map((item:any) => {
    let counter = 0;
    items.forEach((element:any) => {
      if (element.rol.includes(item)) {
        counter++;
      }
    });
    return {item, counter}
  })
  return total
}