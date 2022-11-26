import { useState } from "react"

export const useList=(defaultList=[])=>{
  const [listValues,setListValues]=useState(defaultList)

  const push=(item)=>{
    setListValues(oldList=>[...oldList,item])
  }

  const remove=(index)=>{
    setListValues(oldList=>oldList.filter((_,i)=>index!=i))
  }
  
  const clear=()=>{
    setListValues([])
  }

  const sortList=(compareFunction)=>{
    const newList=listValues.sort(compareFunction)
    setListValues(newList)
  }

  const reverseList=()=>{
    setListValues(listValues.reverse())
  }

  return {listValues,setListValues,push,remove,clear,sortList,reverseList}

}