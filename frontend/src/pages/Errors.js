import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "Error";
  let message = "Something went wrong";
  console.log(error);
  if (error.status !== 200) {
    const data = JSON.parse(error.data);
    message =  data.message;
  }
  return (
    <>
    <MainNavigation></MainNavigation>
    <PageContent title={title} children={message} />

    </>
  )
}
export default ErrorPage;
