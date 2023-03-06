arr = [0, 81, 9, 3, 2, 4, 1, 7, 34]
lenArr = len(arr)
i = 0
while i < lenArr:
    j = 0
    while j < lenArr-1:
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
        j += 1
    i += 1
print(arr)
