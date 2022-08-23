W = 'aabaaac'
m = len(W)
i = 0
j = 1

arr = []
# No proper prefix for string of length 1:
arr.append(0)

while j < m:
    if W[i] == W[j]:
        i+=1
        arr.append(i)
        j+=1
    # The first character didn't match:
    elif i == 0:
        arr.append(0)
        j+=1
    # Mismatch after at least one matching character:
    else:
        i = arr[i - 1]

print(arr)