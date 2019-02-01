export interface PermutationItem<T> {
  permutationKey: number;
  item: T;
}

export class Permutations {
  public static createPermutation(length: number) {
    const permutation: number[] = [];
    for (let i = 0; i < length; i++) {
      let randomInt: number;
      do {
        randomInt = this.getRandomInt(0, length - 1);
      } while (permutation.includes(randomInt));
      permutation.push(randomInt);
    }
    return permutation;
  }
  public static getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public static getKeyedPermutation<T>(array: T[]): Array<PermutationItem<T>> {
    const permutation = this.createPermutation(array.length);
    const permutationArray = new Array<PermutationItem<T>>();
    for (let i = 0; i < array.length; i++) {
      permutationArray.push({item: array[permutation[i]], permutationKey: Math.random()});
    }
    return permutationArray;
  }
}
