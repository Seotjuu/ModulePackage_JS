import Pagination from "react-bootstrap/Pagination";

const Pagination_v1 = (props) => {
  const page = [];

  for (let i = 1; i <= props.maxPage; i++) {
    page.push(...[i]);
  }

  return (
    <div className="Pagination_v1">
      <Pagination>
        <Pagination.First
          onClick={() => {
            props.pageHandler(1);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            props.pageHandler(
              props.presentPage - 1 <= 0 ? 1 : props.presentPage - 1
            );
          }}
        />
        {page.map((data, index) => (
          <Pagination.Item
            key={index}
            active={props.presentPage === data}
            onClick={() => {
              props.pageHandler(data);
            }}
          >
            {data}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => {
            props.pageHandler(
              props.presentPage + 1 >= props.maxPage
                ? props.maxPage
                : props.presentPage + 1
            );
          }}
        />
        <Pagination.Last
          onClick={() => {
            props.pageHandler(props.maxPage);
          }}
        />
      </Pagination>
    </div>
  );
};

export default Pagination_v1;
