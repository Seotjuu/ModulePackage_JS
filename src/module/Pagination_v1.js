import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const Pagination_v1 = (props) => {

  const [presentPage, setPresentPage] = useState(1);  // 현재 페이지

  const limit = 5; // 페이지 당 Row 갯수

  const totalPage =  Math.ceil(props.data.length / limit); // 

  // 1page = 0 ~ 4 , 2page = 5 ~ 10

  useEffect(()=>{
    props.pageHandler((presentPage * limit) - limit, presentPage * limit)
    console.log(page);
  }, [presentPage])

  // const page = Array(totalPage).map((e, i)=>i+1) // 이게 안 됨
  const page = [...Array(totalPage)].map((_, index) => index + 1); // 얘는 됨

  return (
    <div className="Pagination_v1">
      <Pagination>
        <Pagination.First 
          onClick={()=>{
            setPresentPage(1);
          }}
        />
        <Pagination.Prev
          onClick={()=>{
            setPresentPage((e)=>e === 1?1: e-1);
          }}
        />

          {
            page.map((item, itemIndex)=>{

              return(
                <Pagination.Item
                  active={presentPage === item}
                  key={itemIndex}
                  onClick={()=>{
                    setPresentPage(item);
                  }}
                >
                  {item}
                </Pagination.Item>
              )
            })
          }
        

        <Pagination.Next 
          onClick={()=>{
            setPresentPage((e)=>e === totalPage?totalPage: e+1);
          }}
        />
        <Pagination.Last 
          onClick={()=>{
            setPresentPage(totalPage);
          }}
        />
      </Pagination>
    </div>
  );
};

export default Pagination_v1;
