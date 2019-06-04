# src-updateChildren
case1 空到 + 新元素   ====》》》 addnodes   oldendIdx 长度0-1 = -1
```
this.items = [{id: 4, val: 'E'}]

// case1   
// (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx)  end 都为-1 不会进入while
// debugger
addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);

```

  








case2   元素在中间   oldkeyToIndx
```
this.items = [{id: 12, val: 'C'}]

// case2   
debugger
// 找到旧的节点，处理以后，删除旧的节点
vnodeToMove = oldCh[idxInOld];

```









case3  有data + 加新元素   addnodes ==>> 对比过后 oldstartIdx和newstartIdx 都加了 old就超过旧的了
oldnode 就undefined  while 循环就不走了。

// case3 
// debugger
createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);

```
this.items = [{id: 13, val: 'D'}]
```









case4 元素反转，新增
```
this.items.reverse().push({id: 4, val: 'E'})

// case4 
// debugger
while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
```



