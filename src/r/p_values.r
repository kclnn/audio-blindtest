rm(list=ls(all=TRUE))
sampleSizes <- c(10, 15, 20, 25)
pValuesList = list()
for (sampleSize in sampleSizes)
{
    possibleResults = seq(0, sampleSize)
    pValues = pbinom(possibleResults, sampleSize, 0.5)
    pValuesList = c(pValuesList, list(pValues))
    
}
names(pValuesList) <- sampleSizes
print(pValuesList)

library(jsonlite)


fileConnection <- file("p_values.json")
writeLines(toJSON(pValuesList), fileConnection)
close(fileConnection)