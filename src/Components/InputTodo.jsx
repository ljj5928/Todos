import React from 'react'

const InputTodo = ({addList,inputText,setInputText,maxLength}) => {
  return (
    <>
      <form className="input_todo" onSubmit={(e) => addList(e)}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
          maxLength={maxLength}
          autoFocus
        />
        <button type="submit" className="pc_btn">추가 +</button>
        <button type="submit" className="mobile_btn">+</button>
      </form>
    </>
  )
}

export default InputTodo
