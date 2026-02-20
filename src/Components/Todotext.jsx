import React from 'react'

const Todotext = ({totalListCount,uncompletedListCount,completedListCount}) => {
  return (
    <>
      <div className="todo_text">
        <div className="text_box">
          <span>전체</span>
          <span className="count">{totalListCount}</span>
        </div>
        <div className="text_box">
          <span>진행중</span>
          <span className="count uncom">{uncompletedListCount}</span>
        </div>
        <div className="text_box">
          <span>완료</span>
          <span className="count com">{completedListCount}</span>
        </div>
      </div>
    </>
  )
}

export default Todotext
