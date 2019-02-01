interface PValuesFile {
  [index: string]: number[];
}

import pValues from '@/r/p_values.json';

export type SampleSize = keyof typeof pValues;


export function getPValue(sampleSize: SampleSize, incorrectCount: number) {
  if (pValues[sampleSize][incorrectCount] === undefined) {
    console.log(`Invalid incorrectCount ${incorrectCount} for sampleSize ${sampleSize}`);
    return 1;
  }
  return pValues[sampleSize][incorrectCount];
}

