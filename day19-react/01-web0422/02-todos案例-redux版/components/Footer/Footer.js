import React from 'react'

import './Footer.css'
export default function Footer(props) {
  const { list } = props
  // 计算完成个数和总共的个数
  const allTotal = list.length
  const doneTotal = list.filter((item) => item.isDone).length
  return list.length ? (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={allTotal === doneTotal}
          onChange={() => {
            props.allcheckchange()
          }}
        />
      </label>
      <span>
        <span>已完成 {doneTotal}</span> / 全部 {allTotal}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.cleardonetodos()
        }}
      >
        清除已完成任务
      </button>
    </div>
  ) : (
    <h1>恭喜,暂无任务</h1>
  )
}
