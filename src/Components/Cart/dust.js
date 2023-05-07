const [totalAmount, setTotalAmount] = useState();
  // const [totalItem, setTotalItem] = useState();
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   loadItem();
  // }, []);

  // const mailId = localStorage.getItem("token");
  // const emailId = mailId.replace("@", "").replace(".", "");

  // const loadItem = async () => {
  //   let total = 0;
  //   let numberOfItem = 0;
  //   const result = await axios.get(
  //     `https://crudcrud.com/api/6e1263703efe44fabf634a13781d25b4/${emailId}`
  //   );
  //   setItem(result.data);
  //   result.data.map((prices) => {
  //     // set total amount
  //     total += prices.quantity * Number(prices.price);
  //     setTotalAmount(total.toFixed(2));
  //     //set total item
  //     numberOfItem += Number(prices.quantity);
  //     setTotalItem(numberOfItem);
  //     console.log(totalItem);
  //   });
  // };

  // const removeItem = async (id) => {
  //   let isRemove = window.confirm("are you sure");
  //   if (isRemove) {
  //     await axios.delete(
  //       `https://crudcrud.com/api/6e1263703efe44fabf634a13781d25b4/${emailId}/${id}`
  //     );
  //   }
  //   loadItem();
  // };