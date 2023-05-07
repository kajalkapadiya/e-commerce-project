import AddItemForm from "./AddItemForm";

const Products = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsData = (props) => {
  const dataList = Products.map((data) => {
    return (
      <div key={data.id}>
        <section className="container">
          <div className="card-body">
            <h3>{data.title}</h3>
            <div className="image-container">
              <img src={data.imageUrl} alt="Album 1 img" />
            </div>
            <div className="d-flex justify-content-space-between" style={{maxWidth: "300px" , width: "300px"}}>
              <span>
                $<span>{data.price}</span>
              </span>
              <AddItemForm id={data.id} item={data.title} price={data.price} />
            </div>
          </div>
        </section>
      </div>
    );
  });
  return (
    <section>
      <div style={{ display: "grid", gridTemplateColumns: " 1fr 1fr" }}>
        {dataList}
      </div>
    </section>
  );
};

export default ProductsData;
