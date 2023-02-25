import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>죄송합니다.</h1>
        <p>예기치못한 에러가 발생했습니다. 다시 시도해주세요.</p>
        <p>
          <div>{error.data}</div>
          <div>{error.status}</div>
          <div>{error.statusText}</div>
        </p>
      </div>
    );
  } else {
    return <div>Error Page</div>;
  }
}
