import React from "react";

const Filter = ({filter,setFilter,completeAll,deleteAll,checkFalse}) => {
  return (
    <>
      <div className="filter">
        <div className="filter_btn">
          <button
            className={filter === "total" ? "active" : ""}
            onClick={() => setFilter("total")}
          >
            전체
          </button>
          <button
            className={filter === "uncompleted" ? "active" : ""}
            onClick={() => setFilter("uncompleted")}
          >
            남은 목록
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            완료된 목록
          </button>
        </div>
        <div className="total_btn">
          <button type="button" className="complete_all" onClick={()=>completeAll()}>
            {checkFalse ? '전체 완료' : '전체 해제'}
          </button>
          <button type="button" className="delete_all" onClick={()=>deleteAll()}>
            모두 삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
