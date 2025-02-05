import axios from "axios"

// SSR / How to call the api in nextjs. You can use useEffect like before but it diminishes SSR. Else we do....
async function getUserDetails() {
  const res = await axios.get("http://localhost:3000/api/user");
  // console.log(res);
  // const he =  new Promise((myResolve)=> setTimeout(() => {
  //   console.log("time out");
  //   myResolve("Ok");
  // }, 5000));
  // await he;
  return res.data;
}
export default async function Page() {
  const users = await getUserDetails();
  return (
    <div>
      {users.name}
      {/* {users.map((data : {name:string , id:number}) => {
        return (
          <div key={data.id}>
            {data.name}
          </div>
        )
      })} */}
    </div>
  )
}