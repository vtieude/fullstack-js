import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "Error";
  let message = "Something went wrong";
  const data = error?.data;
  console.log('error page', error);
  message = data?.data?.message ??  data?.message;
  return (
    <>
    <MainNavigation></MainNavigation>
    <PageContent title={title} children={message} />

    </>
  )
}
export default ErrorPage;
